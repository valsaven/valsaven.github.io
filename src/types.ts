export interface RootState {}

export interface BooksState {
  version: string;
}

export interface GamesState {
  games: Array<any>;
  gamesCount: number | null,
}
