<template>
  <input type="text" @input="$emit('input', $event)" />
</template>

<script>
export default {
  name: "MyInput",
};
</script>

<style></style>
