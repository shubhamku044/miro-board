import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const COLORS = [
  '#243127',
  '#a46379',
  '#feb640',
  '#5e4d9b',
  '#010e54',
  '#0855b1',
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectionIdToColor = (connectionId: number): string => {
  return COLORS[connectionId % COLORS.length];
};
