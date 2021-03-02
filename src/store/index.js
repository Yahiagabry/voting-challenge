import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    votedPlaces: [],
    places: [
      {
        id: 1,
        name: "Mac",
        address: "munich",
        link: "https://www.google.com/",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        voted: 3,
        userVoted: false
      },
      {
        id: 2,
        name: "hardees",
        address: "munich",
        link: "https://www.google.com/",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        voted: 4,
        userVoted: false
      },
      {
        id: 3,
        name: "pizza hut",
        address: "munich",
        link: "https://www.google.com/",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        voted: 0,
        userVoted: false
      }
    ],
  },
  getters: {
    allPlaces: (state) => state.places,
    votedPlaces: (state) => state.votedPlaces
  },
  mutations: {
    newPlace: (state, restaurant) => {
      state.places.push(restaurant)
    },
    removePlace: (state, id) => {
      state.places = state.places.filter(place => place.id != id)
    },
    voteForPlace: (state, place) => {
      state.places.forEach(element => {
        if(element.id == place.id) {
          element.voted = element.voted + 1
          element.userVoted = true
        }
      });
    },
    removeVote: (state, id) => {
      state.places.forEach(element => {
        if(element.id == id) {
          element.voted = element.voted - 1
          element.userVoted = false
        }
      });
    },
    resetVoting: (state) => {
      state.votedPlaces = []
      state.votedPlaces = JSON.parse(JSON.stringify(state.places))
      state.places.forEach(element => {
        if(element.voted != 0) {
          element.voted = 0
          element.userVoted = false
        }
      });
    }
  },
  actions: {
  
  },
  modules: {
  }
})
