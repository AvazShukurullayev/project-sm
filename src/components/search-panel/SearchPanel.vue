<template>
  <input
    type="text"
    class="form-control search-input"
    placeholder="Kinolarni qidirish..."
    @input="$emit('onInputHandler',$event.target.value)"
  />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.search-input {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
}
</style>
