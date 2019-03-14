<template><div id="demo">
  <p v-on-clickaway="away" @click="click" :style="{ color: color }">{{ text }}</p>
</div></template>


<script>
  new Vue({
  el: '#demo',
  mixins: [VueClickaway.mixin],
  data: {
  text: 'Click somewhere.',
  color: 'black',
  },
  methods: {
  click: function() {
  this.text = 'You clicked on me!';
  this.color = 'green';
  },
  away: function() {
  this.text = 'You clicked away...';
  this.color = 'red';
  },
  },
  });
</script>

<style>
  .demo{
    margin-top:250px;
  }
</style>
