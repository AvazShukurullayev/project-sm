<template>
  <MyInput
    class="form-control search-input"
    placeholder="Kinolarni qidirish..."
    :value="term"
    @input="changeHandler"
  />
  <!-- <input
    type="text"
    class="form-control search-input"
    placeholder="Kinolarni qidirish..."
    @input="$emit('onInputHandler',$event.target.value)"
  />  because it was my way-->
</template>

<script>
import MyInput from "../ui-components/MyInput.vue";
export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  components: { MyInput },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    changeHandler(e) {
      this.term = e.target.value;
      this.updateTermHandler(this.term);
    },
  },
};
</script>

<style scoped lang="scss">
.search-input {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba($color: #000000, $alpha: 0.15);
}
</style>
