export interface BooksState {
  version: string;
}

export interface GamesState {
  // TODO: Добавить тип для списка игр
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  games: any[];
  gamesCount: number | null;
}
