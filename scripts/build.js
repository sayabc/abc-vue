const fs = require('fs')
const path = require('path')


// if (!fs.existsSync('dist')) {
//   fs.mkdirSync('dist')
// }

// 先从配置文件读取配置，再通过命令行参数对构建配置做过滤，这样就可以构建出不同用途的 Vue.js
let builds  = require('./config').getAllBuilds()






