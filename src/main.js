import Vue from 'vue'
import Firsthalf from './Firsthalf.vue'
import Secondhalf from './Secondhalf.vue'
import Myimage from './components/Myimage.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Firsthalf),
}).$mount('#firsthalf')

new Vue({
  render: h => h(Secondhalf)
}).$mount('#secondhalf')
 
new Vue({
  render: h => h(Myimage),
}).$mount('#myimage')


 