interface InterviewCardProps{
  Interviewid?: string,
  userId?: string,
  role: string,
  type: string,
  techstack: string[],
  createdAt?: string,
}

export const interviewCovers = [
  'https://img.icons8.com/ios-filled/200/amazon.png',
  'https://img.icons8.com/ios-filled/200/ebay.png',
  'https://img.icons8.com/ios-filled/200/github.png',
  'https://img.icons8.com/ios-filled/200/google.png',
  'https://img.icons8.com/ios-filled/200/facebook-new.png',
  'https://img.icons8.com/ios-filled/200/linkedin.png',
  'https://img.icons8.com/ios-filled/200/meta.png',
  'https://img.icons8.com/ios-filled/200/netflix.png',
]

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "JavaScript", "Vue.js", "HTML/CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: "3",
    userId: "user3",
    role: "System Developer",
    type: "Hybrid",
    techstack: ["item 1", "item 2", "item 3", "item 4"],
    level: "Senior",
    questions: ["What is in your system?"],
    finalized: false,
    createdAt: "2025-03-24T15:30:00Z",
  },
  {
    id: "4",
    userId: "user1",
    role: "Full Developer",
    type: "Director",
    techstack: ["Python", "Express", "TypeScript", "Yaml"],
    level: "Senior",
    questions: ["What is this person doing?"],
    finalized: false,
    createdAt: "2025-04-21T15:30:00Z",
  },
];


