<template>
  <li
    class="list-group-item d-flex justify-content-between"
    :class="{ like: movie.like, favourite: movie.favourite }"
  >
    <span class="list-group-item-label">{{ movie.name }}</span>
    <input type="number" class="list-group-item-input" :value="movie.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm">
        <i class="fas fa-cookie"></i>
      </button>
      <button type="button" class="btn-trash btn-sm">
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style scoped lang="scss">
.list-group-item {
  padding: 15px 20px;
  border: none;
  border-bottom: 1px solid #3d5a80;
  &:last-child {
    border-bottom: none;
  }
  &-label {
    line-height: 35px;
    font-size: 20px;
    max-width: 450px;
    width: 100%;
    cursor: pointer;
  }
  &-input {
    line-height: 35px;
    border: none;
    outline: none;
    text-align: center;
  }
  button {
    height: 35px;
    width: 35px;
    margin: 3px;
    font-size: 17px;
    cursor: pointer;
    border: none;
  }
  .btn-cookie {
    color: #e09f3e;
  }
  .btn-trash {
    color: #e5383b;
  }
  .fa-star {
    width: 35px;
    // height: 35px;
    text-align: center;
    font-size: 16px;
    color: #ffd700;
    transition: all 0.3s;
    transform: translateX(30px);
    opacity: 0;
  }
  &.like .fa-star {
    transform: translateX(0);
    opacity: 1;
  }
  &.favourite &-label,
  &.favourite &-input {
    color: #ffd700;
  }
}
</style>
