<template>
  <div>
    <div>
      {{list}}
      <div @click="add1">增加1</div>
      <input type="text" v-model="num">
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      list: 1,
      num: 2
    }
  },
  methods: {
    add1 () {
      this.list = Number(this.list) + Number(this.num)
    }
  },
  mounted () {
    console.log(this.$route.params.id, 2222222222222)
    console.log(this.$route.query.id, 2222222222222)
    this.add1()
  }
}
</script>

<style scoped>

</style>
