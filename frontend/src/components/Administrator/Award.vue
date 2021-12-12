<template>
<v-app class="container">
    <h1>Награды</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Награда</th>
          <th>Описание</th>
          <th>Стоимость</th>
          <th>Команды</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.award }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.cost }}</td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"><v-icon>delete</v-icon></v-btn>
          </td>
        </tr>
        <tr>
          <td>
            <v-text-field
              name="Award"
              v-model="award"
              light="light"
              label="Награда"
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
              name="Cost"
              v-model="cost"
              light="light"
              label="Стоимость"
              type="number"
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
      award: '',
      description: '',
      cost: 0
    };
  },
  created() {
    this.getAwards();
  },
  methods: {
    async getAwards() {
      try {
        const response = await axios.post(this.serverPath + "administrator", {
          method: "getAwards",
        });
        this.array = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteElement(id) {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "deleteAwards",
          arguments: {
            id: id
          },
        });
        this.getAwards()
      } catch (err) {
        console.log(err);
      }
    },
    async createElement() {
      try {
        await axios.post(this.serverPath + "administrator", {
          method: "createAwards",
          arguments: {
            award: this.award,
            description: this.description,
            cost: this.cost
          },
        });
        this.award = '',
        this.description = '',
        this.cost = ''
        this.getAwards()
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>