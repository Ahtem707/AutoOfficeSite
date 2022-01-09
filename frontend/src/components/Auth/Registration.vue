<template>
  <v-app style="background: transparent">
    <div class="container h-100 w-100">
      <div class="row justify-content-center h-100">
        <div class="col align-self-center">
          <div class="container">
            <div class="row justify-content-center">
                <v-form v-model="options.valid" ref="form" class="loginForm cornerRadius">
                  <p class="formTitle">{{this.$t("registration.title")}}</p>
                  <v-text-field
                    name="name"
                    v-model="user.name"
                    light="light"
                    prepend-icon="person"
                    :label="$t('textField.name')"
                    :rules="rules.nameRules"
                    :error-messages="error.name ? this.$t('textField.nameErrorUnique') : ''"
                  ></v-text-field>
                  <v-text-field
                    name="phone"
                    v-model="user.phone"
                    light="light"
                    prepend-icon="phone"
                    :label="$t('textField.phone')"
                    :rules="rules.phoneRules"
                  ></v-text-field>
                  <v-text-field
                    name="email"
                    v-model="user.email"
                    light="light"
                    prepend-icon="email"
                    :label="$t('textField.email')"
                    type="email"
                    :rules="rules.emailRules"
                    :error-messages="error.email ? this.$t('textField.emailErrorUnique') : ''"
                  ></v-text-field>
                  <v-select
                    :items="this.$store.getters.userRoles"
                    item-text="userRoles"
                    item-value="idUserRoles"
                    prepend-icon="person"
                    v-model="user.role"
                    :label="$t('textField.role')"
                    :rules="rules.roleRules"
                  ></v-select>
                  <date-text-field 
                  :label="$t('textField.birthday')"
                  :rules="rules.birthdayRules"
                  @updateDate="user.birthday = $event"/>
                  <v-text-field
                    name="password"
                    v-model="user.password"
                    light="light"
                    prepend-icon="lock"
                    :label="$t('textField.password')"
                    type="password"
                    counter
                    maxlength=32
                    :rules="rules.passwordRules"
                  ></v-text-field>
                  <v-text-field
                    name="confirmPassoword"
                    v-model="user.confirmPassword"
                    light="light"
                    prepend-icon="lock"
                    :label="$t('textField.confirmPassword')"
                    type="password"
                    counter
                    maxlength=32
                    :rules="rules.confirmPasswordRules"
                  ></v-text-field>
                  <v-spacer style="height: 40px"></v-spacer>
                  <v-btn
                    class="button"
                    block="block"
                    @click="submit()"
                    :disabled="!options.valid"
                    :class="{ primary: options.valid }"
                    >{{ $t('registration.nextBtn') }}</v-btn>
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
        name: "tester",
        phone: "80123456789",
        email: "Oleg@mail.ru",
        role: "",
        birthday: "",
        password: "123456",
        confirmPassword: "123456",
      },
      error: {
        name: false,
        email: false
      },
      rules: {
        nameRules: [
          (v) => !!v || this.$t('rules.name.required'),
          (v) => (v && v.length >= 6) || this.$t('rules.name.isValid'),
        ],
        phoneRules: [
            (v) => !!v || this.$t('rules.phone.required'),
            (v) => /^(8|\+7)[0-9]{10}$/.test(v) || this.$t('rules.phone.isValid'),
        ],
        emailRules: [
            (v) => !!v || this.$t('rules.email.required'),
            (v) => /.+@.+\..+/.test(v) || this.$t('rules.email.isValid'),
        ],
        roleRules: [
            (v) => !!v || this.$t('rules.role.required')
        ],
        birthdayRules: [
            (v) => !!v || this.$t('rules.birthday.required')
        ],
        passwordRules: [
            (v) => !!v || this.$t('rules.password.required'),
            (v) => (v && v.length >= 6) || this.$t('rules.password.isValid'),
        ],
        confirmPasswordRules: [
          (v) => !!v || this.$t('rules.confirmPassword.required'),
          (v) => v === this.user.password || this.$t('rules.confirmPassword.isValid'),
        ]
      },
    };
  },
  created() {
    this.$store.dispatch('getUserRoles')
  },
  watch: {
    '$i18n.locale'() {
      this.$refs.form.validate()
    },
    'user.name'() {
      this.error.name = false
    },
    'user.email'() {
      this.error.email = false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        const user = {
          name: this.user.name,
          phone: this.user.phone,
          email: this.user.email,
          password: this.user.password,
          userRolesId: this.user.role,
          birthday: this.user.birthday
        };
        this.$store.dispatch('UserRegistration',user)
        .then(() => {
            this.$router.push('/login')
            alert("Благодарим за регистрацию, ожидайте активациии аккаунта")
        })
        .catch((err)=>{
          if(/^Duplicate entry '.*' for key 'userName_UNIQUE'$/.test(err.sqlMessage)) {
            this.error.name = true
          } else if(/^Duplicate entry '.*' for key 'email_UNIQUE'$/.test(err.sqlMessage)) {
            this.error.email = true
          }
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
  text-align: center;
}
.loginForm {
  width: 440px;
  max-height: 700px;
  background: white;
  padding: 58px;
}
</style>