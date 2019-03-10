<template>
  <div class="navbar">
    <nav>
      <span class="header">
        <h3 class="heading">Electing Women</h3>
        <h2 class="subheading">TESTIMONY</h2>
      </span>
      <router-link class="spacing navlinks" v-for="routes in links"
                   v-bind:key="routes.id"
                   :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
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
          text: 'Candidate Services',
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
    padding-top: 20px;
  }
  .subheading {
    color: #dcae1d;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 15px;
  }

  .navlinks {
    color: #cae4db;
    text-decoration: none;
    padding-top: 10px;
    text-align: center;
  }
  .navbar {
    padding-bottom: 25px;
  }
  .header{
    text-align: center;
  }
  a:hover {
    color: #7a9d96;
    text-decoration: none;
  }
</style>
