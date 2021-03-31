<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        class="mx-auto"
      >
        <v-row>
          <v-col
            cols="12"
            xl="9"
            lg="9"
            md="9"
            sm="12"
          >
            <v-card class="mt-7" flat>
              <v-container fluid>
                <article>
                  <h1>{{ article.title }}</h1>
                  <p style="color: #616161">
                    {{ viewDate(article.updatedAt) }}
                  </p>
                  <v-chip
                    v-for="tag in article.tags"
                    :key="tag"
                    color="info"
                    class="ma-1"
                    small
                  >
                    {{ tag }}
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
          >
            <toc :toc="article.toc" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
  border-radius: 0px 0px 4px 4px;
  color: #3a3a3a;
  font-size: 0.75rem;
  letter-spacing: 0.075em;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  position: absolute;
  left: 1rem;
  text-align: right;
  z-index: 1;
}
</style>
