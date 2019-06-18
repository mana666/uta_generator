

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'secondhalf',
  components: {
    HelloWorld
  }
}

/* var test = new Vue({
    el: "#secondhalf",
    data:{
        shimonoku: "test"
    }
}) */
</script>

<style>
#secondhalf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size: 25px;

}

.textstyle {
 margin:5px 80px;
}

textarea {
  resize: none;
  width:150px;
  height:100px;
  font-size: 15px;
  margin:0 20px;
}
</style>

