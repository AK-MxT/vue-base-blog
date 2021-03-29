<template>
  <v-banner
    sticky
    class="side-banner"
  >
    <v-card
      flat
      class="mt-7"
    >
      <v-container fluid>
        <v-row class="my-4">
          <ul>
            <li
              v-for="item in items"
              :key="item.id"
              class="toc-list"
            >
              <nuxt-link
                class="toc-link__title"
                tag="div"
                :to="`#${item.id}`"
                @click.native="$vuetify.goTo(`#${item.id}`, options)"
              >
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
        </v-row>
      </v-container>
    </v-card>
  </v-banner>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      duration: 10,
      easing: 'easeInOutCubic',
      items: [],
      offset: 0
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  },
  created () {
    this.items = this.toc
  },
  methods: {
    encodeId (val) {
      const test = encodeURI(val)
      console.log(test)
      return test
    }
  }
}
</script>

<style lang="scss">
.active {
  color: #d66853;
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
.toc-list {
  font-size: 0.9rem;
  border-bottom: none;
  list-style: none;
  margin-bottom: 16px;
}
.toc-link {
  &__title {
    color: inherit;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
