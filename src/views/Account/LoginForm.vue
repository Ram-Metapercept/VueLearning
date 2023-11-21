<template>
  <div class="section">
    <div class="section1"><center><img src="../../assets/Login.png" alt=""/></center> </div>
    <div class="section2">
      <Center>
        <h1>Welcome Back</h1>
      </Center>
      <div class="login-form">
        <h2>Login</h2>
        <form >
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password"  />
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
              <a href="#" @click="">Forget password </a>
            </div>
          </div>
          <RouterLink to="/dashboard">
            <button type="submit" class="login-button">Login</button>
          </RouterLink>
        </form>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { reactive, computed } from "vue";
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
  /* width: 100%; */
  /* background-color: red; */
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
