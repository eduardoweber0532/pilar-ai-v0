
export interface Phase {
  number: number;
  title: string;
  description: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface ComparisonItem {
  title: string;
  items: string[];
  isPremium?: boolean;
}
