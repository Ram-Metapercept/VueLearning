<template>
  <div class="part">
    <div class="part1">
      <img src="../../assets/Sign.png" alt="" />
    </div>
    <div class="part2">
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
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
          />
        </div>
        <div class="linkSign">
          Already Sign up?
          <RouterLink active-class="active" to="/">
            <span class="nav-text">Sign In</span>
          </RouterLink>
        </div>
        <!-- <form>
         
        </form> -->
        <div id="buttonCenter">
          <button :style="{ borderRadius: '5px' }" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
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

      console.log("Form submitted with data:", this.user);
     
    },
  },
};
</script>

<style scoped>

form {
  max-width: 50%;
  margin: 0 auto;

  padding: 20px;
  background-color: #e5e4e2;
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

  justify-content: center !important;
  height: 100vh;
}

.part1 {
  width: 50%;
  align-items: center !important;
  display: flex !important;
  justify-content: flex-end !important;

  background-position: center;
  background-size: cover;
}
.part1 img{
 width:60%;
  }

.part2 {
  width: 50% !important;
}

@media only screen and (max-width: 991px) {
    .part1 img{
      width:100%;
      margin: 0 auto;

    }
  .part2 {
    width: 100% !important;
  }
  .part{
    display: flex;
    flex-direction: column;
  
  justify-content: flex-end;
  }
  form {
    max-width: 100%;
    margin: 20px !important;
  }
}

@media only screen and (max-width: 912px) and (min-width: 768px) {
  .part2 {
    width: 80%;
    /* margin: 0 auto !important; */
  }
  .part1 {
  display: flex;
    justify-content: center !important;
  }
  form {
    max-width: 100%;
  }
}

.linkSign {
  display: flex;
}
</style>
