<template>
  <MyLi
    class="list-group-item d-flex justify-content-between"
    :class="{ like: movie.like, favourite: movie.favourite }"
  >
    <span
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
      class="list-group-item-label"
      >{{ movie.name }}</span
    >
    <MyInput
      type="number"
      class="list-group-item-input"
      :value="movie.viewers"
    />
    <div class="d-flex justify-content-center align-items-center">
      <MyButton
        class="btn-cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="fas fa-cookie"></i>
      </MyButton>
      <MyButton class="btn-trash btn-sm" @click="$emit('onRemove', movie.id)">
        <i class="fas fa-trash"></i>
      </MyButton>
      <i class="fas fa-star"></i>
    </div>
  </MyLi>
</template>

<script>
import MyLi from "@/components/ui-components/MyLi.vue";
import MyInput from "@/components/ui-components/MyInput.vue";
import MyButton from "@/components/ui-components/MyButton.vue";
export default {
  props: ["movie"],
  components: { MyLi, MyInput, MyButton },
  methods: {
    /* onLike() {
      this.$emit("onLike", this.movie.id);
    }, */
  },
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
    max-width: 550px;
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
