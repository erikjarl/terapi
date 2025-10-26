export type Article = {
  id: string;
  title: string;
  tags: string[];
  summary?: string;
  createdAt?: string;
  pmid?: string;
  doi?: string;
};
