<template>
  <ul class="movie-list list-group">
    <MovieListItem v-for="movie in movies"/>
  </ul>
</template>

<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue";
export default {
  components: { MovieListItem },
  data() {
    return {
      movies: [
        { name: "Omar", viewers: 811 },
        { name: "Empire of Osman", viewers: 1411 },
        { name: "Ertugrul", viewers: 751 },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.movie-list {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
}
</style>
