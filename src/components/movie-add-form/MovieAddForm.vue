<template>
  <Box class="movie-add-form">
    <h3 class="movie-add-form__title">Yangi kinolar qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent="changeHandler">
      <MyInput
        class="form-control new-form-label"
        placeholder="Qanday kino?"
        @input="name = $event.target.value"
        :value="name"
        required
      />
      <MyInput
        type="number"
        class="form-control new-form-label"
        placeholder="Necha marotaba ko'rilgan?"
        @input="viewers = $event.target.value"
        :value="viewers"
        required
      />
      <MyButton class="btn-outline-dark" type="submit">Qo'shish</MyButton>
    </form>
  </Box>
</template>

<script>
import Box from "../ui-components/Box.vue";
import MyInput from "../ui-components/MyInput.vue";
import MyButton from "../ui-components/MyButton.vue";
export default {
  name: "MovieAddForm",
  components: { Box, MyInput, MyButton },
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    changeHandler() {
      if (!this.name || !this.viewers) return;
      const newMovieItem = {
        name: this.name,
        viewers: this.viewers,
        favourite: false,
        like: false,
        id: Date.now(),
      };
      this.$emit("createMovieItem", newMovieItem);
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>

<style scoped lang="scss">
.movie-add-form__title__title {
  margin-bottom: 1rem;
}
</style>
