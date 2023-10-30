<template>
    <form @submit.prevent="submitForm">
      <h2>Sign Up</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
     <form><p> Already Sign up?  <RouterLink active-class="active"  to="/login">
  
        
          <span class="nav-text">Sign In</span>

      </RouterLink> </p></form>
      <button :style="{ borderRadius: '5px' }" type="submit">Sign Up</button>

    </form>
  </template>
  
  <script>
      import { RouterLink } from 'vue-router';
  export default {

    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log('Form submitted with data:', this.user);
        // You can send the form data to a server or perform client-side validation here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  form {
    max-width: 33%;
    margin: 0 auto;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
  }
  .form-group {
    margin-bottom: 15px;

  }
  
  label {
    display: block;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border-radius: 5px;
  }
  
  button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  