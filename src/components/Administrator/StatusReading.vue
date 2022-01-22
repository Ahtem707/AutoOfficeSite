<template>
<v-app class="container">
    <h1>Статусы чтения</h1>
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
    this.getStatusReading();
  },
  methods: {
    async getStatusReading() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getStatusReading",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteStatusReading",
          arguments: {
            id: id
          },
        });
        this.getStatusReading()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createStatusReading",
          arguments: {
            status: this.status
          },
        });
        this.status = ''
        this.getStatusReading()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>