<template>
  <div class="content">
    <b-form @submit.prevent>
      <b-form-group class="formField">Username:<b-input type="text" v-model="userid" /> </b-form-group>
      <label for="textPassword">Password:</label>
      <b-input type="password" id="textPassword" class="formField" aria-describedby="passwordHelpBlock" />
      <b-form-text id="passwordHelpBlock">
        <br />
      </b-form-text>
      <b-button v-b-modal.login>Login</b-button>
      <b-modal id="login" title="Login">
        Login successful! You are now viewing content for authorized users only.
      </b-modal>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>
<style>
  .content{
    margin-top: 10%;
  }
  .formField{
    margin-top: 8px;
    max-width: 25%;
    margin: auto;
  }
</style>
