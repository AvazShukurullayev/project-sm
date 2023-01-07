<template>
  <div class="home font-monospace">
    <div class="container">
      <div class="content">
        <AppInfo />
        <div class="search-panel">
          <SearchPanel />
          <FilterMovie />
        </div>
        <MovieList />
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
