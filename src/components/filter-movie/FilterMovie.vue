<template>
  <div class="filter-movie">
    <div class="btn-group">
      <button
        class="btn"
        :class="[filterName === 'all' ? 'btn-dark' : 'btn-outline-dark']"
        @click="filterHandler('all')"
      >
        Barcha kinolar
      </button>
      <button
        class="btn"
        :class="[filterName === 'popular' ? 'btn-dark' : 'btn-outline-dark']"
        @click="filterHandler('popular')"
      >
        Mashhur kinolar
      </button>
      <button
        class="btn"
        :class="[
          filterName === 'mostViewers' ? 'btn-dark' : 'btn-outline-dark',
        ]"
        @click="filterHandler('mostViewers')"
      >
        Eng ko'p ko'rilgan kinolar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateFilterHandler: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    filterHandler(par) {
      this.filter = par;
      this.updateFilterHandler(this.filter);
    },
  },
};
</script>

<style scoped lang="scss"></style>
