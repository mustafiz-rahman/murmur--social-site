<template>
  <div class="mv">
    <b-card title="">
     <h4>{{name}}</h4> 
      <b-card-text>
        {{ murmur }}
      </b-card-text>
      <b-button variant="outline-primary">Like</b-button>
      <span>0 liked</span>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend  ({
  name: "MurmurView",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    murmur: {
      type: String,
      required: true,
    }
  }
});
</script>

<style scoped>
  .mv{
    margin-top: 2px;
  }
</style>

