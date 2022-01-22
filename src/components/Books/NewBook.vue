<template>
  <v-app>
    <v-container>
      <v-row>
        <h1 class="text--secondary mt-10">Create new book</h1>
      </v-row>
      <v-row wrap>
        <v-col cols="4">
          <v-card height="350" width="250">
            <v-btn
              v-if="!imageSrc"
              height="100%"
              width="100%"
              class="justify-center"
            >
              <v-icon @click="addImage" x-large>mdi-plus-circle</v-icon>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="onFileImageChange"
              />
            </v-btn>
            <div style="width:100%" v-else>
              <img style="height: inherit; width: inherit" :src="imageSrc" />
              <v-btn width="100%" @click="imageSrc = ''" color="error">Delete</v-btn>
            </div>
            <div style="width:100%" v-if="!imageSrc">
              <v-btn
                width="100%"
                color="yellow"
                v-show="!addAsUrl"
                @click="addAsUrl = true"
                >Add as URL</v-btn
              >
              <v-text-field
                v-show="addAsUrl"
                v-model="tempImage"
              ></v-text-field>
              <v-btn
                width="100%"
                color="success"
                v-show="addAsUrl"
                @click="
                  imageSrc = tempImage;
                  tempImage = '';
                  addAsUrl = false;
                "
                >Ok</v-btn
              >
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-layout row>
            <v-flex>
              <v-form v-model="valid" ref="form" validation class="mb-3">
                <v-text-field
                  name="Title"
                  label="Title"
                  light="light"
                  v-model="title"
                  required
                  :rules="[(v) => !!v || 'Title is required']"
                >
                </v-text-field>
                <v-textarea
                  name="annotation"
                  label="Annotation"
                  v-model="annotation"
                  light="light"
                  multi-line
                  :rules="[(v) => !!v || 'Description is required']"
                  class="mb-5"
                ></v-textarea>
              </v-form>
              <v-row justify="center">
                <v-btn :disabled="!valid" class="success" @click="createBook"
                  >Create book</v-btn
                >
              </v-row>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      annotation: "",
      valid: false,
      addAsUrl: false,
      tempImage: "",
      imageSrc: "",
    };
  },
  methods: {
    async createBook() {
      if (this.$refs.form.validate()) {
        try {
          await axios.post(this.serverPath, {
            method: "createBook",
            arguments: {
              title: this.title,
              annotation: this.annotation,
              imageSrc: this.imageSrc,
              idAuthor: this.$store.getters.user.id,
            },
          });
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      }
    },
    addImage() {
      this.$refs.fileInput.click();
    },
    onFileImageChange(event) {
      console.log("onFileImageChange");
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // this.imageSrc = reader.result       // получение изображения
      };
      reader.readAsDataURL(file);
      // this.image = file                    // получение изображение
    },
  },
};
</script>