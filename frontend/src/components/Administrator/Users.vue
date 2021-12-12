<template>
  <v-app class="container">
    <h1>Пользователи</h1>
    <table>
      <thead>
        <tr>
          <th>Имя пользователя</th>
          <th>Почта</th>
          <th>Дата создания аккаунта</th>
          <th>Последний вход</th>
          <th>Репутация</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.createTime }}</td>
          <td>{{ item.lastEntry }}</td>
          <td>{{ item.reputation }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      array: [],
    };
  },
  created() {
    this.showUsers();
  },
  methods: {
    async showUsers() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          session: true,
          method: "showUsers"
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUser(id) {
      console.log(id);
      try {
        await axios.post(this.serverPath + "administrator", {
          session: true,
          method: "deleteUser",
          arguments: {
            id: id,
          },
        });
        this.showUsers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.container {
  padding: 0 10px;
}
table,
th,
td {
  border: 2px solid black;
}
th,
td {
  padding: 0 5px;
}
th {
  text-align: center;
}
</style>