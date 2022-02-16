<template>
  <div>
    <van-button type="primary" text="显示遮罩层" @click="show = true" />

    <van-overlay :show="show" @click="show = false" />
    <div @click="demo1(num)">2647888</div>
    <div>money1: {{money1(money)}}</div>
    <input v-model="num" type="number">
    <div>newNum: {{newNum}}</div>
    <div>
      <div>
        姓：<input type="text" v-model="firstName">
      </div>
      <div>
        名：<input type="text" v-model="lastName">
      </div>
      <div>
        姓名：<input type="text" v-model="name">
      </div>
    </div>
    <div>
      watchNum：<input type="text" v-model="watchNum">
    </div>
    <div>
      watchObj：<input type="text" v-model="watchObj.name">
    </div>
    <div>
      <button @click="btn">按钮</button>
    </div>
    <div v-for="(item, index) in list" :key=index @click="bindcolor(item)" :class="{'red': item.active}">{{item.name}}</div>
    <div>
      <div v-for="(item, index) in list" :key=index @click="bindcolor2(item)" :class="{'red': newList2.includes(item.name)}">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Overlay } from 'vant'
Vue.use(Overlay)
export default {
  name: 'demo',
  data () {
    return {
      show: false,
      num: 1,
      firstName: '',
      lastName: '',
      money: 333,
      watchNum: 5678,
      watchObj: {
        name: 'aaa'
      },
      list: [{
        name: 'name1',
        active: true
      }, {
        name: 'name2',
        active: false
      }, {
        name: 'name3',
        active: false
      }],
      list2: [{
        name: 'name1'
      }, {
        name: 'name2'
      }, {
        name: 'name3'
      }],
      newList2: ['name1']
    }
  },
  computed: {
    newNum () {
      return Number(this.num) + 2
    },
    // name () {
    //   return this.firstName + this.lastName
    // }
    name: {
      get () {
        return this.firstName + this.lastName
      },
      set (value) {
        this.firstName = value.substring(0, 1)
        this.lastName = value.substring(1)
      }
    }
  },
  created () {
    console.log(this.num, 'created')
    console.log(this.list.splice(0, 1, '5555555'), this.list,
      '666666666666666666')
  },
  mounted () {
    console.log(this.num, 'mounted')
  },
  watch: {
    watchNum () {
      alert(22)
    },
    'watchObj.name' () {
      alert(444)
    },
    'watchObj': {
      handler (newValue, oldValue) {
        console.log(newValue)
        console.log('555555')
      },
      deep: true
    }
  },
  methods: {
    money1 (value) {
      return Number(this.num) + 2
    },
    demo1 (value) {
      console.log('demo1', value, this.num)
    },
    btn () {
      this.watchObj.name = 'bbbbb'
    },
    bindcolor (item) {
      console.log(item.name)
      this.list.forEach((i) => {
        if (item.name === i.name) {
          i.active = true
        } else {
          i.active = false
        }
      })
      item.active = !item.active
    },
    bindcolor2 (item) {
      if (this.newList2.includes(item.name)) {
        this.newList2.splice(this.newList2.indexOf(item.name), 1)
      } else {
        this.newList2.push(item.name)
      }
      console.log(item.name)
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
