export interface IShow {
  id: number;
  name: string;
  image?: {
    medium?: string;
    original?: string;
  };
  premiered?: string;
  rating?: {
    average?: number | null;
  };
  summary?: string | null;
  genres?: string[];
  language?: string;
  status?: string;
  runtime?: number | null;
  network?: {
    name: string;
  } | null;
}

export interface ISearchResult {
  score: number;
  show: IShow;
}