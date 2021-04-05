<template>
  <v-row>
    <v-col
      cols="12"
      class="py-0"
    >
      <v-card class="mt-4" flat>
        <v-container fluid>
          <article>
            <h1>{{ article.title }}</h1>
            <nuxt-content class="mt-4" :document="article" />
          </article>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
const PRIVACY_POLICY = 'privacy-policy'

export default {
  async asyncData ({ $content }) {
    const query = await $content('articles', PRIVACY_POLICY)
    const article = await query.fetch()

    return { article }
  }
}
</script>
