<template>
    <div class="row align-items-center justify-content-center mb-1" style="background: #82C2FD;">
        <div class="col col-2 m-0 p-0 ml-5">
            <v-img
                class="img"
                :lazy-src="userContent.avatarSrc || defaultIcon"
                :src="userContent.avatarSrc || defaultIcon"
            ></v-img>
        </div>
        <div class="col ml-auto p-1">
            <h4 class="mb-1" style="text-align: center">{{userContent.userName}}</h4>
            <p class="m-0 p-0" style="text-align: center">{{userContent.subText}}
                <span v-if="!!userContent.additionText" :style="'color: '+additionTextColor">{{userContent.additionText}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import defaultIcon from '@/images/defaultIcon.png'
export default {
    props: {
        userContent: Object,
        additionTextColor: String
    },
    data() {
        return {
            defaultIcon
        }
    },
}
</script>

<style scoped>
.img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.container, .row {
    margin: 0;
    padding: 0;
}
</style>