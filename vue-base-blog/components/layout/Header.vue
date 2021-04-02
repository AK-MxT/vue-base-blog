<template>
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
</template>

<script>
export default {
  data () {
    return {
      src: require('~/assets/logo_transparent.png'),
      topBarContents: [
        {
          title: 'About',
          to: '/about'
        }
      ]
    }
  }
}
</script>
