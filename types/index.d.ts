

type FormType = 'sign-in' | 'sign-up'

interface AgentProps{
  userName: string;
  userId?: string;
  type: 'generate' | 'interview';
}

interface TechIconProps{
  techStack: string[]
}

interface InterviewCardProps {
  interviewId?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
}

interface SignInParams{
  email: string;
  idToken: string;
}

interface SignUpParams{
  uid: string;
  name: string;
  email: string;
  password: string;
}

interface User{
  name: string;
  email: string;
  id: string;
}

