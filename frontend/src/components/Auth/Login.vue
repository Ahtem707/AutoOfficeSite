<template>
  <v-app style="background: transparent">
    <div class="container h-100 w-100">
      <div class="row justify-content-center h-100">
        <div class="col align-self-center">
          <div class="container">
            <div class="row justify-content-center">
            </div>
            <div class="row justify-content-center">
              <v-form v-model="options.valid" ref="form" validation class="loginForm cornerRadius">
                <p class="formTitle">{{this.$t("login.signIn")}}</p>
                <v-text-field
                  name="email"
                  v-model="user.email"
                  light="light"
                  prepend-icon="email"
                  :label="$t('login.emailTextField')"
                  type="email"
                  :rules="emailRules"
                >
                </v-text-field>
                <v-text-field
                  name="password"
                  v-model="user.password"
                  light="light"
                  prepend-icon="lock"
                  :label="this.$t('login.passwordTextField')"
                  type="password"
                  counter
                  error-count="7"
                  :rules="passwordRules"
                >
                </v-text-field>
                <p>
                  {{this.$t('login.noAccount')}}
                  <span class="textLinks" @click="createOne()">
                    {{this.$t('login.createOne')}}
                  </span>
                </p>
                <br />
                <v-btn
                  class="button"
                  block="block"
                  @click="submit()"
                  :disabled="!options.valid"
                  :class="{ primary: options.valid }"
                >{{this.$t('login.nextBtn')}}</v-btn>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      options: {
        shouldStayLoggedIn: false,
        valid: false,
      },
      user: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || this.$t('login.emailRequired'),
        (v) => /.+@.+\..+/.test(v) || this.$t('login.emailIsValid')
      ],
      passwordRules: [
        (v) => !!v || this.$t('login.passwordRequired'),
        (v) => (v && v.length >= 6) || this.$t('login.passwordIsValid')
      ]
    };
  },
  watch: {
    '$i18n.locale'() {
      this.$refs.form.validate()
    }
  },
  methods: {
    createOne() {
      this.$router.push('/registration')
    },
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.user.email,
          password: this.user.password,
        };
        this.$store.dispatch('LoginUser',user)
        .then(() => {
            this.$router.push('/')
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
.title {
  margin-bottom: 70px;
}
.title > span {
  font-size: 72px;
}
.title > span:nth-child(1) {
  color: red
}
.title > span:nth-child(2) {
  color: blue
}

.login-form {
  max-width: 500px;
}
.formTitle {
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  color: black;
}
.loginForm {
  width: 440px;
  max-height: 400px;
  background: white;
  padding: 58px;
}
</style>