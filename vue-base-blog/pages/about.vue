<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto" class="mx-auto px-0">
        <v-card>
          <v-row>
            <v-col cols="auto" class="mx-auto my-2">
              <v-avatar
                color="info"
                size="128"
              >
                <v-img :src="require('~/assets/profile.jpeg')" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-divider />
          <v-card-title>
            自己紹介
          </v-card-title>
          <v-card-text>
            ご覧いただきありがとうございます。<br>
            都内でフリーランスエンジニアをやってます。<br>
            会社員時代はJavaでバックエンドをメインに開発していましたが、現在はフロントエンド主体でやってます。<br>
          </v-card-text>
          <v-card-title>
            趣味
          </v-card-title>
          <v-card-text>
            YouTube見る<br>
            ジム行く<br>
            節税とかお金の勉強を辛くない範囲でやる
          </v-card-text>
          <v-card-title>
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
  </v-container>
</template>
