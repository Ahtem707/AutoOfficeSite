<template>
  <v-app>
    <v-main>
      <v-container fill-height="fill-height">
        <v-layout justify-center="justify-center">
          <v-flex class="login-form text-xs-center">
            <h1 class="text-center">
              <div class="display-1 mb-3">
                <v-icon class="mr-2" large="large">work</v-icon> MyWorkspace
              </div>
            </h1>
            <v-card light="light">
              <v-toolbar dark color="primary">
                <v-toolbar-title> Crate a new account </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    name="name"
                    v-model="name"
                    light="light"
                    prepend-icon="person"
                    label="Name"
                    :rules="nameRules"
                  ></v-text-field>
                  <v-text-field
                    name="email"
                    v-model="email"
                    light="light"
                    prepend-icon="email"
                    label="Email"
                    type="email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    name="password"
                    v-model="password"
                    light="light"
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                    counter
                    maxlength=32
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field
                    name="confirmPassoword"
                    v-model="confirmPassword"
                    light="light"
                    prepend-icon="lock"
                    label="Confirm password"
                    type="password"
                    counter
                    maxlength=32
                    :rules="confirmPasswordRules"
                  ></v-text-field>
                  <v-btn
                    block="block"
                    type="submit"
                    @click="registration()"
                    :disabled="!valid"
                    :class="{ primary: valid }"
                    >Sign up</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length >= 6) ||
          "Name must be more or equel than 6 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) ||
          "Password must be more or equel than 6 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) => v === this.password || "Password should match",
      ],
    };
  },
  methods: {
    async registration() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post(this.serverPath, {
            method: "createUser",
            arguments: {
              name: this.name,
              email: this.email,
              password: this.password
            },
          });
          this.$router.push("/");
        } catch (err) {
          this.name = "";
          this.email = "";
          this.password = "";
          console.log(err);
        }
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