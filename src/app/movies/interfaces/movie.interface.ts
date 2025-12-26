export interface Movie {
  Search: Search[];
  totalResults: string;
  response: string;
}

export interface Search{
  Poster: string;
  Title:  string;
  Type:   string;
  Year: string;
}
