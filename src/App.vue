<template>
  <div id="app">
    <Navigation class="header"></Navigation>
    <router-view></router-view />
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Footer': Footer
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins|Rubik');  #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    background-color: #cae4db;
  }
</style>
