interface Home {
  p1: string;
  p2: string;
  p3: string;
}

interface Favorites {
  anime: string;
  books: string;
  games: string;
  movies: string;
  music: string;
  photo: string;
}

interface ContactInfo {
  label: string;
}

interface Contacts {
  email: ContactInfo;
  github: ContactInfo;
  twitter: ContactInfo;
  medium: ContactInfo;
}

interface Routes {
  home: string;
  favorites: string;
  contacts?: string;
}

interface Translation {
  contacts: Contacts;
  favorites: Favorites;
  home?: Home;
  menu: string;
  routes: Routes;
}

interface Translations {
  en: Translation;
  ja: Translation;
  [key: string]: Translation;
}

export type {
  Home,
  Favorites,
  ContactInfo,
  Contacts,

  Routes,

  Translation,
  Translations,
};
