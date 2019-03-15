<template>
  <div class="content">
    <h3 class="italic">Welcome to the Women's Peer-to-Peer Network Electing Women Toolkit!</h3>
    <h4>Are you a member?</h4>
    <b-button v-b-modal.login>Yes</b-button>
    <b-button class="no" v-b-modal.notAMember>No</b-button>
        <b-modal id="notAMember" title="">
          If you are a member of an affiliate organization, please sign-up. 
        </b-modal>
    <b-modal id="login" title="Login">
      <b-form>
        Username:<b-input type="text" v-model="userid" /> 
        <b-form-group @submit.prevent>
          <label for="textPassword">Password</label>
          <b-input type="password" id="textPassword" aria-describedby="passwordHelpBlock" />
        </b-form-group>
      </b-form>
      <div>
        <b-button v-b-toggle.collapse1 variant="primary">Login</b-button>
        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <p class="card-text">Are you running?</p>
            <b-button v-b-toggle.collapse1_inner>Yes</b-button>
            <b-button>No</b-button>
            <b-collapse id="collapse1_inner" class="mt-2">
              <b-card>You are now viewing the site content available to authorized users only.</b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>
    </b-modal>
  </div>

</template>

<script>
export default {
  name: 'Home' 
  }
  
</script>
<style>
  .content{
    margin-top: 20%;
  }
  .italic{
    font-style: italic;
  }
</style>
