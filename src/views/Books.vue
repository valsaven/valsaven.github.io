<template>
  <div>
    <table class="books">
      <tr>
        <th>cover</th>
        <th>title</th>
        <th>author</th>
        <th>isbn13</th>
        <th>numPages</th>
        <th>avgRating</th>
        <th>numRatings</th>
        <th>datePub</th>
        <th>datePubEdition</th>
        <th>rating</th>
        <th>shelves</th>
        <th>dateStarted</th>
        <th>dateRead</th>
        <th>dateAdded</th>
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

        <td>
          {{ book.isbn13 }}
        </td>

        <td>
          {{ book.numPages }}
        </td>

        <td>
          {{ book.avgRating }}
        </td>

        <td>
          {{ book.numRatings }}
        </td>

        <td>
          {{ book.datePub }}
        </td>

        <td>
          {{ book.datePubEdition }}
        </td>

        <td>
          {{ book.rating }}
        </td>

        <td>
          {{ book.shelves }}
        </td>

        <td>
          {{ book.dateStarted }}
        </td>

        <td>
          {{ book.dateRead }}
        </td>

        <td>
          {{ book.dateAdded }}
        </td>
      </tr>

      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  </div>
<!--  <v-card dark>-->
<!--    <v-card-title class="search">-->
<!--      <v-text-field v-model="search" append-icon="search"-->
<!--                    hide-details label="Search" single-line/>-->
<!--    </v-card-title>-->
<!--    <v-container class="books-list" fluid grid-list-md>-->
<!--      <v-progress-linear v-if="loading" id="books-loader" :indeterminate="true"/>-->
<!--      <v-data-iterator-->
<!--        :items="books"-->
<!--        :options.sync="options"-->
<!--        :search="search"-->
<!--        no-data-text="Loading..."-->
<!--      >-->
<!--        <template v-slot:default="props">-->
<!--          <book-card :book="props.item"/>-->
<!--        </template>-->
<!--      </v-data-iterator>-->
<!--    </v-container>-->
<!--  </v-card> &ndash;&gt;-->
<!--  <v-container-->
<!--    class="books-container"-->
<!--    fluid-->
<!--  >-->
<!--    <v-progress-circular-->
<!--      v-if="loading"-->
<!--      :size="200"-->
<!--      class="loader"-->
<!--      color="amber"-->
<!--      indeterminate-->
<!--    />-->
<!--    <v-data-iterator-->
<!--      v-else-->
<!--      :items="books"-->
<!--      :items-per-page.sync="itemsPerPage"-->
<!--      :search="search"-->
<!--      dark-->
<!--      no-data-text="Loading..."-->
<!--    >-->
<!--      <template v-slot:header>-->
<!--        <v-toolbar-->
<!--          class="mb-1"-->
<!--          dark-->
<!--        >-->
<!--          <v-text-field-->
<!--            v-model="search"-->
<!--            clearable-->
<!--            flat-->
<!--            hide-details-->
<!--            label="Search"-->
<!--            prepend-inner-icon="mdi-magnify"-->
<!--            solo-inverted-->
<!--          />-->
<!--        </v-toolbar>-->
<!--      </template>-->

<!--      <template v-slot:default="props">-->
<!--        <v-row>-->
<!--          <v-col-->
<!--            v-for="item in props.items"-->
<!--            :key="item.name"-->
<!--            cols="12"-->
<!--            lg="3"-->
<!--            md="4"-->
<!--            sm="6"-->
<!--          >-->
<!--            <v-card>-->
<!--              <a-->
<!--                :href="item.link"-->
<!--                target="_blank"-->
<!--              >-->
<!--                <v-img-->
<!--                  :contain="true"-->
<!--                  :src="item.img"-->
<!--                  class="book-cover"-->
<!--                />-->
<!--              </a>-->

<!--              <v-card-title class="subheading font-weight-bold">-->
<!--                {{ item.title }}-->
<!--              </v-card-title>-->

