<template>
  <v-app
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <v-app-bar
      clipped-left
      flat
      fixed
      app
      color="blue-grey darken-4"
    >
      <v-btn
        icon
        class="mx-2"
        to="/"
      >
        <v-avatar>
          <v-img :src="src" />
        </v-avatar>
      </v-btn>
      <template v-for="content in topBarContents">
        <nuxt-link
          :key="content.title"
          :to="content.to"
          class="ma-4"
          style="text-decoration: none; color: white;"
        >
          <v-toolbar-title v-text="content.title" />
        </nuxt-link>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col
            cols="2"
            class="hidden-md-and-down pr-0"
          >
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
          </v-col>
          <v-col cols="10">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
      <v-col class="hidden-md-and-down">
        <v-fab-transition>
          <v-btn
            fab
            large
            absolute
            right
            class="v-btn--fab"
            @click="$vuetify.goTo(0)"
          >
            <v-icon>
              mdi-chevron-up
            </v-icon>
          </v-btn>
        </v-fab-transition>
      </v-col>
    </v-main>
    <layout-footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      articles: [],
      src: require('~/assets/logo_transparent.png'),
      topBarContents: [
        {
          title: 'About',
          to: '/about'
        }
      ]
    }
  },
  computed: {
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
  async created () {
    const query = await this.$content('articles').sortBy('createdAt', 'asc').limit(3)
    const articles = await query.fetch()
    this.articles = articles
  },
  methods: {
    exLink (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss">
.sidebar-header {
  font-weight: bold;
  font-size: 20px;
}
.v-banner {
  top: 80px !important;
}
.v-application--is-ltr .v-banner__wrapper {
    padding: 0px 0px 0px 0px;
}
.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper {
  border-bottom: none;
}
.v-btn--fab {
  bottom: 0;
  position: absolute;
  margin: 0 16px 52px 0;
}
</style>
