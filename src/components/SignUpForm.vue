<template>
  <div class="part">
    <div class="part1">
      <form @submit.prevent="submitForm">
        <h2>Welcome To DITA EXPRESSO TECHNOLOGY</h2>
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
        <div class="linkSign">
          Already Sign up?
          <RouterLink active-class="active" to="/login">
            <span class="nav-text">Sign In</span>
          </RouterLink>
        </div>
        <!-- <form>
         
        </form> -->
        <div id="buttonCenter">
          <button :style="{ borderRadius: '5px' }" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    <div class="part2"></div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted with data:", this.user);
      // You can send the form data to a server or perform client-side validation here
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
form {
  max-width: 50%;
  margin: 0 auto;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
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
  border: 1px solid #ccc;
}

#buttonCenter {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.part {
  display: flex;

  align-items: center;

  justify-content: space-between;
  height: 100vh;
}

.part1 {
  width: 50%;
}

.part2 {
  width: 50%;
  height: 100vh;
  background-position: center;
  background-size: cover;

  background-image: url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

@media only screen and (max-width: 991px)  {
  .part1 {
    width: 100%;
  }
  .part2 {
    display: none;
  }
  form {
    max-width: 100%;
    margin: 20px !important;
  }
}

@media only screen and (max-width: 912px) and (min-width: 768px)  {
    .part1 {
      width: 80%;
margin:0 auto !important;
 
    }
    .part2 {
      display: none;
    }
    form {
      max-width: 100%;
    
    }
  }

.linkSign {
  display: flex;
}
</style>
