<template>
  <v-card>
    <a
      :href="book.link"
      target="_blank"
    >
      <v-img
        :src="book.img"
        :contain="true"
        class="book-cover"
      />
    </a>
    <v-card-text>
      <v-tooltip bottom>
        <h4
          slot="activator"
          class="book-title"
          v-text="book.title"
        />
        <span
          v-text="book.title"
        />
      </v-tooltip>
    </v-card-text>

    <v-divider/>

    <v-list dense>
      <v-list-tile>
        <v-list-tile-content
          v-text="'Author:'"
        />
        <v-list-tile-content
          class="align-end"
          v-text="book.author"
        />
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content
          v-text="'Year'"
        />
        <v-list-tile-content
          class="align-end"
          v-text="book.year"
        />
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content
          v-text="'Date read:'"
        />
        <v-list-tile-content
          class="align-end"
          v-text="book.dateRead"
        />
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content
          v-text="'Rating:'"
        />
        <v-list-tile-content class="align-end">
          <div class="rating">
            <i class="material-icons star">star_rate</i>{{ book.rating }}
          </div>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>


<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
