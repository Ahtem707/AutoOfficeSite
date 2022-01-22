<template>
<v-app class="container">
    <h1>Статус написания</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Статус</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.status }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
        <tr>
          <td>
            <v-text-field
              name="Status"
              v-model="status"
              light="light"
              label="Статус"
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
      status: ''
    };
  },
  created() {
    this.getStatusWriting();
  },
  methods: {
    async getStatusWriting() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getStatusWriting",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteStatusWriting",
          arguments: {
            id: id
          },
        });
        this.getStatusWriting()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createStatusWriting",
          arguments: {
            status: this.status
          },
        });
        this.status = ''
        this.getStatusWriting()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>