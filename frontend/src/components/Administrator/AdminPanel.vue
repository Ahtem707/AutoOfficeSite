<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="link of links" :key="link.title" :href="link.url" style="text-decoration: none">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="blue">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h4 class="mb-0">Admin<br>panel</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link of links" :key="link.title" :to="link.url" text style="text-decoration: none">
          {{ link.title }}
        </v-btn>
        <v-btn color="error" @click="exit()">
          Выход
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          title: "Пользователи",
          url: "/administrator/users",
        },
        {
          title: "Книги",
          url: "/administrator/books",
        },
        {
          title: "Цикл работ",
          url: "/administrator/cycleworks",
        },
        {
          title: "Жанр",
          url: "/administrator/genre",
        },
        {
          title: "Достижения",
          url: "/administrator/achievement",
        },
        {
          title: "Награды",
          url: "/administrator/award",
        },
        {
          title: "Статус чтения",
          url: "/administrator/statusreading",
        },
        {
          title: "Статус написания",
          url: "/administrator/statuswriting",
        }
      ],
    };
  },
  methods: {
    exit(){
      this.$store.commit('adminExit')
      this.$router.push('/administrator/books')
    }
  }
};
</script>