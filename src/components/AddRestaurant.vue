<template>
  <!----Add new place form----->
  <div class="add-restaurant">
    <h3 class="text-center">Add New Place</h3>
    <div class="add">
      <form @submit="onSubmit">
        <div class="mb-3">
          <input
            required="true"
            v-model="newPlace.name"
            type="text"
            class="form-control"
            placeholder="place name"
          />
        </div>
        <div class="mb-3">
          <input
            required="true"
            v-model="newPlace.address"
            type="text"
            class="form-control"
            placeholder="place address"
          />
        </div>
        <div class="mb-3">
          <input
            required="true"
            v-model="newPlace.link"
            type="text"
            class="form-control"
            placeholder="place Link"
          />
        </div>
        <div class="mb-3">
          <textarea
            required="true"
            v-model="newPlace.description"
            class="form-control"
            rows="3"
            placeholder="description"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="submit" class="btn btn-primary mb-3" />
        </div>
      </form>
      <div class="alert alert-success" role="alert" v-if="showSuccessMsg">
        {{newPlace.name}} has been added successfully
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRestaurant",
  data() {
    return {
      newPlace: {
        id: "",
        name: "",
        address: "",
        link: "",
        description: "",
        voted: 0
      },
      showSuccessMsg: false
    };
  },
  props: {},
  methods: {
    onSubmit(e) {
      this.newPlace.id = this.$store.state.places.length + 1;
      let place = { ...this.newPlace };
      this.$store.commit("newPlace", place);
      this.showSuccessMsg = true
      setTimeout(() => {
        this.newPlace.name = "",
        this.newPlace.address = "",
        this.newPlace.link = "",
        this.newPlace.description = "",
        this.showSuccessMsg = false
        this.$router.push('/');
      }, 3000);
      e.preventDefault();
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
