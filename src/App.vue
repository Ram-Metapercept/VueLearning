<template>
  <Demo />
  <!-- <RouterView /> -->
</template>

<script>
import { defineComponent } from "vue";
import Demo from "./components/Demo.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  components: {
    Demo,
  },
});
</script>
