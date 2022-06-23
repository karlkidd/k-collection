<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
// import * as Collection from '../lib/k-collection.common';

// console.log(Collection,'===Collection')
import kCollection from '../packages/index';
console.log(kCollection,'===kCollection')
// import * as Collection from '../packages/index';
// import kCollection from '../packages/index';
// console.log(Collection,'===Collection')
// console.log(kCollection,'===kCollection')


// const obj = require('../lib/k-collection.common')
// const { kCollection,kRegExp } = require('../lib/k-collection.common')
// console.log(obj,'=====obj')
// console.log(kCollection,kRegExp,'===kCollection')
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
