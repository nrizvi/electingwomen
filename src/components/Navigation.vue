<template>
  <b-navbar class="navbar" fixed="top">
    <nav>
      <router-link class="spacing navlinks" v-for="routes in links"
                   v-bind:key="routes.id"
                   :to="`${routes.page}`">{{routes.text}}</router-link>
     <span class="header">
        <h4 class="heading">Electing Women</h4>
        <h3 class="subheading">TESTIMONY</h3>
      </span>
    </nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'About',
          page:'/About'
        },
        {
          id: 1,
          text: 'Testimony',
          page:'/Testimony'
        },
        {
          id: 2,
          text: 'Candidate Toolkit',
          page:'/CandidateServices'
        },
        {
          id: 3,
          text: 'News',
          page:'/News'
        },
       {
         id: 4,
         text: 'Choose Language',
         page: '/ChooseLanguage'
       },
       {
         id: 5,
         text: 'Login',
         page: '/Login'
        },
        {
          id: 6,
          text: 'Home',
          page: '/'
        }
      ]
    }
  }
}
</script>

<style>
  .spacing {
    margin-right: 20px;
  }
  .header, .navbar {
    background-color: #00303f;
    display: block;
  }
  .heading {
    color: #7a9d96;
    display: block;
    text-align: left;
  }
  .subheading {
    color: #dcae1d;
    font-family: 'Rubik', sans-serif;
    text-align: left;
    margin-top: -8px;
  }

  .navlinks {
    color: #cae4db;
    text-decoration: none;
    padding-top: 15px;
    text-align: center;
    float: right;
    text-align: right;
  }

  .header{
    text-align: center;
  }
  a:hover {
    color: #7a9d96;
    text-decoration: none;
  }
</style>
