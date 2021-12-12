<template>
<v-app class="container">
    <h1>Цикл произведений</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Название цикла</th>
          <th>Количество книг</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.count }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <v-text-field
              name="Cycle works"
              v-model="title"
              light="light"
              label="Название цикла"
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
      title: ''
    };
  },
  created() {
    this.getCycleWorks();
  },
  methods: {
    async getCycleWorks() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getCycleWorks",
        });
        console.log(response.data)
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteCycleWorks",
          arguments: {
            id: id
          },
        });
        this.getCycleWorks()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createCycleWorks",
          arguments: {
            title: this.title
          },
        });
        this.title = ''
        this.getCycleWorks()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>