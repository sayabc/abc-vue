
console.log('进入core/instance/index.js,定义Vue的地方')

// Vue 本质上就是一个用 Function 实现的 Class，然后它的原型 prototype 以及它本身都扩展了一系列的方法和属性
function Vue (options) {
  this._init(options)
}

export default Vue

