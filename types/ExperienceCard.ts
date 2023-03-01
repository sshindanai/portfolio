import { StaticImageData } from "next/image";

export interface ExperienceCardProps {
  image: StaticImageData;
  position: string;
  company: string;
  techstacks: string[];
  startDate: string;
  endDate?: string;
  summaries: string[];
}
