<template>
  <div>
    <!-- <SignUpForm /> -->
    <router-view /> <!-- Use lowercase 'router-view' -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SignUpForm from "./views/Account/SignUpForm.vue";

export default defineComponent({
  components: {
    SignUpForm, 
  },
});
</script>
