<template>
<v-app class="container">
    <h1>Жанр</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Жанр</th>
          <th>Количество книг</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.genre }}</td>
          <td>{{ item.count }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <v-text-field
              name="Genre"
              v-model="genre"
              light="light"
              label="Жанр"
              type="text"
            ></v-text-field>
          </td>
          <td>
            <v-btn @click="createElement()" class="primary"><v-icon>mdi-plus-circle</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      array: [],
      genre: ''
    };
  },
  created() {
    this.getGenre();
  },
  methods: {
    async getGenre() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getGenre",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteGenre",
          arguments: {
            id: id
          },
        });
        this.getGenre()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createGenre",
          arguments: {
            genre: this.genre
          },
        });
        this.genre = ''
        this.getGenre()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>