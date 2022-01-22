<template>
    <div class="mainBlock justify-content-center">
        <content-block
            class="contentBlock cornerRadius"
            v-for="item in news"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :imageSrc="item.imageSrc"
            :date="item.date"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
        }
    },
    created() {
        this.$store.dispatch('getEvents')
        .then(() => {
            this.news = this.$store.getters.events
            this.news.map( (item) => {
                item.imageSrc = this.$store.getters.imageServe + item.imageSrc
                return item
            })
        })
    }
}
</script>

<style scoped>
.mainBlock {
  padding: 0 50px;
  overflow-y:scroll;
  height: 80%;
}
.contentBlock {
    background: white;
    margin-bottom: 30px;
    padding: 30px;
}
</style>