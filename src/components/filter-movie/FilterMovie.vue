<template>
  <div class="filter-movie">
    <div class="btn-group">
      <button
        v-for="btn in filterButtons"
        type="button"
        class="btn"
        :class="[filterName === btn.name ? 'btn-dark' : 'btn-outline-dark']"
        @click="filterHandler(btn.name)"
      >
        {{ btn.title }}
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
      filterButtons: [
        {
          title: "Barcha kinolar",
          name: "all",
        },
        {
          title: "Mashxur kinolar",
          name: "popular",
        },
        {
          title: "Eng ko'p ko'rilgan kinolar",
          name: "mostViewers",
        },
      ],
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
