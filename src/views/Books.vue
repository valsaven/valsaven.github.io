<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="books-header"
            @click="sort(header.field)"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(book, index) in sortedBooks"
          :key="index"
          class="book"
        >
          <td class="book__cover">
            <a
              class="book__text"
              :href="book.cover.href"
            >
              <img
                :src="book.cover.src"
                :alt="book.cover.alt"
              >
            </a>
          </td>

          <td class="book__title">
            <a
              class="book__text"
              :href="book.title.href"
            >
              {{ book.title.text }}
            </a>
          </td>

          <td>
            <a
              class="book__text"
              :href="book.author.href"
            >
              {{ book.author.text }}
            </a>
          </td>

          <td class="book__text book__text--isbn13">
            {{ book.isbn13 }}
          </td>
          <td class="book__text">
            {{ book.numPages }}
          </td>
          <td class="book__text">
            {{ book.avgRating }}
          </td>
          <td class="book__text">
            {{ book.numRatings }}
          </td>
          <td class="book__text">
            {{ book.datePub }}
          </td>
          <td class="book__text">
            {{ book.datePubEdition }}
          </td>
          <td class="book__text">
            {{ book.rating }}
          </td>
          <td class="book__text">
            {{ book.shelves }}
          </td>
          <td class="book__text">
            {{ book.dateAdded }}
          </td>
        </tr>
      </tbody>
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
      headers: [
        {
          field: 'cover',
          title: 'Cover',
        },
        {
          field: 'title',
          title: 'Title',
        },
        {
          field: 'author',
          title: 'Author',
        },
        {
          field: 'isbn13',
          title: 'ISBN13',
        },
        {
          field: 'numPages',
          title: 'Pages',
        },
        {
          field: 'avgRating',
          title: 'Avg. rating',
        },
        {
          field: 'numRatings',
          title: 'Number ratings',
        },
        {
          field: 'datePub',
          title: 'Published',
        },
        {
          field: 'datePubEdition',
          title: 'Published (Edition)',
        },
        {
          field: 'rating',
          title: 'Rating',
        },
        {
          field: 'shelves',
          title: 'Shelves',
        },
        {
          field: 'dateAdded',
          title: 'Added',
        },
      ],
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },

  computed: {
    sortedBooks() {
      const copyBooks = [...this.books];

      return copyBooks.sort((a, b) => {
        let modifier = 1;

        if (this.currentSortDir === 'desc') {
          modifier = -1;
        }

        let oldVal = a[this.currentSort];
        let newVal = b[this.currentSort];

        if (['numPages', 'numRatings'].includes(this.currentSort)) {
          oldVal = Number(oldVal.replace(/[^0-9]/g, ''));
          newVal = Number(newVal.replace(/[^0-9]/g, ''));
        }

        if (oldVal < newVal) {
          return -1 * modifier;
        }

        if (oldVal > newVal) {
          return modifier;
        }

        return 0;
      });
    },
  },

  async mounted() {
    const books = localStorage.getItem('books');

    if (!books) {
      await this.updateBooks();
    } else {
      const savedBooksNumber = JSON.parse(books).length;
      const actualBooksNumber = await axios('https://goodreads-books-parser.herokuapp.com/total');

      if (savedBooksNumber === actualBooksNumber) {
        JSON.parse(books).forEach((book: BookData) => {
          this.books.push(new Book(book));
        });
      } else {
        await this.updateBooks();
      }
    }
  },

  methods: {
    async updateBooks() {
      try {
        const res = await axios('https://goodreads-books-parser.herokuapp.com/');
        localStorage.setItem('books', JSON.stringify(res.data));

        // TODO: Нужен ли отдельный класс в дальнейшем или просто this.books=res.data;
        res.data.forEach((book: BookData) => {
          this.books.push(new Book(book));
        });
      } catch (e) {
        throw new Error('Failed to load book list');
      }
    },
    sort(s: string) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc'
          ? 'desc'
          : 'asc';
      }

      this.currentSort = s;
    },
  },
});
</script>

<style scoped>
td, th {
  padding: 5px;
}

th {
  cursor:pointer;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

.books-header {
  font-size: 14px;
}

.book__text {
  font-size: 12px;
}

.book__text--isbn13 {
  overflow-wrap: anywhere;
}
</style>
