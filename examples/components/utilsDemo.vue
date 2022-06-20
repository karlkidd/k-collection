<template>
  <div>
    <p>times:{{ times }}</p>
    <button @click="testDebounce()">点击测试防抖</button>
    <p>值：'',null,undefined,[],{}</p>
    <br />
    <br />
    <button @click="setCookie()">设置cookie</button>
  </div>
</template>

<script>
import {kCollection} from "@packages/index";
import kCollections from "@packages/index";
console.log(kCollection,'======kC==')
console.log(kCollections,'=====kCollections===')
export default {
  name: "UtilsDemo",
  data() {
    return {
      times: 0,
      emptyArr:['',null,undefined,[],{}]
    };
  },
  methods: {
    toDo() {
      this.times++;
      console.log("times", this.times);
    },
    testDebounce: kCollections.kDebounce(function () {
      //todo 直接在此处写逻辑函数
      this.toDo(); //或者调用其他方法
    }, 1000),
    setCookie(){

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
