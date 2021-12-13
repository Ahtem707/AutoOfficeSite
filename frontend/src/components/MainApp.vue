<template>
  <v-app>
    <v-main>
    
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      
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