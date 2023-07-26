import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    contacts: {
      email: {
        title: 'Contact Val Saven',
        label: 'Email',
      },
      github: {
        title: 'Val Saven on Github',
        label: 'GitHub',
      },
      twitter: {
        title: 'Val Saven on Twitter',
        label: 'Twitter',
      },
      medium: {
        title: 'Val Saven on Medium',
        label: 'Medium',
      },
    },
    favorites: {
      anime: 'Anime',
      books: 'Books',
      games: 'Games',
      movies: 'Movies',
      music: 'Music',
      photo: 'Photo',
    },
    home: {
      p1: 'Hello! My name is Val Saven, which is my professional alias.',
      p2: 'Welcome to my homepage (´• ω •`)!',
      p3: 'If you\'d like to get in touch with me, please refer to the contact information provided in the contacts menu.',
    },
    menu: 'Menu',
    routes: {
      home: 'Home',
      favorites: 'Favorites',
      contacts: 'Contacts',
    },
  },

  jp: {
    contacts: {
      email: {
        title: 'Val Savenに連絡する',
        label: 'メール',
      },
      github: {
        title: 'Val SavenのGithub',
        label: 'ギットハブ',
      },
      twitter: {
        title: 'Val Savenのツイッター',
        label: 'ツイッター',
      },
      medium: {
        title: 'Val Savenのミディアム',
        label: 'ミディアム',
      },
    },
    favorites: {
      anime: 'アニメ',
      books: '本',
      games: 'ゲーム',
      movies: '映画',
      music: '音楽',
      photo: '写真',
    },
    home: {
      p1: 'こんにちは！私の名前はVal Savenで、これは私のプロフェッショナルな別名です。',
      p2: '私のホームページへようこそ (´• ω •`)！',
      p3: 'もし私に連絡したい場合は、コンタクトメニューで提供される連絡先情報を参照してください。',
    },
    menu: 'メニュー',
    routes: {
      home: 'ホーム',
      favorites: 'お気に入り',
      contacts: '連絡先',
    },
  },
};

const locale = localStorage.getItem('language') || 'en';

const i18n = createI18n({
  legacy: false,
  locale,
  messages,
});

export default i18n;
