<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="link of links"
            :key="link.title"
            :href="link.url">
            <v-list-item-title>{{link.title}}</v-list-item-title>
            <v-icon left>{{link.icon}}</v-icon>
          </v-list-item>
          <v-list-item
          @click="exit()"
          v-if="this.user"
          style="text-decoration: none"
          text
        >Выход</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="blue">
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link v-slot="{ navigate }" custom to="/" class="pointer">
          <h2 @click="navigate" role="link" class="mb-0">LiberFic</h2>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          style="text-decoration: none"
          text>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          @click="exit()"
          v-if="this.user"
          style="text-decoration: none"
          color="error"
        >{{this.user.userName}}<br>Выход</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    links: function(){
      if(this.user){
        return [
          {title:'Домой', icon: 'home', url: '/'},
          {title:'Созать книгу', icon: 'mdi-plus-circle', url: '/newbook'},
          {title:'Мои книги', icon: 'mdi-briefcase-plus', url: '/myBooks'}
        ]
      }
      else {
        return [
          {title:'Домой', icon: 'home', url: '/'},
          {title:'Войти', icon: 'mdi-login', url: '/login'},
          {title:'Зарегистрироваться', icon: 'mdi-account', url: '/registration'},
        ]
      }
    },
  },
  methods: {
    exit(){
      this.$store.commit('exit')
    }
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>