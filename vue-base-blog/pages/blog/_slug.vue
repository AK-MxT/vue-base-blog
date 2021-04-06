<template>
  <v-row>
    <v-col
      cols="12"
      xl="9"
      lg="9"
      md="9"
      sm="12"
      class="py-0"
    >
      <v-card class="mt-4" flat>
        <v-container fluid>
          <article>
            <h1>{{ article.title }}</h1>
            <v-row
              align="center"
              class="ma-1"
            >
              <p
                class="ma-0 mr-2"
                style="color: #616161"
              >
                {{ viewDate(article.updatedAt) }}
              </p>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                :data-text="article.title"
                :data-hashtags="article.tags"
                data-show-count="false"
              /><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
            </v-row>
            <v-chip
              v-for="tag in article.tags"
              :key="tag"
              color="primary"
              class="ma-1"
              small
            >
              # {{ tag }}
            </v-chip>
            <nuxt-content class="mt-4" :document="article" />
          </article>
        </v-container>
      </v-card>
    </v-col>
    <v-col
      v-if="article.toc.length > 0"
      cols="12"
      xl="3"
      lg="3"
      md="3"
      sm="12"
      class="px-0 pb-0"
    >
      <slug-toc :toc="article.toc" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch()
    return { article }
  },
  methods: {
    viewDate (srcDate) {
      const dt = new Date(srcDate)
      return dt.toLocaleString()
    }
  }
}
</script>

<style lang="scss">
.remark-code-title {
  background: #d9d7e0;
  border-radius: 0px 0px 4px 0px;
  color: #3a3a3a;
  font-size: 0.75rem;
  letter-spacing: 0.075em;
  line-height: 1;
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 0rem;
  text-align: right;
  z-index: 1;
}
</style>
