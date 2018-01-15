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
    <v-data-iterator
        content-tag="v-layout"
        row wrap
        :items="books"
        :search="search"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
      >

       <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title>
            <h4>{{ props.item.title }}</h4>
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

            <v-list-tile>
              <v-list-tile-content>Comment:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.comment }}</v-list-tile-content>
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
        <td class="text-xs-right">{{ props.item.comment }}</td>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
import booksList from './lists/booksList';

export default {
  name: 'books',
  data() {
    return {
      search: '',
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4,
      },
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
  align-items: center;
}

.star {
  width: 30px;
  color: #ffc600;
}
</style>
