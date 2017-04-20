<template>
  <div class="spider" @click="show == true?false:true">
    <div class="search">
      <span>
        <input type="text" class="se-input" placeholder="输入关键字"  v-model="word">
      </span>
      <div class="select">
        <input type="text" readonly="true" v-model="selected" @click="show = !show">
        <icon name="caret-down"></icon>
        <ul class="select-list" :class="{selected: show}" @click="show = !show" style="transition: all .3s ease-in-out;">
          <li class="disabled"><span>选择星数</span></li>
          <li v-for="star in stars" :value="star.value" :class="{selectedli: selected == star.value}" @click="selected = star.value"><span>{{star.value}} <icon name="star"></icon> </span></li>
        </ul>
      </div>
      <i>
        <icon name="search"></icon>
      </i>
    </div>
  </div>
</template>
<style scoped rel="stylesheet/scss" lang="scss">
  @import "../scss/spider.scss";
</style>
<script>
  export default{
    data () {
      return {
        ischeck: false,
        selected: '100',
        word: '',
        show: false,
        stars: [
          {value: '100'},
          {value: '200'},
          {value: '500'},
          {value: '1000'},
          {value: '5000'},
          {value: '10000'}
        ]
      }
    }
  }
</script>
