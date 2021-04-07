<template>
  <v-banner
    sticky
    class="side-banner"
  >
    <v-card
      flat
      class="pa-2"
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
          v-for="item in tagList"
          :key="item"
          color="primary"
          class="mx-2 my-1"
          link
          small
          @click="searchQuery = item"
        >
          # {{ item }}
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
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tagList () {
      const arr = []
      this.tags.forEach((p) => {
        p.tags.forEach((v) => {
          arr.push(v)
        })
      })
      return Array.from(new Set(arr))
    }
  }
}
</script>

<style lang="scss">
.v-banner {
  top: 80px !important;
}
.v-application--is-ltr .v-banner__wrapper {
    padding: 0px 0px 0px 0px;
}
.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper {
  border-bottom: none;
}
</style>
