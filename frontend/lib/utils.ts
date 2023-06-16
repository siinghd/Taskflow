import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TaskImage {
  id: number,
  title: string,
  size_mb?: number | undefined,
  dimension_x?: number | undefined,
  dimension_y?: number | undefined,
  file?: string[] | undefined, 
  value?: File | undefined,
}
  
export interface TaskText{
  id: number,
  title: string,
  value: string,
  characters: number | undefined,
}
  
export interface TaskInterface {
  id: number,
  completed: boolean,
  page: string,
  section: string,
  type: string,
  texts?: TaskText[],
  images?: TaskImage[]
}
