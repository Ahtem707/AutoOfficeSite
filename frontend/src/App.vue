<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        async start() {
            try {
                await axios.post(this.serverPath, {
                    method: "createUser",
                    arguments: {
                        name: "Ahtem"
                    },
                })
            } catch (err) {
                console.log("Error");
            }
        }
    },
    created() {
        this.start()
    }
}
</script>