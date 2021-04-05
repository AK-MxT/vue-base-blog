<template>
  <v-row>
    <v-col cols="auto" class="mx-auto">
      <v-card
        class="pa-3"
        flat
      >
        <v-row>
          <v-col cols="auto" class="mx-auto mb-4">
            <v-avatar
              color="info"
              size="128"
            >
              <v-img :src="require('~/assets/profile.jpeg')" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-divider />
        <v-card-title class="pb-1">
          自己紹介
        </v-card-title>
        <v-card-text>
          ご覧いただきありがとうございます。<br>
          都内でフリーランスエンジニアをやってます。<br>
          会社員時代はJavaでバックエンドをメインに開発していましたが、<br>
          休日にやっていた副業ではVue.jsを書いており、現在はフロントエンド主体でやってます。<br>
        </v-card-text>
        <v-card-title class="pb-1">
          趣味
        </v-card-title>
        <v-card-text>
          YouTube見る<br>
          ジム行く<br>
          節税とかお金の勉強
        </v-card-text>
        <v-card-title class="pb-1">
          その他
        </v-card-title>
        <v-card-text>
          <nuxt-link
            to="/blog/introduction"
          >
            こちら
          </nuxt-link>
          <span>にもう少し詳しく書いてます</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
