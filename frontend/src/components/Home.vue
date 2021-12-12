<template>
  <div>
    <v-container grid-list-lg class="mt-5">
      <v-layout row>
        <v-flex
          v-for="(item,i) of array"
          :key="i"
        >
          <v-card class="mx-auto" max-width="160px" height="100%">
            <v-img :src="item.imageSrc"></v-img>
            <v-card-title primaty-title>
              <div>
                <p class="booktitle">{{ item.title }}</p>
                <p class="bookauthor">{{ item.author }}</p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      array: []
    };
  },
  created() {
    this.getBook()
  },
  methods: {
    async getBook() {
      try {
          const response = await axios.post(this.serverPath, {
            method: "getBooks",
            arguments: {

            },
          });
          this.array = response.data;
        } catch (err) {
          console.log(err);
        }
    }
  }
};
</script>

<style scoped>
  .carousel-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0,0.5);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .booktitle, .bookauthor{
    font-size: 12px;
    line-height: 100%;
    word-wrap: break-word;
  }
  .bookauthor{
    color: gray;
  }
</style>