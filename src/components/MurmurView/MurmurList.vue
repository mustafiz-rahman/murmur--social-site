<template>
  <div>
    <murmur-view
      v-for="murmur in murmurs"
      :key="murmur.id"
      :id="murmur.id"
      :murmur="murmur.murmur"
    />
  </div>
</template>

<script>
import MurmurView from '~/components/MurmurView/MurmurView.vue'
export default {
  name: 'MurmurList',
  components: {
    MurmurView,
  },
  props: {
    murmurs: {
      type: Array,
      required: true,
    },
  },
}
</script>
