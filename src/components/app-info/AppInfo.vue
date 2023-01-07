<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allMoviesCount }}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</p>
  </div>
</template>

<script>
export default {
  props: ["allMoviesCount","favouriteMoviesCount"],
 /*  props: {
    allMoviesCount: {
      type: Number,
      required: true,
    },
    favouriteMoviesCount:{
      type: Number,
      required: true,
    }
  }, */
};
</script>

<style scoped lang="scss">
.app-info {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
}
</style>
