<template>
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
</template>

<style lang="scss" scoped>
.v-btn--fab {
  bottom: 0;
  position: absolute;
  margin: 0 16px 16px 0;
}
</style>
