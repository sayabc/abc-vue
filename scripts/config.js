
const path = require('path')
const version = process.env.VERSION || require('../package.json').version
const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')
const flow = require('rollup-plugin-flow-no-whitespace')
// const weexVersion = process.env.WEEX_VERSION || require('../packages/weex-vue-framework/package.json').version




const banner =
  '/*!\n' +
  ' * Vue.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' Evan You\n' +
  ' * Released under the MIT License.\n' +
  ' */'

const aliases = require('./alias')
const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}

// 遵循 Rollup 的构建规则
const builds = {
  // Runtime+compiler production build (Browser)
  'web-full-prod': {
    entry: resolve('web/entry-runtime-with-compiler.js'), // 表示构建的入口JS 文件地址
    dest: resolve('dist/vue.min.js'), // 表示构建后的 JS 文件地址
    format: 'umd', // 构建的格式，cjs 表示构建出来的文件遵循 CommonJS 规范，es 表示构建出来的文件遵循 ES Module 规范。 umd 表示构建出来的文件遵循 UMD 规范
    env: 'production',
    alias: {
      he: './entity-decoder'
    },
    banner
  }
}

function genConfig (name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      // replace({
      //   __WEEX__: !!opts.weex,
      //   __WEEX_VERSION__: weexVersion,
      //   __VERSION__: version
      // }),
      flow(),
      buble(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'Vue-deyesea'
    }
  }

  if (opts.env) { // ？
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  Object.defineProperty(config, '_name', { // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
    enumerable: false,
    value: name
  })
  // console.log('config', config)
  return config
}

exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
