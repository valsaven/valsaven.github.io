<!--<template>-->
<!--  &lt;!&ndash; <v-card dark>-->
<!--    <v-card-title class="search">-->
<!--      <v-text-field v-model="search" append-icon="search"
 label="Search" single-line hide-details />-->
<!--    </v-card-title>-->
<!--    <v-container class="books-list" fluid grid-list-md>-->
<!--      <v-progress-linear v-if="loading" id="books-loader" :indeterminate="true" />-->
<!--      <v-data-iterator-->
<!--        :items="books"-->
<!--        :search="search"-->
<!--        :options.sync="options"-->
<!--        no-data-text="Loading..."-->
<!--      >-->
<!--        <template v-slot:default="props">-->
<!--          <book-card :book="props.item" />-->
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
<!--      class="loader"-->
<!--      :size="200"-->
<!--      color="amber"-->
<!--      indeterminate-->
<!--    />-->
<!--    <v-data-iterator-->
<!--      v-else-->
<!--      dark-->
<!--      :items="books"-->
<!--      :items-per-page.sync="itemsPerPage"-->
<!--      :search="search"-->
<!--      no-data-text="Loading..."-->
<!--    >-->
<!--      <template v-slot:header>-->
<!--        <v-toolbar-->
<!--          dark-->
<!--          class="mb-1"-->
<!--        >-->
<!--          <v-text-field-->
<!--            v-model="search"-->
<!--            clearable-->
<!--            flat-->
<!--            solo-inverted-->
<!--            hide-details-->
<!--            prepend-inner-icon="mdi-magnify"-->
<!--            label="Search"-->
<!--          />-->
<!--        </v-toolbar>-->
<!--      </template>-->

<!--      <template v-slot:default="props">-->
<!--        <v-row>-->
<!--          <v-col-->
<!--            v-for="item in props.items"-->
<!--            :key="item.name"-->
<!--            cols="12"-->
<!--            sm="6"-->
<!--            md="4"-->
<!--            lg="3"-->
<!--          >-->
<!--            <v-card>-->
<!--              <a-->
<!--                :href="item.link"-->
<!--                target="_blank"-->
<!--              >-->
<!--                <v-img-->
<!--                  :src="item.img"-->
<!--                  :contain="true"-->
<!--                  class="book-cover"-->
<!--                />-->
<!--              </a>-->

<!--              <v-card-title class="subheading font-weight-bold">-->
<!--                {{ item.title }}-->
<!--              </v-card-title>-->

<!--              <v-divider />-->

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
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Vue } from 'vue-property-decorator';-->
<!--import Component from 'vue-class-component';-->

<!--import axios from 'axios';-->
<!--import { format } from 'date-fns';-->
<!--import xml2json from 'xml-js';-->

<!--import bookIcon from '@/assets/icons/book.png';-->
<!--import BookCard from '../components/BookCard.vue';-->

<!--interface BookData {-->
<!--  img: string;-->
<!--  link: string;-->
<!--  title: string;-->
<!--  author: string;-->
<!--  year: string;-->
<!--  dateRead: string;-->
<!--  rating: number;-->
<!--}-->

<!--class Book {-->
<!--  img: string;-->

<!--  link: string;-->

<!--  title: string;-->

<!--  author: string;-->

<!--  year: string;-->

<!--  dateRead: string;-->

<!--  rating: number;-->

<!--  constructor(book: BookData) {-->
<!--    this.img = book.img.includes('nophoto') ? bookIcon : book.img;-->
<!--    this.link = book.link;-->
<!--    this.title = book.title;-->
<!--    this.author = book.author;-->
<!--    this.year = book.year;-->
<!--    this.dateRead = book.dateRead;-->
<!--    this.rating = book.rating;-->
<!--  }-->
<!--}-->

