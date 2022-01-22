<template>
    <div class="col justify-content-center">
        <h4 style="text-align: center">{{title}}</h4>
        <p>{{description}}</p>
        <v-img
        :lazy-src="imageSrc"
        :src="imageSrc"
        />
        <p class="dateText">{{this.dateConverter(date)}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        imageSrc: String,
        date: String
    },
}
</script>

<style scoped>
.dateText {
    text-align: right;
    color: gray;
}
</style>