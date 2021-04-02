<template>
  <v-banner
    sticky
    class="side-banner"
  >
    <v-card
      flat
      class="mt-9"
    >
      <v-card-title>
        Pick Up
      </v-card-title>
      <v-list>
        <v-list-item
          v-for="(item, i) in articles"
          :key="i"
          :to="'/blog/'+ item.slug"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-banner>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
