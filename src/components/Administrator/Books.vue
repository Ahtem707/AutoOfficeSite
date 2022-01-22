<template>
<v-app class="container">
    <h1>Книги</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Стоимость</th>
          <th>Возрастное ограничение</th>
          <th>Дата публикации</th>
          <th>Последнее обновление</th>
          <th>Количество символов</th>
          <th>Статус написания</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.age_limit }}</td>
          <td>{{ item.first_published }}</td>
          <td>{{ item.last_update }}</td>
          <td>{{ item.number_of_characters }}</td>
          <td>{{ item.statuswriting }}</td>
          <td>
            <v-btn @click="deleteElement(item.idBooks)" class="red"><v-icon>delete</v-icon></v-btn>
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
      array: []
    };
  },
  created() {
    this.showBooks();
  },
  methods: {
    async showBooks() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "showBooks",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteBook",
          arguments: {
            id: id
          },
        });
        this.getBooks()
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>