<template>
    <div class="p-5">
      <button class="btn btn-primary languageBtn button" @click="languageBtnClick()">
        {{this.$t('system.languageBtn')}}</button>
      <div class="row justify-content-between">
        <div class="col-2" v-if="this.$store.getters.user">
          <div class="row justify-content-center mb-5">
            <menu-block/>
          </div>
          <div class="row justify-content-center">
            <birthday-block/>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="col-6">
          <router-view></router-view>
        </div>
        <v-spacer></v-spacer>
        <div class="col-2" v-if="this.$store.getters.user">
          <!-- EmptyBlock -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    languageBtnClick() {
      if(this.$i18n.locale == "en") {
        this.$i18n.locale = "ru"
      } else {
        this.$i18n.locale = "en"
      }
      this.$session.set('localize', this.$i18n.locale)
      this.$router.go()
    },
  },
}
</script>

<style scoped>
  .container {
    margin: 0;
    padding: 0;
  }
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