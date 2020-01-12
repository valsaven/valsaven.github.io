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
        <template v-slot:activator="{ on }">
          <h4
            class="book-title"
            v-on="on"
            v-text="book.title"
          />
        </template>
        <span v-text="book.title" />
      </v-tooltip>
    </v-card-text>

    <v-divider />

    <v-list dense>
      <v-list-item>
        <v-list-item-content v-text="'Author:'" />
        <v-list-item-content
          class="align-end"
          v-text="book.author"
        />
      </v-list-item>

      <v-list-item>
        <v-list-item-content v-text="'Year'" />
        <v-list-item-content
          class="align-end"
          v-text="book.year"
        />
      </v-list-item>

      <v-list-item>
        <v-list-item-content v-text="'Date read:'" />
        <v-list-item-content
          class="align-end"
          v-text="book.dateRead"
        />
      </v-list-item>

      <v-list-item>
        <v-list-item-content v-text="'Rating:'" />
        <v-list-item-content class="align-end">
          <div class="rating">
            <span v-text="book.rating" />
          </div>
        </v-list-item-content>
      </v-list-item>
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
};
</script>

<style scoped>
.book-title {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
