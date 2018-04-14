<template>
  <v-card dark>
    <v-card-title class="search">
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-container class="books-list" fluid grid-list-md>
      <v-progress-linear :indeterminate="true" id="books-loader"></v-progress-linear>
      <v-data-iterator
          content-tag="v-layout"
          row wrap
          no-data-text="Loading..."
          :items="books"
          :search="search"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
        >

        <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
          <v-card>
             <a :href="props.item.link" target="_blank">
               <v-card-media :src="props.item.img" height="213px" class="book-cover"></v-card-media>
             </a>
            <v-card-title>
              <v-tooltip bottom>
                <h4 slot="activator" class="book-title">{{ props.item.title }}</h4>
                <span >{{ props.item.title }}</span>
              </v-tooltip>

            </v-card-title>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Author:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.author }}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Year:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.year }}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Date read:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.dateRead }}</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Rating:</v-list-tile-content>
                <v-list-tile-content class="align-end">
                  <div class="rating">
                    <i class="material-icons star">star_rate</i>{{ props.item.rating }}
                  </div>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.author }}</td>
          <td class="text-xs-center">{{ props.item.year }}</td>
          <td class="text-xs-center">{{ props.item.dateRead }}</td>
          <td class="text-xs-center">
            <v-container class="rating">
              <i class="material-icons star">star_rate</i>
              {{ props.item.rating }}
            </v-container>
          </td>
        </template>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import xml2json from 'xml-js';

import bookIcon from '../assets/icons/book.png';

class Book {
  constructor(img, link, title, author, year, dateRead, rating) {
    this.img = img.includes('nophoto') ? bookIcon : img;
    this.link = link;
    this.title = title;
    this.author = author;
    this.year = year;
    this.dateRead = dateRead;
    this.rating = rating;
  }
}

export default {
  name: 'books',
  data() {
    return {
      search: '',
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4,
      },
      books: [],
    };
  },
  created() {
    async function getBooks() {
      try {
        const books = JSON.parse(localStorage.getItem('books'));

        const xmlData = await axios.get(
          // Goodreads API doesn't give the right headers. They can't fix it for 3 years. Brilliant!
          'https://wt-2f9b37427d5e30fe8da0999bd311e211-0.run.webtask.io/proxy/gr/review/list/22911991?key=aZfzScxYHwb0s5nrnhpXg&v=2&shelf=read&per_page=200&page=1',
        );

        const booksInJson = xml2json.xml2json(xmlData.data, {
          compact: true,
          spaces: 4,
          ignoreDeclaration: true,
          ignoreInstruction: true,
        });

        const actualBooksCount = Number(
          JSON.parse(booksInJson).GoodreadsResponse.reviews._attributes.total,
        );

        if (books && books.length === actualBooksCount) {
          this.books = books;
        } else {
          const data = JSON.parse(booksInJson).GoodreadsResponse.reviews.review;

          data.forEach(i => {
            const img = i.book.image_url._text;
            const link = i.book.link._text;
            const title = i.book.title._text;
            const author = i.book.authors.author.name._text;
            const year = i.book.published._text;
            const dateRead = moment(new Date().setTime(Date.parse(i.date_added._text))).format(
              'MMMM Do YYYY',
            );
            const rating = Number(i.rating._text);

            const book = new Book(img, link, title, author, year, dateRead, rating);

            this.books.push(book);
          });

          localStorage.setItem('books', JSON.stringify(this.books));
        }
      } catch (e) {
        console.log(`Error: ${e}`);
      } finally {
        document.getElementById('books-loader').style.display = 'none';
      }
    }

    getBooks.call(this);
  },
};
</script>

<style scoped>
.search,
.books-list,
.table {
  background-color: var(--body-bg-color);
}

.book-title {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 180px;
}

.card .book-cover {
  margin: auto;
  max-width: 150px;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
}

.star {
  width: 30px;
  color: #ffc600;
}
</style>