<!--              <v-divider/>-->

<!--              <v-list dense>-->
<!--                <v-list-item-->
<!--                  v-for="(key, index) in filteredKeys"-->
<!--                  :key="index"-->
<!--                >-->
<!--                  <v-list-item-content>{{ key }}:</v-list-item-content>-->
<!--                  <v-list-item-content class="align-end">-->
<!--                    {{ item[key.toLowerCase()] }}-->
<!--                  </v-list-item-content>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </template>-->
<!--    </v-data-iterator>-->
<!--  </v-container>-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import axios from 'axios';
// import bookIcon from '@/assets/icons/book.png';
// import BookCard from '../components/BookCard.vue';
//
// @Component({
//   components: {
//     bookCard: BookCard,
//   },
// })
// export default class Books extends Vue {
//   // Data
//   search = '';
//
//   options = {
//     itemsPerPage: 4,
//   };
//
//   books: BookData[] = [];
//
//   loading = true;
//
//   //
//   filter = {};
//
//   sortDesc = false;
//
//   itemsPerPage = 4;
//
//   keys = ['Author', 'Year', 'Rating'];
//
//   get filteredKeys() {
//     return this.keys.filter((key) => key !== 'Name');
//   }
//
//   updateItemsPerPage(number: number) {
//     this.itemsPerPage = number;
//   }
//
//   async created() {
//     await this.getBooks();
//   }
//
//   async getBooks() {
//     try {
//       const books = JSON.parse(localStorage.getItem('books') || '');
//
//       // Goodreads API doesn't give the right headers.
//       // They can't fix it for 3 years. Brilliant!
//       const xmlData = await axios.get(
//         'https://wt-2f9b37427d5e30fe8da0999bd311e211-0.run.webtask.io/proxy/books',
//       );
//
//       const booksInJson = xml2json.xml2json(xmlData.data, {
//         compact: true,
//         spaces: 4,
//         ignoreDeclaration: true,
//         ignoreInstruction: true,
//       });
//
//       const actualBooksCount = Number(
//         JSON.parse(booksInJson).GoodreadsResponse.reviews._attributes.total,
//       );
//
//       if (books && books.length === actualBooksCount) {
//         this.books = books;
//       } else {
//         const data = JSON.parse(booksInJson).GoodreadsResponse.reviews.review;
//
//         data.forEach((i) => {
//           const img = i.book.image_url._text;
//           const link = i.book.link._text;
//           const title = i.book.title._text;
//           const author = i.book.authors.author.name._text;
//           const year = i.book.published._text;
//           const dateRead = format(
//             new Date().setTime(Date.parse(i.date_added._text)),
//             'MMMM Do yyyy',
//           );
//           const rating = Number(i.rating._text);
//
//           const bookData: BookData = {
//             img,
//             link,
//             title,
//             author,
//             year,
//             dateRead,
//             rating,
//           };
//
//           const book = new Book(bookData);
//
//           this.books.push(book);
//         });
//
//         localStorage.setItem('books', JSON.stringify(this.books));
//       }
//     } catch (e) {
//       console.log(`Error: ${e}`);
//     } finally {
//       this.loading = false;
//     }
//   }
// }

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
      res.data.forEach((book) => {
        this.books.push(new Book(book));
      });
    } else {
      // this.books = JSON.parse(books);
      JSON.parse(books).forEach((book) => {
        this.books.push(new Book(book));
      });
    }
  },
});
</script>

<style scoped>
.books-container {
  margin: auto;
}

.loader {
  width: 100% !important;
}

.search,
.books-list,
.table {
  background-color: var(--body-bg-color);
}

.card__title {
  width: 100%;
  width: fill-available;
}

.tooltip {
  width: inherit;
}

.book-title {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
  white-space: pre-wrap;
}

.v-card .book-cover {
  margin: auto;
  max-height: 213px;
  max-width: 150px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* TODO: Remove? */
.star {
  color: #ffc600;
  width: 30px;
}
</style>
