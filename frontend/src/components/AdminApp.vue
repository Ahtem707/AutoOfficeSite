<template>
  <v-app>
      <router-view></router-view>
    <template v-if="error">
      <v-snackbar
      :timeout="5000"
      :multi-line="true"
      color="error"
      @input="closeError"
      value="true">
        {{error}}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  computed: {
    error () {
      return this.$store.getters.adminError
    },
    logged() {return this.$store.getters.adminIsUserLoggedIn}
  },
  methods: {
    closeError () {
      this.$store.dispatch('adminClearError')
    }
  },
  created(){
    if(!this.logged){
      this.$router.push('/administrator/signIn')
    } else {
      this.$router.push('/administrator/books')
    }
  }
};
</script>