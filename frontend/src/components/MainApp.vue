<template>
    <div>
      <button class="btn btn-primary languageBtn button" @click="languageBtnClick()">
        {{this.$t('system.languageBtn')}}</button>
      <router-view></router-view>
    </div>
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
          {title:'Создать книгу', icon: 'mdi-plus-circle', url: '/newbook'},
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
    },
    languageBtnClick() {
      if(this.$i18n.locale == "en") {
        this.$i18n.locale = "ru"
      } else {
        this.$i18n.locale = "en"
      }
    }
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
  .languageBtn {
    position: absolute;
    top: 40px;
    right: 62px;
    z-index: 10;
  }
</style>