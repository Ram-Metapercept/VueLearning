<template>
  <div>
    <!-- <SignUpForm /> -->
    <router-view /> <!-- Use lowercase 'router-view' -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SignUpForm from "./components/SignUpForm.vue";

export default defineComponent({
  components: {
    SignUpForm, // Specify the correct component name
  },
});
</script>
