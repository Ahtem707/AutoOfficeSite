<!-- 
Доработать стили календаря date-text-field
https://vuetifyjs.com/en/components/date-pickers/#orientation
 -->

<template>
    <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
            v-model="date"
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            :rules="rules"
            ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            no-title
            scrollable
        >
            <v-spacer></v-spacer>
            <v-btn
            text
            color="primary"
            @click="menu = false"
            >
            Cancel
            </v-btn>
            <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
            >OK</v-btn>
        </v-date-picker>
    </v-menu>
</template>

<script>
export default {
    props: {
        label: String,
        rules: Array
    },
    data() {
        return {
            date: "",
            menu: false,
            modal: false,
            menu2: false,
        }
    },
    watch: {
        date() {
            this.$emit('updateDate',this.date)
        }
    }
}
</script>