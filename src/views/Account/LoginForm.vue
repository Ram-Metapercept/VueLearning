<template>
  <div class="section">
    <div class="section1"><center><img src="../../assets/Login.png" alt=""/></center> </div>
    <div class="section2">
      <center>
        <h1>Welcome Back</h1>
      </center>
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="username">Username or Email</label>
            <input type="text" id="username" v-model="formState.username" />
            <div class="error-message" v-if="usernameError">{{ usernameError }}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="formState.password" />
            <div class="error-message" v-if="passwordError">{{ passwordError }}</div>
          </div>
          <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
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
              <a href="#" @click="forgotPassword">Forget password </a>
            </div>
          </div>
          <button type="submit" class="login-button" >Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

interface FormState {
  username: string;
  password: string;
}

export default {
  name: 'LoginForm',
  components: {
    RouterLink,
  },
  data() {
    return {
      formState: reactive<FormState>({
        username: "",
        password: "",
      }),
      usernameError: "",
      passwordError: "", 
      errorMessage: "", 
    };
  },
  methods: {
   onSubmit() {
  const { username, password } = this.formState;

  // Reset error messages
  this.usernameError = "";
  this.passwordError = "";
  this.errorMessage = "";

  if (!username || username.length === 0) {
    this.usernameError = "Username is required";
  } else if (username !== "admin@gmail.com") {
    this.usernameError = "Username is incorrect";
  }

  if (!password || password.length === 0) {
    this.passwordError = "Password is required";
  } else if (password !== "admin@123") {
    this.passwordError = "Password is incorrect";
  }

  if (!this.usernameError && !this.passwordError) {
 
    this.$router.push("/dashboard");
  }
}
   , forgotPassword() {

      console.log("Forgot password clicked");
    },
  },
  computed: {
    disabled() {
      return !(this.formState.username && this.formState.password);
    },
  },
};
</script>

<style scoped>
.login-form {

  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #E5E4E2;
}

.section {
  display: flex;

  align-items: center;

  justify-content: space-evenly !important;
  height: 100vh;
}

.section2 {
  width: 50%;
  /* background-color: blue; */
}

.section1 {
  width: 50% !important;

  align-items: center !important;
display: flex !important;

justify-content: flex-end !important;

  background-position: center;
  background-size: cover;
}
.section1 img{
width:120%;
  margin: 0 auto;
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
.error-message {
  color: red;
  margin-top: 10px;
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
  .section2 {
    width: 100% !important;
  }
.section{
  display: flex;
  flex-direction: column;
}
.section1{
  display: flex;

justify-content: center;
}
  form {
    max-width: 100%;
    margin: 20px !important;
  }
}

@media only screen and (max-width: 912px) and (min-width: 768px) {
  .section{
    display: flex !important;
    flex-direction: column !important;
  }
  .section2 {
    width: 80%;
    margin: 0 auto !important;
  }
  
  form {
    max-width: 100%;
  }
}
</style>
