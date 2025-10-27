export type Article = {
  id: string;
  title: string;
  title_sv?: string; 
  tags: string[];
  summary?: string;
  createdAt?: string;
  pmid?: string;
  doi?: string;
};
