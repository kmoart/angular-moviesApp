export interface Movie {
  id:               string;
  titulo:          string;
  publisher:        Publisher;
  fechaLanzamiento: Date;
  rating:           string;
  characters:       string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
