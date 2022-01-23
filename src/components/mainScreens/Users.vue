<template>
  <div class="mainBlock cornerRadius p-2">
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
          <td class="text-center">{{ item.id }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <!-- <td>{{ item.createTime }}</td> -->
          <!-- <td>{{ item.lastEntry }}</td> -->
          <!-- <td>{{ item.birthday }}</td> -->
          <td class="text-center">{{ item.role }}</td>
          <td style="padding-left: 50px">
            <v-checkbox v-model="item.confirmed" @click="setConfirmUser(item.id, item.confirmed)"></v-checkbox>
          </td>
          <td class="col-1 justify-content-center">
            <v-btn class="red" @click="deleteUser(item.id)"
              ><v-icon>delete</v-icon></v-btn
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
    };
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      const obj = {
          token: this.$store.getters.user.userRole,
      }
      this.$store.dispatch("GetAllUsers", obj)
      .then(() => {
        this.array = this.$store.getters.allUsers;
      });
    },
    setConfirmUser(id, status) {
        const obj = {
            token: this.$store.getters.user.userRole,
            id: id,
            status: status
        }
        this.$store.dispatch("SetConfirmUser", obj)
    },
    deleteUser(id) {
        const obj = {
            token: this.$store.getters.user.userRole, 
            id: id
        }
        this.$store.dispatch("RemoveUser", obj)
        this.$router.go()

    },
  },
};
</script>

<style scoped>
.mainBlock {
  padding: 10px 50px;
  overflow-y: scroll;
  height: 700px;
  background: white;
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
.col {
  margin: 0;
  padding: 0;
}
.row {
  margin: 0;
  padding: 0;
}
</style>