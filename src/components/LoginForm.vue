<template>
    <div class="section">
      <div class="section1">
        <Center>
          <h1>Welcome Back</h1>
        </Center>
        <div class="login-form">
          <h2>Login</h2>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" v-model="username" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" />
            </div>
            <div class="options">
              <div class="link1">
                <p>
                  Don't have an account?
                  <RouterLink active-class="active" to="/register">
                    <span class="nav-text">Sign Up</span>
                  </RouterLink>
                </p>
              </div>
              <div class="link2">
                <a href="#" @click="showSignUp">Forget password </a>
              </div>
            </div>
            <RouterLink to="/dashboard">
              <button type="submit" class="login-button">Login</button>
            </RouterLink>
          </form>
        </div>
      </div>
      <div class="section2"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { reactive, computed } from "vue";
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
  import { RouterLink } from "vue-router";
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  const formState = reactive<FormState>({
    username: "",
    password: "",
    remember: true,
  });
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });
  </script>
  
  <style scoped>
  .login-form {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    /* text-align: center; */
    background-color: #f9f9f9;
  }
  
  .section {
    display: flex;
  
    align-items: center;
  
    justify-content: space-between;
    height: 100vh;
  }
  
  .section1 {
    width: 40%;
  }
  
  .section2 {
    width: 60%;
    height: 100vh;
    background-position: center;
    background-size: cover;
  
    background-image: url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    display: block;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .options {
    margin-top: 10px;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  .options {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  @media only screen and (max-width: 991px) {
      .login-form{
          max-width: 80%;
      }
    .section1 {
      width: 100% !important;
    }
    .section2 {
      display: none;
    }
    form {
      max-width: 100%;
      margin: 20px !important;
    }
  }
  
  @media only screen and (max-width: 912px) and (min-width: 768px) {
    .section1 {
      width: 80%;
      margin: 0 auto !important;
    }
    .section2 {
      display: none;
    }
    form {
      max-width: 100%;
    }
  }
  </style>