<template>
    <div class="mainBlock cornerRadius">
        <h2 class="pb-3 pt-3" style="text-align: center">{{ $t('birthday.title') }}</h2>
        <div class="container">
            <user-block v-for="item in items" :key="item.idUsers" :userContent="item" additionTextColor="red"></user-block>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    watch: {
        '$i18n.locale'() {
            this.items = this.items.map( (item) => {
                if(item.additionText) {
                    item.additionText = this.$t('birthday.today')
                }
                return item
            })
        }
    },
    created() {
        this.$store.dispatch('getUserBirthday')
        .then( () => {
            const today = new Date()
            const ty = today.getFullYear()
            const tm = today.getMonth() + 1
            const td = today.getDate()
            this.items = this.$store.getters.birthdays.map( (item) => {
                item.subText = this.dateConverter(item.birthday)
                const date = item.birthday.substring(0, 10).split('-')
                if(ty==date[0] && tm==date[1] && td==date[2]) {
                    item.additionText = this.$t('birthday.today')
                }
                return item
            })
        })
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
</style>