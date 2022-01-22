<template>
    <div class="mainBlock cornerRadius">
        <user-block class="userBlock" :userContent="user"></user-block>
        <div class="container p-2 justify-content-center">
            <v-btn class="btn w-100 mt-3" v-for="item in menu" :key="item.title" :style="getButtonStyle(item.path)" @click="navPush(item.path)">{{item.title}}</v-btn>
            <v-btn class="btn w-100 mt-3" @click="exit()">{{this.$t('system.menu.exit')}}</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        }
    },
    computed: {
        menu() {
            var mainMenuList = [
                {
                    title: this.$t('system.menu.news'),
                    path: '/news',
                },
                // {
                //     title: this.$t('system.menu.myDevices'),
                //     path: '/',
                // },
                // {
                //     title: this.$t('system.menu.requestEquipment'),
                //     path: '/',
                // },
                // {
                //     title: this.$t('system.menu.scheduleOfWorks'),
                //     path: '/',
                // },
                // {
                //     title: this.$t('system.menu.iWantAVacation'),
                //     path: '/',
                // },
                {
                    title: this.$t('system.menu.events'),
                    path: '/events',
                }
            ]
            if(this.$store.getters.user.userRole == "Администратор") {
                var users = {
                    title: this.$t('system.menu.users'),
                    path: '/users',
                }
                mainMenuList.push(users)
            }
            return mainMenuList
        }
    },
    methods: {
        navPush(path) {
            this.$router.push({
                path: path
            })
        },
        getButtonStyle(path) {
            if(this.$route.path == path) {
                return 'background-color: green !important'
            }
            return
        },
        exit() {
            this.$store.commit("exit")
            this.$router.push('/')
            this.$router.go()
        }
    },
    created() {
        this.user = this.$store.getters.user
        this.user.subText = this.user.userRole
    }
}
</script>

<style scoped>
.mainBlock {
  width: 350px;
  background: white;
  padding-bottom: 20px;
}
.container {
    margin: 0;
    padding: 0;
}
.userBlock {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.btn {
    text-transform: none;
    background: #1972F9 !important;
    color: white
}
.btn:hover {
    background-color: rgb(233, 75, 75) !important
}
</style>