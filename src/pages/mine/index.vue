<template>
  <div class="mine_wrap">
    <grid
      :draggable="true"
      :sortable="true"
      :items="items"
      @sort="aa"
      :height="100"
      :width="100">
      <template slot="cell" slot-scope="props">
        <div>{{props.item}}</div>
      </template>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      list: [],
      items: []
    }
  },
  created () {
    this.items = [
      'a',
      'b',
      'c'
    ]
  },
  methods: {
    aa (a) {
      this.list = []
      a.items.forEach((item) => {
        this.list.push({'name': item.item})
      })
      console.log(this.list)
    }
  }
}
</script>

<style scoped lang="scss">
  .mine_wrap {
    background: #eee;
  }
</style>
