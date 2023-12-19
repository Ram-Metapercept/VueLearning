<template>
  <form class="edit-profile-form">
    <div class="card">
      <div class="card-header" :style="{ backgroundColor: dataBackgroundColor }">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </div>

      <div class="card-content">
        <div class="form-layout">
          <div class="form-group-full">
            <label for="disabled">Company (disabled)</label>
            <input id="disabled" v-model="disabled" disabled />
          </div>

          <div class="form-group">
            <label for="username">User Name</label>
            <input id="username" v-model="username" type="text" />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" v-model="emailadress" type="email" />
          </div>
        

          <div class="form-group">
            <label for="firstname">First Name</label>
            <input id="firstname" v-model="firstname" type="text" />
          </div>

          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input id="lastname" v-model="lastname" type="text" />
          </div>

          <div class="form-group">
            <label for="address">Address</label>
            <input id="address" v-model="address" type="text" />
          </div>

          <div class="form-group">
            <label for="city">City</label>
            <input id="city" v-model="city" type="text" />
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <input id="country" v-model="country" type="text" />
          </div>

          <div class="form-group">
            <label for="code">Postal Code</label>
            <input id="code" v-model="code" type="number" />
          </div>

          <div class="form-group-full">
            <label for="aboutme">About Me</label>
            <textarea id="aboutme" v-model="aboutme"></textarea>
          </div>

          <div class="form-group text-right">
            <button class="btn success">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "Ram@123",
      disabled: "Metapercept Technology Services LLP",
      emailadress: "ram.gk@metapercept.com",
      lastname: "kashyap",
      firstname: "Ram",
      address: "Hadaspar",
      city: "Pune",
      country: "India",
      code: "411028",
      aboutme:
        "I am Junior Software Developer at Metapercept Technology Services LLP."
    };
  }
};
</script>

<style scoped>
.edit-profile-form {
 
  margin: 0 auto;
}

.card {

  margin:10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card-header {
  padding: 15px;

}

.title {
  margin: 0;
  font-size: 1.5em;
}

.category {
  margin: 5px 0;
  font-size: 1em;
}

.card-content {
  padding: 20px;
}

.form-layout {
  display: flex;
  flex-wrap: wrap;
}
.block1{
  display: flex;
}
.form-group {
  border: none;
  padding-right:10px;
  margin-top: 15px;
  width: 50%;
  margin-bottom: 15px;
}



.form-group-full {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea{
  height: 5rem;
}
label {
  font-weight: 700;
  font-size: 20px;

}
.text-right {
  text-align: right;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.success {
  background-color: #28a745;
  color: #fff;
}
</style>
