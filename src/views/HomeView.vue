<template>
  <div class="home font-monospace">
    <div class="container">
      <div class="content">
        <AppInfo
          :allMoviesCount="movies.length"
          :favouriteMoviesCount="movies.filter((c) => c.favourite).length"
        />
        <div class="search-panel">
          <SearchPanel />
          <FilterMovie />
        </div>
        <MovieList :movies="movies" />
        <MovieAddForm />
      </div>
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import FilterMovie from "@/components/filter-movie/FilterMovie.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue";
export default {
  name: "HomeView",
  components: { AppInfo, SearchPanel, FilterMovie, MovieList, MovieAddForm },
  data() {
    return {
      movies: [
        {
          name: "Omar",
          viewers: 811,
          favourite: false,
          like: false,
        },
        {
          name: "Empire of Osman",
          viewers: 1411,
          favourite: true,
          like: false,
        },
        {
          name: "Ertugrul",
          viewers: 751,
          favourite: false,
          like: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.search-panel {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
}
</style>
