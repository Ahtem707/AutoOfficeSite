<template>
  <v-app class="container">
    <h1>{{ this.$t("userList.title") }}</h1>
    <table>
      <thead>
        <tr>
          <th>{{ this.$t("userList.table.id") }}</th>
          <th>{{ this.$t("userList.table.userName") }}</th>
          <th>{{ this.$t("userList.table.phone") }}</th>
          <th>{{ this.$t("userList.table.email") }}</th>
          <!-- <th>{{ this.$t("userList.table.createTime") }}</th> -->
          <!-- <th>{{ this.$t("userList.table.lastEntry") }}</th> -->
          <!-- <th>{{ this.$t("userList.table.birthday") }}</th> -->
          <th>{{ this.$t("userList.table.role") }}</th>
          <th>{{ this.$t("userList.table.confirmed") }}</th>
          <th>{{ this.$t("userList.table.delete") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <!-- <td>{{ item.createTime }}</td> -->
          <!-- <td>{{ item.lastEntry }}</td> -->
          <!-- <td>{{ item.birthday }}</td> -->
          <td>{{ item.role }}</td>
          <td>
            <v-checkbox v-model="item.confirmed"></v-checkbox>
          </td>
          <td>
            <v-btn @click="deleteElement(item.id)" class="red"
              ><v-icon>delete</v-icon></v-btn
            >
          </td>
        </tr>
      </tbody>
    </table>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      array: [],
    };
  },
  created() {
    const obj = {
        token: this.$store.getters.user.userRole,
    }
    this.$store.dispatch("GetAllUsers", obj)
    .then(() => {
      this.array = this.$store.getters.allUsers;
    });
  },
  methods: {
    setConfirmUser(id, status) {
        const obj = {
            token: this.$store.user.userRole,
            id: id,
            status: status
        }
        this.$store.dispatch("SetConfirmUser", obj)
    },
    deleteUser(id) {
        const obj = {
            token: this.$store.user.userRole, 
            id: id
        }
        this.$store.dispatch("RemoveUser", obj)
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