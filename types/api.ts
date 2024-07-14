export interface ApiStructure {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
}
