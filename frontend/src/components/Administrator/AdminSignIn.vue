<template>
      <v-container fill-height="fill-height">
        <v-layout justify-center="justify-center">
          <v-flex class="login-form mt-15" justify-content: center>
            <v-card light="light">
              <v-toolbar dark color="primary">
                <v-toolbar-title>
                  <v-icon class="mr-2" large="large">work</v-icon> Admin panel sing in
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                  <v-text-field
                    name="login"
                    v-model="login"
                    light="light"
                    prepend-icon="login"
                    label="Login"
                    type="login"
                  >
                  </v-text-field>
                  <v-text-field
                    name="password"
                    v-model="password"
                    light="light"
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                    counter
                    error-count="5"
                    :rules="passwordRules"
                  >
                  </v-text-field>
                  <br />
                  <v-btn
                    block="block"
                    @click="submit()"
                    :disabled="!valid || loading"
                    :loading="loading"
                    :class="{ primary: valid }"
                    >Sign in</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      login: "",
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 5) ||
          "Password must be more or equel than 6 characters",
      ],
    };
  },
  computed: {
    loading () {
      return this.$store.getters.adminLoading
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password,
        };
        this.$store.dispatch('adminLoginUser',user)
        .then(() =>{
            this.$router.push('/administrator/books')
        })
        .catch(()=>{
          this.login = '';
          this.password = '';
        })
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 500px;
}
</style>