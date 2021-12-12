<template>
<v-app class="container">
    <h1>Достижения</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Достижение</th>
          <th>Описание</th>
          <th>Условие получения</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.achievement }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.receipt_condition }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
        <tr>
          <td>
            <v-text-field
              name="Achievement"
              v-model="achievement"
              light="light"
              label="Достижение"
              type="text"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              name="Description"
              v-model="description"
              light="light"
              label="Описание"
              type="text"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              name="Receipt condition"
              v-model="receipt_condition"
              light="light"
              label="Условие получения"
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
      achievement: '',
      description: '',
      receipt_condition: ''
    };
  },
  created() {
    this.getAchievement();
  },
  methods: {
    async getAchievement() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getAchievement",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteAchievement",
          arguments: {
            id: id
          },
        });
        this.getAchievement()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createAchievement",
          arguments: {
            achievement: this.achievement,
            description: this.description,
            receipt_condition: this.receipt_condition
          },
        });
        this.achievement = '',
        this.description = '',
        this.receipt_condition = ''
        this.getAchievement()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>