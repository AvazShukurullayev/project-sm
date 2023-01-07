<template>
  <div class="movie-add-form">
    <h3 class="movie-add-form__title">Yangi kinolar qo'shish</h3>
    <form class="add-form d-flex">
      <input
        type="text"
        class="form-control new-form-label"
        placeholder="Qanday kino?"
      />
      <input
        type="text"
        class="form-control new-form-label"
        placeholder="Necha marotaba ko'rilgan?"
      />
      <button class="btn btn-outline-dark" type="submit">Qo'shish</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.movie-add-form {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
  &__title{
    margin-bottom: 1rem;
  }
}
</style>
