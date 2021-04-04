<template>
  <v-banner
    sticky
    class="side-banner"
  >
    <v-card
      flat
      class="mt-9 pa-2"
    >
      <v-card-title class="py-1">
        Pick Up
      </v-card-title>
      <v-divider />
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
      <v-card-title class="py-1">
        Tags
      </v-card-title>
      <v-divider />
      <div class="mt-3">
        <v-chip
          v-for="tag in tags"
          :key="tag"
          color="primary"
          class="mx-2 my-1"
          link
          small
          @click="searchQuery = tag"
        >
          {{ tag }}
        </v-chip>
      </div>
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
  },
  data () {
    return {
      tagList: this.tags
    }
  },
  computed: {
    tags () {
      const arr = []
      this.articles.forEach((p) => {
        p.tags.forEach((v) => {
          arr.push(v)
        })
      })

      return Array.from(new Set(arr))
    }
  }
}
</script>
