<template>
  <v-row justify="center">
    <v-col
      cols="12"
      xl="6"
      lg="6"
      md="6"
      sm="12"
      class="py-3"
    >
      <v-card flat>
        <v-card-title class="main-title mb-2">
          フリーランスのサバイバル生活
        </v-card-title>
        <v-card-subtitle class="sub-title">
          フリーエンジニアが生き抜くための技術まわりとお金まわり
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      xl="8"
      lg="8"
      md="8"
      sm="12"
      class="py-3"
    >
      <v-card flat>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="searchQuery"
                solo
                rounded
                clearable
                placeholder="タグ検索"
                prepend-inner-icon="mdi-magnify"
                color="info"
                class="ma-4 mx-auto"
                style="max-width: 500px;"
              />
              <v-row justify="center">
                <v-col
                  v-for="n in articles"
                  :key="n.slug"
                  cols="12"
                  align-self="center"
                  class=""
                >
                  <h2 class="post-head">
                    <nuxt-link
                      class="post-head__title"
                      tag="div"
                      :to="'/blog/'+ n.slug"
                    >
                      {{ n.title }}
                    </nuxt-link>
                  </h2>
                  <p
                    class="mb-0"
                    style="color: #616161"
                  >
                    {{ viewDate(n.date) }}
                  </p>
                  <v-chip
                    v-for="tag in n.tags"
                    :key="tag"
                    color="primary"
                    class="mr-2"
                    link
                    x-small
                    @click="searchQuery = tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-col>
                <v-col
                  cols="12"
                  align-self="center"
                  class="mx-auto"
                >
                  <div class="text-center">
                    <v-pagination
                      v-model="page"
                      :length="length"
                      color="secondary"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const query = await $content('articles').where({ isShow: true }).sortBy('date', 'desc').limit(5)
    const articles = await query.fetch()
    return { articles }
  },

  data () {
    return {
      limit: 5,
      length: 0,
      page: 1,
      searchQuery: ''
    }
  },

  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.articles = await this.$content('articles').where({ isShow: true })
          .sortBy('date', 'desc').limit(this.limit)
          .fetch()
        this.page = 1
        return
      }
      this.articles = await this.$content('articles')
        .where({ isShow: true, tags: { $containsAny: searchQuery } })
        .fetch()
    },
    async page (val) {
      const skip = --val * this.limit
      this.articles = await this.$content('articles').where({ isShow: true }).sortBy('date', 'desc').limit(this.limit).skip(skip).fetch()
    }
  },

  async created () {
    const all = await this.$content('articles').where({ isShow: true }).fetch()
    this.length = Math.ceil(all.length / this.limit)
  },

  methods: {
    viewDate (srcDate) {
      const dt = new Date(srcDate)
      return dt.toLocaleDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 1.8rem;
  font-weight: bold;
  justify-content: center;
}

.sub-title {
  font-size: 0.9rem;
  text-align: center;
}

.post-head {
  font-size: 1.5rem;
  margin-bottom: 4px;
  &__title {
    color: inherit;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
