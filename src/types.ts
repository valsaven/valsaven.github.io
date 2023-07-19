export interface Contact {
  href: string;
  title: string;
  label: string;
  icon: string;
}

export interface MenuItem {
  path: string;
  name: string;
  icon: string;
}

export type MenuItems = Array<MenuItem>

export type FavoritesItemType = 'anime'
  | 'books'
  | 'games'
  | 'movies'
  | 'music'
  | 'photo';
