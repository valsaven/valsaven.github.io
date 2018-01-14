<template>
  <v-card dark>
    <v-card-title>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="books"
        v-bind:search="search"
      >
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
        <td class="text-xs-right">{{ props.item.comment }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import booksList from './lists/booksList';

export default {
  name: 'books',
  data() {
    return {
      search: '',
      pagination: {},
      headers: [
        { text: 'Title', value: 'title', align: 'center' },
        { text: 'Author', value: 'author', align: 'center' },
        { text: 'Year', value: 'year', align: 'center' },
        { text: 'Date read', value: 'dateRead', align: 'center' },
        { text: 'Rating', value: 'rating', align: 'center' },
        { text: 'Comment', value: 'comment', align: 'center' },
      ],
      books: booksList,
    };
  },
};
</script>

<style scoped>
.table {
  background-color: var(--body-bg-color);
}

.rating {
  display: flex;
  justify-content: center;
}

.star {
  width: 30px;
  color: #ffc600;
}
</style>
