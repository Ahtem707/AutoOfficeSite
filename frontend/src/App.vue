<template>
    <v-app style="background: transparent">
        <div class="mainBackend">
            <router-view v-if="!splash"></router-view>
            <div v-if="splash" class="container h-100 w-100">
                <div class="row justify-content-center h-100">
                    <div class="col align-self-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <p class="logo">Auto<span>Office</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            splash: true
        }
    },
    created() {
        var delay = 3 // in second
        setTimeout(() => {
            this.splash = false
            if(!this.$store.getters.user && this.$router.currentRoute.path != '/login') {
                this.$router.push('/login')
            }
        }, delay * 1000);
    }
}
</script>