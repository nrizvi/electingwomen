<template>
    <footer class="shared-footer">
      <div class="container">
        <p class="float-right">
        </p>
        <p class="float-left">
        <img :src="images.logo" alt="logo" width="60%"> <br>
        Creating tools and spaces that enable women everywhere to support, bear witness, organize, empower, build transform</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
            images: {
                logo: require('@/assets/WP2P2_logo.png'),
            }
          }
        }
}
</script>
<style>
  .shared-footer {
    background-color: #00303f;
    color: white;
    text-align: left;
    position: absolute;
    width: 100%;
    flex-shrink: 0;
    margin-top:15%;
  }
.container {
  padding-top: 2%;
}
.float-left{
  width: 45%;
}
</style>
