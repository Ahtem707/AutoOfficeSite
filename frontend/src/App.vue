<template>
    <div class="mainBackend">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        if(!this.$store.getters.user && this.$router.currentRoute.path != '/login') {
            this.$router.push('/login')
        }
    }
}
</script>