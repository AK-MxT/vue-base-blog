<template>
  <v-footer
    :absolute="!fixed"
    app
    color="blue-grey darken-4"
  >
    <v-container
      class="text-center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-btn
          color="white"
          text
          plain
          to="/"
        >
          <v-icon
            size="24px"
            color="white"
          >
            mdi-home
          </v-icon>
        </v-btn>
      </v-col>
      <v-btn
        v-for="item in footerItems"
        :key="item.icon"
        class="mx-4"
        icon
        @click="exLink(item.url)"
      >
        <v-icon
          size="32px"
          color="white"
        >
          {{ item.icon }}
        </v-icon>
      </v-btn>
      <v-col
        class="text-center"
        cols="12"
      >
        <span style="color: white;"> &copy; {{ new Date().getFullYear() }}</span>
      </v-col>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      footerItems: [
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/A_MxT_'
        },
        {
          icon: 'mdi-github',
          url: 'https://github.com/AK-MxT'
        }
      ]
    }
  },
  methods: {
    exLink (url) {
      window.open(url)
    }
  }
}
</script>
