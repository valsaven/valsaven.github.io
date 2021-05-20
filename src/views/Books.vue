<template>
  <div>
    <table class="books">
      <tr>
        <th>Cover</th>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN13</th>
        <th>Pages</th>
        <th>Avg. rating</th>
        <th>Number ratings</th>
        <th>Published</th>
        <th>Published (Edition)</th>
        <th>Rating</th>
        <th>Shelves</th>
        <th>Added</th>
      </tr>

      <tr
        v-for="(book, index) in books"
        :key="index"
        class="books"
      >
        <td class="book-cover">
          <a :href="book.cover.href">
            <img
              :src="book.cover.src"
              :alt="book.cover.alt"
            >
          </a>
        </td>

        <td class="book-title">
          <a :href="book.title.href">
            {{ book.title.text }}
          </a>
        </td>

        <td>
          <a :href="book.author.href">
            {{ book.author.text }}
          </a>
        </td>

        <td>{{ book.isbn13 }}</td>
        <td>{{ book.numPages }}</td>
        <td>{{ book.avgRating }}</td>
        <td>{{ book.numRatings }}</td>
        <td>{{ book.datePub }}</td>
        <td>{{ book.datePubEdition }}</td>
        <td>{{ book.rating }}</td>
        <td>{{ book.shelves }}</td>
        <td>{{ book.dateAdded }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface BookData {
  cover: {
    src: string;
    alt: string;
    href: string;
  };

  title: {
    text: string;
    href: string;
  };

  author: {
    text: string;
    href: string;
  };

  isbn13: string;
  numPages: number,
  avgRating: number,
  numRatings: number,
  datePub: string;
  datePubEdition: string;
  rating: number, // 0-10
  shelves: string[], // ['read', 'to-read', ...]
  dateStarted: string;
  dateRead: string;
  dateAdded: string;
}

class Book {
  cover: {
    src: string;
    alt: string;
    href: string;
  };

  title: {
    text: string;
    href: string;
  };

  author: {
    text: string;
    href: string;
  };

  isbn13: string;

  numPages: number;

  avgRating: number;

  numRatings: number;

  datePub: string;

  datePubEdition: string;

  rating: number; // 0-10

  shelves: string[]; // ['read, to-read']

  dateStarted: string;

  dateRead: string;

  dateAdded: string;

  constructor(book: BookData) {
    this.cover = {
      ...book.cover,
    };

    this.title = {
      ...book.title,
    };

    this.author = {
      ...book.author,
    };

    this.isbn13 = book.isbn13;
    this.numPages = book.numPages;
    this.avgRating = book.avgRating;
    this.numRatings = book.numRatings;
    this.datePub = book.datePub;
    this.datePubEdition = book.datePubEdition;
    this.rating = book.rating;
    this.shelves = book.shelves;
    this.dateStarted = book.dateStarted;
    this.dateRead = book.dateRead;
    this.dateAdded = book.dateAdded;
  }
}

export default defineComponent({
  name: 'Books',
  data() {
    return {
      books: [] as BookData[],
    };
  },
  async mounted() {
    const books = localStorage.getItem('books');

    if (!books) {
      const res = await axios('https://goodreads-books-parser.herokuapp.com/');
      localStorage.setItem('books', JSON.stringify(res.data));

      // TODO: Подумать, пригодится ли отдельный класс в дальнейшем или просто this.books=res.data;
      res.data.forEach((book: BookData) => {
        this.books.push(new Book(book));
      });
    } else {
      JSON.parse(books).forEach((book: BookData) => {
        this.books.push(new Book(book));
      });
    }
  },
});
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #f2f2f2
}
</style>
