<template>
  <v-app
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <layout-header />
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            cols="2"
            class="hidden-md-and-down pr-0 pb-0"
          >
            <body-left-side
              :articles="articles"
              :tags="tags"
            />
          </v-col>
          <v-col
            cols="12"
            xl="8"
            lg="8"
            md="8"
            sm="12"
          >
            <nuxt />
          </v-col>
          <v-col class="hidden-md-and-down" />
        </v-row>
      </v-container>
      <v-col class="hidden-md-and-down">
        <layout-back-to-top />
      </v-col>
    </v-main>
    <layout-footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      articles: [],
      tags: []
    }
  },
  computed: {
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
  async created () {
    // ピックアップする記事のリスト
    const query = await this.$content('articles').where({ isShow: true }).sortBy('date', 'desc').limit(3)
    const articles = await query.fetch()
    this.articles = articles
    // すべてのタグのリスト
    const tags = await this.$content('articles').where({ isShow: true }).only(['tags']).fetch()
    this.tags = tags
  }
}
</script>
