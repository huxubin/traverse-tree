<template>
  <div id="app">
    <traverse-tree :node-id="1000"></traverse-tree>
  </div>
</template>

<script>
import TraverseTree from './components/TraverseTree.vue'
export default {
  name: 'app',
  components: {
    TraverseTree
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
