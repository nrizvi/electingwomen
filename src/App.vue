<head>
  <link href="https://fonts.googleapis.com/css?family=Mukta" rel="stylesheet">
</head>
<template>
  <div id="app">
    <Navigation class="header"></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
  export default {
    name: 'App',
    components: {
      'Navigation': Navigation
    }
  }
</script>

<style>
  #app {
    font-family: 'Mukta', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    background-color: #00303f;
  }
</style>
