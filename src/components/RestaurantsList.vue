<template>
  <!-- Places List, voted places and previous voted places -->
  <div>
    <div class="row">
      <div class="col-6">
        <button class="btn btn-primary mb-3" @click="showPrevResults" v-if="showPriviousBtn">
          Show Previous Voting Results
        </button>
      </div>
      <div class="previous-voted" v-if="showPreviousResult">
        <h3 class="text-center">Previous Voting Results</h3>
        <div class="col-6 mb-3">
          <ul class="list-group" v-for="place in votedPlaces" :key="place.id">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              v-if="place.voted != 0"
            >
              {{ place.name }}
              <span
                class="badge badge-primary badge-pill"
                v-if="place.voted != 0"
                >{{ place.voted }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <h3 class="text-center" v-if="viewReset">Voted Places</h3>
      <div class="col-6 mb-3">
        <ul class="list-group" v-for="place in allPlaces" :key="place.id">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-if="place.voted != 0"
          >
            {{ place.name }}
            <span
              class="badge badge-primary badge-pill"
              v-if="place.voted != 0"
              >{{ place.voted }}</span
            >
          </li>
        </ul>
        <button
          class="btn btn-primary mt-3"
          v-if="viewReset"
          @click="resetVoting"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="row">
      <h3 class="text-center">Places</h3>
      <div class="col-md-6" v-for="place in allPlaces" :key="place.id">
        <div class="card mb-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ place.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ place.address }}</h6>
            <p class="card-text">{{ place.description }}</p>
            <div class="d-block mb-2">
              <a :href="place.link" class="card-link">Menu</a>
              <a @click="deletePlace(place.id)" class="card-link delete"
                >Delete</a
              >
            </div>
            <div class="d-block">
              <button
                v-if="!place.userVoted"
                @click="voteForPlace(place)"
                class="btn btn-primary"
              >
                Vote
              </button>
              <button
                v-if="place.userVoted"
                @click="removeVote(place.id)"
                class="btn btn-danger"
              >
                Remove Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isVoted: false,
      viewReset: false,
      showPriviousBtn: false,
      showPreviousResult: false
    };
  },
  methods: {
    deletePlace: function (id) {
      this.$store.commit("removePlace", id);
    },
    voteForPlace: function (place) {
      this.$store.commit("voteForPlace", place);
      this.viewReset = true;
      this.showPriviousBtn = false
      this.showPreviousResult = false
    },
    removeVote: function (id) {
      this.$store.commit("removeVote", id);
      let places = [];
      this.allPlaces.forEach((element) => {
        if (element.voted != 0) {
          places.push(element);
        }
      });
      if (places.length == 0) {
        this.viewReset = false;
      }
    },
    resetVoting: function () {
      this.$store.commit("resetVoting");
      this.viewReset = false;
      this.showPriviousBtn = true;
    },
    showPrevResults: function () {
      if(this.votedPlaces.length != 0){
        this.showPreviousResult = true
      }
    }
  },
  computed: mapGetters(["allPlaces", "votedPlaces"]),
  created() {
    this.allPlaces.forEach((element) => {
      if (element.voted != 0) {
        this.viewReset = true;
      }
    });
  },
};
</script>

<style scoped>
.delete {
  color: #dc3545;
  cursor: pointer;
}
.badge {
  color: black;
}
</style>