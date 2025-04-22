import { google } from '@ai-sdk/google';
import { db } from '@/firebase/admin';

import { getRandomInterviewCover } from '@/lib/utils';

export async function GET() {
  return Response.json({ success: true, data: 'THANK YOU :)'}, { status: 200 })
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();
  try{
    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: 
        `
          Prepare questions for a job interview by with the following context below:
          1) 
          -Number of questions to generate: ${amount}.
          -Job role: ${role}.
          -Work experience level: ${level}.
          -Tech stack used for the role: ${techstack}.
          -Focus between behavioural and technical questions should lean towards: ${type}.

          2) Only return the questions without any additional text.
          Super important for the questions to not use "/" or "*" or any other special characters which might break or confuse the voice assistant.

          3) Return the questions in this format: ["Question 1", "Question 2", "Question 3"]

          Let me know if there are ambiguous details that need clarifying, thanks!
        `
    })

    const interview = {
      role, type, level,
      techstack: techstack.split(','),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString()
    }

    await db.collection('interviews').add(interview);

    return Response.json({ success: true }, { status: 200 })

  } catch (error){
    console.error(error);

    return Response.json({ success: false, error}, { status: 500 });
  }
}