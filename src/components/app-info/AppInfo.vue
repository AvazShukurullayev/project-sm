<template>
  <Box class="app-info">
    <Parag class="fs-3 text-uppercase">Barcha kinolar soni: {{ allMoviesCount }}</Parag>
    <Parag class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni: {{ favouriteMoviesCount }}
    </Parag>
  </Box>
</template>

<script>
import Box from "@/components/ui-components/Box.vue";
import Parag from "@/components/ui-components/Parag.vue";
export default {
  props: ["allMoviesCount", "favouriteMoviesCount"],
  components: { Box,Parag },
};
</script>

<style></style>
