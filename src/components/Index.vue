<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="list-con">
      <div class='item' v-for='(item, index) in lists' :key='index'
        @click="handleUrl(item)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      msg: 'There are some demos projects',
      lists: [{
        title: 'vue-echarts',
        toUrl: '/vue-echarts',
      }],
    };
  },
  methods: {
    handleUrl(item) {
      // console.log('item', item);
      // console.log('current ', location.href);
      location.href = item.toUrl;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 22px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.list-con {
  width: 80%;
  margin: 0 auto;
}
a {
  color: #42b983;
  text-decoration: none;
}
.item {
  font-size: 28px;
  text-align: left;
  border-bottom: 1px dashed #000;
  margin-bottom: 20px;
  color: #000;
  cursor: pointer;
}
.item:hover {
  border-bottom: 1px dashed #42b983;
  font-size: 32px;
  color: #42b983;
}
</style>
