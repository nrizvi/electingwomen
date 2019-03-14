<template>
    <footer class="shared-footer">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        <p class="float-left">Creating tools and spaces that enable women everywhere to support, bear witness, organize, empower, build transform</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style>
.shared-footer {
    background-color: #00303f;
    color: white;
    text-align: left;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 15%;
  }
.container {
  padding-top: 2%;
}
.float-left{
  width: 45%;
}
</style>