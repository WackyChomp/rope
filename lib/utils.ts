import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { interviewCovers, mappings } from "@/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* --------------------------------------------------------- */
const normalizeTechName = async (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try{
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;       // returns true if icon exists
  }catch{
    return false
  }
}


const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export const getAllTechLogos = async (techArray: string[]) => {
  const logoURLS = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return{
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    }
  })

  const results = await Promise.all(
    logoURLS.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : '/tech.svg',
    }))
  );

  return results
};

/* --------------------------------------------------------- */

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `${interviewCovers[randomIndex]}`
}