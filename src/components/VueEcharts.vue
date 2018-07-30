<template>
  <div class='vue-echart' id='vue-echart'>
    <div class='content'>

    </div>
    <div class='echarts'>
      <div id='demo1' class='demo demo1'></div>
      <div id='demo2' class='demo demo2'></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'VueEcharts',
  data() {
    return {};
  },
  methods: {
    vueEchartInit() {
      // demo1
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('demo1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 示例1'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

      // demo2
      const c2 = echarts.init(document.getElementById('demo2'));
      let c2_data = [];

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        c2_data.push([r, i]);
      }
      c2.setOption({
        title: {
          text: '极坐标双数值轴',
        },
        legend: {
          data: ['line'],
        },
        polar: {
          center: ['50%', '54%'],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        angleAxis: {
          type: 'value',
          startAngle: 0,
        },
        radiusAxis: {
          min: 0,
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: c2_data,
          },
        ],
        animationDuration: 2000,
      });
    },
  },
  mounted() {
    this.vueEchartInit();
  },
};
</script>

<style scoped>
.vue-echart {
  border: 1px solid #eee;
  width: 100vw;
  height: 100vh;
  margin-top: -60px;
  overflow: hidden; /*消除BFC*/
}
.content {
  width: 20vw;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  float: left;
}
.echarts {
  width: 80vw;
  float: left;
  border: 1px solid greenyellow;
  box-sizing: border-box;
}

/* demos */
.demo {
  width: 300px;
  height: 300px;
  margin: 10px;
  border: 1px solid green;
  box-sizing: border-box;
  float: left;
}
</style>
