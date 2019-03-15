<template>
  <div class="content">
    <h1>Candidate Toolkit</h1>
    <p>Select your region to access candidate training resources near you:</p>
    <b-list-group class="list">
      <b-dropdown right text="North America" class="dropDown">
        <b-dropdown-item v-b-modal.moreInfo>United States</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Canada</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Mexico</b-dropdown-item>
      </b-dropdown><br />
      <b-dropdown right text="South America" class="dropDown">
        <b-dropdown-item v-b-modal.moreInfo>Brazil</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Venezuela</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Bolivia</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right text="Africa" class="dropDown">
        <b-dropdown-item v-b-modal.moreInfo>Ghana</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Nigeria</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>South Africa</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right text="Asia" class="dropDown">
        <b-dropdown-item v-b-modal.moreInfo>China</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>India</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Pakistan</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right text="Europe" class="dropDown">
        <b-dropdown-item v-b-modal.moreInfo>Spain</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>France</b-dropdown-item>
        <b-dropdown-item v-b-modal.moreInfo>Poland</b-dropdown-item>
      </b-dropdown>
    </b-list-group>
    <b-modal id="moreInfo" title="Resources">
      Information on training and resources near you coming soon!
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: 'CandidateServices'
  }
</script>
<style>
  .content{
    margin-top: 150px;
  }
  .list{
    width: 250px;
    margin: auto;
  }
  .dropDown{
    margin-bottom: 8px;
  }
</style>
