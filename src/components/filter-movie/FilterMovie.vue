<template>
  <div class="filter-movie">
    <div class="btn-group">
      <MyButton
        v-for="btn in filterButtons"
        :key="btn.name"
        :class="[filterName === btn.name ? 'btn-dark' : 'btn-outline-dark']"
        @click="filterHandler(btn.name)"
      >
        {{ btn.title }}
      </MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "../ui-components/MyButton.vue";
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
  components: { MyButton },
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
