<template>
  <div class="carddeck">
    <div>
      <b-card-group columns>
        <b-card title="Card title that wraps to a new line"
                img-src="https://placekitten.com/g/400/450"
                img-alt="Image"
                img-top v-b-modal.modal1>
          <!-- v-b-modal.modalName is how you create a modal. Whatever modalName you provide here will be the modal the user accesses when they click the card.-->
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card>
        <!-- Here is a sample code for our first modal. There are similar modals to this in the code below.-->
        <b-modal id="modal1" title="Title goes here.">
          <p class="my-4">We can add some information about the kitty here.</p>
        </b-modal>

        <!-- the video does not need a modal since it is already hosted on YouTube -->
        <b-embed class="video" type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/PPn6NyZZZn4"
                 allowfullscreen />


        <b-card header="Quote" v-b-modal.modal2>
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
        <b-modal id="modal2" title="Title goes here.">
          <p class="my-4">We can add some more information about the kitty here.</p>
        </b-modal>

        <b-card title="Title"
                img-src="https://placekitten.com/500/350"
                img-alt="Image"
                img-top v-b-modal.modal3>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>
        <b-modal id="modal3" title="Title goes here.">
          <p class="my-4">Another modal! Yay!</p>
        </b-modal>

        <!-- I am using modal3 for all the other cards since this is just a demo -->
        <b-card bg-variant="primary" text-variant="white" v-b-modal.modal3>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>
              <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </footer>
          </blockquote>
        </b-card>

        <b-card v-b-modal.modal3> 
          <b-card-title>Title</b-card-title>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay v-b-modal.modal3 />

        <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top v-b-modal.modal3>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
          </b-card-text>
          <div slot="footer"><small class="text-muted">Footer Text</small></div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Testimony',
}
</script>

<style>
  .topcards{
    padding-top: 25px;
  }
  .carddeck {
    width: 75%;
    display: block;
    margin: auto;
    background-color: #cae4db;
    padding: 25px;
    border-radius: 5px;
  }
  .video{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .btn-primary {
    background-color: #00303f;
    border-color: #00303f;
  }
</style>
