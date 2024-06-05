<template>
  <div class='repos'>
    <ReposItem
      v-for='repos in getReposSort'
      :key='repos.id'
      :repos='repos'
    />
  </div>
</template>

<script>
import ReposItem from '@/components/ReposItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    ReposItem
  },
  computed: {
    ...mapGetters(['getReposSort'])
  },
}
</script>

<style lang='scss'>
.repos {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
