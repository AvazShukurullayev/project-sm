<template>
  <div class="home font-monospace">
    <div class="container">
      <div class="content">
        <AppInfo
          :allMoviesCount="movies.length"
          :favouriteMoviesCount="movies.filter((c) => c.favourite).length"
        />
        <div class="search-panel">
          <SearchPanel :updateTermHandler="updateTermHandler" />
          <!-- <SearchPanel @onInputHandler="onInputHandler" /> because it was my way -->
          <FilterMovie
            :updateFilterHandler="updateFilterHandler"
            :filterName="filter"
          />
        </div>
        <MovieList
          :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
          @onToggle="onToggleHandler"
          @onRemove="onRemoveHandler"
        />
        <MovieAddForm @createMovieItem="createMovieItem" />
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
          id: 1,
        },
        {
          name: "Empire of Osman",
          viewers: 1411,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Ertugrul",
          viewers: 751,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
  },
  methods: {
    createMovieItem(par) {
      this.movies.push(par);
    },
    // shetta sal tushunarsiz
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((element) => {
        if (element.id === id) {
          return { ...element, [prop]: !element[prop] };
        }
        return element;
      });
      console.log(this.movies);
    },
    onRemoveHandler(id) {
      this.movies = this.movies.filter((element) => element.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter(
        (element) => element.name.toLowerCase().indexOf(term) > -1
      );
    },
    updateTermHandler(term) {
      this.term = term;
    },
    /*  onInputHandler(par) {
      this.term = par;
    }, because it was my way */

    updateFilterHandler(filter) {
      this.filter = filter;
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);
        case "mostViewers":
          return arr.filter((c) => c.viewers > 500);
        default:
          return arr;
      }
    },
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
