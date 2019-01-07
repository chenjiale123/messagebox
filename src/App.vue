<template>
  <div id="app">
   <headers/>
    <sidebar/>
    <router-view/>
  </div>
</template>

<script>
import headers from './components/list/headers'
import sidebar from './components/list/sidebar'
export default {
  name: 'App',
  components:{
    headers,
    sidebar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none
}
</style>
