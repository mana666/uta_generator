<template>
  <div id="firsthalf">
    <HelloWorld msg="百人一首画像を生成するよ"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'firsthalf',
  components: {
    HelloWorld
  }
}
</script>

<style>
#firsthalf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 40px;
}
</style>

