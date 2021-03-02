<template>
  <div class="home container">
    <RestaurantsList/>
  </div>
</template>

<script>
import RestaurantsList from '@/components/RestaurantsList.vue'
export default {
  name: 'Home',
  components: {
    RestaurantsList
  }
}
</script>
