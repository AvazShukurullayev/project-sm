<template>
  <div class="home font-monospace">
    <div class="container">
      <div class="content">
        <AppInfo
          :allMoviesCount="movies.length"
          :favouriteMoviesCount="movies.filter((c) => c.favourite).length"
        />
        <Box>
          <SearchPanel :updateTermHandler="updateTermHandler" />
          <!-- <SearchPanel @onInputHandler="onInputHandler" /> because it was my way -->
          <FilterMovie
            :updateFilterHandler="updateFilterHandler"
            :filterName="filter"
          />
        </Box>
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

import Box from "@/components/ui-components/Box.vue";
export default {
  name: "HomeView",
  components: {
    AppInfo,
    SearchPanel,
    FilterMovie,
    MovieList,
    MovieAddForm,
    Box,
  },
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
        {
          name: "Murad IV. Bagdad Fatihi",
          viewers: 436,
          favourite: false,
          like: false,
          id: 4,
        },
        {
          name: "Empire of Amir Temur",
          viewers: 2589,
          favourite: false,
          like: false,
          id: 5,
        },
        {
          name: "Yegilmaz",
          viewers: 551,
          favourite: false,
          like: false,
          id: 6,
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

</style>