<!--@Component({-->
<!--  components: {-->
<!--    bookCard: BookCard,-->
<!--  },-->
<!--})-->
<!--export default class Books extends Vue {-->
<!--  // Data-->
<!--  search = '';-->

<!--  options = {-->
<!--    itemsPerPage: 4,-->
<!--  };-->

<!--  books: BookData[] = [];-->

<!--  loading = true;-->

<!--  //-->
<!--  filter = {};-->

<!--  sortDesc = false;-->

<!--  itemsPerPage = 4;-->

<!--  keys = ['Author', 'Year', 'Rating'];-->

<!--  get filteredKeys() {-->
<!--    return this.keys.filter((key) => key !== 'Name');-->
<!--  }-->

<!--  updateItemsPerPage(number: number) {-->
<!--    this.itemsPerPage = number;-->
<!--  }-->

<!--  async created() {-->
<!--    await this.getBooks();-->
<!--  }-->

<!--  async getBooks() {-->
<!--    try {-->
<!--      const books = JSON.parse(localStorage.getItem('books') || '');-->

<!--      // Goodreads API doesn't give the right headers.
 They can't fix it for 3 years. Brilliant!-->
<!--      const xmlData = await axios.get(-->
<!--        'https://wt-2f9b37427d5e30fe8da0999bd311e211-0.run.webtask.io/proxy/books',-->
<!--      );-->

<!--      const booksInJson = xml2json.xml2json(xmlData.data, {-->
<!--        compact: true,-->
<!--        spaces: 4,-->
<!--        ignoreDeclaration: true,-->
<!--        ignoreInstruction: true,-->
<!--      });-->

<!--      const actualBooksCount = Number(-->
<!--        JSON.parse(booksInJson).GoodreadsResponse.reviews._attributes.total,-->
<!--      );-->

<!--      if (books && books.length === actualBooksCount) {-->
<!--        this.books = books;-->
<!--      } else {-->
<!--        const data = JSON.parse(booksInJson).GoodreadsResponse.reviews.review;-->

<!--        data.forEach((i) => {-->
<!--          const img = i.book.image_url._text;-->
<!--          const link = i.book.link._text;-->
<!--          const title = i.book.title._text;-->
<!--          const author = i.book.authors.author.name._text;-->
<!--          const year = i.book.published._text;-->
<!--          const dateRead = format(-->
<!--            new Date().setTime(Date.parse(i.date_added._text)),-->
<!--            'MMMM Do yyyy',-->
<!--          );-->
<!--          const rating = Number(i.rating._text);-->

<!--          const bookData: BookData = {-->
<!--            img,-->
<!--            link,-->
<!--            title,-->
<!--            author,-->
<!--            year,-->
<!--            dateRead,-->
<!--            rating,-->
<!--          };-->

<!--          const book = new Book(bookData);-->

<!--          this.books.push(book);-->
<!--        });-->

<!--        localStorage.setItem('books', JSON.stringify(this.books));-->
<!--      }-->
<!--    } catch (e) {-->
<!--      console.log(`Error: ${e}`);-->
<!--    } finally {-->
<!--      this.loading = false;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.books-container {-->
<!--  margin: auto;-->
<!--}-->

<!--.loader {-->
<!--  width: 100% !important;-->
<!--}-->

<!--.search,-->
<!--.books-list,-->
<!--.table {-->
<!--  background-color: var(&#45;&#45;body-bg-color);-->
<!--}-->

<!--.card__title {-->
<!--  width: 100%;-->
<!--  width: fill-available;-->
<!--}-->

<!--.tooltip {-->
<!--  width: inherit;-->
<!--}-->

<!--.book-title {-->
<!--  overflow: hidden;-->
<!--  text-align: center;-->
<!--  text-overflow: ellipsis;-->
<!--  white-space: nowrap;-->
<!--}-->

<!--.v-card .book-cover {-->
<!--  margin: auto;-->
<!--  max-height: 213px;-->
<!--  max-width: 150px;-->
<!--}-->

<!--.rating {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--/* TODO: Remove? */-->
<!--.star {-->
<!--  color: #ffc600;-->
<!--  width: 30px;-->
<!--}-->
<!--</style>-->
