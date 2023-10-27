

<script setup>
import { ref, onMounted,watch } from "vue";
import axios from "axios";
import {useRouter} from "vue-router"
const router = useRouter()

const data = ref(null);

const showModal=ref("true")

const fetchData = async () => {
  const apiUrl = "https://api.coincap.io/v2/assets";

  try {
    const response = await axios.get(apiUrl);
    data.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  showModal.value=false
  console.log(data.value.data)
};


const search = ref("")
watch(search, () => {
  // Filter the data based on the search input
  data.value.data = data.value.data.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
onMounted(() => {
  fetchData();
});

const navigateToQuiz = (id) => {
  router.push(`/BitTable/${id}`);
  console.log("Navigating to quiz with ID:", id);
};





</script>
<template>


<div>
    <!-- <button v-show="showModal" @click="fetchData">BitCoin Data</button> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input v-model.trim="search" type="text" placeholder="Search...">
              <!-- <input  v-model.trim="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button> -->
            </form>
          </div>
        </div>
      </nav>
    <div v-if="data">
      <h2>Data from Third-Party API:</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" :style="{ fontWeight: 'bold' }">Rank</th>

            <th scope="col" :style="{ fontWeight: 'bold' }">Name</th>
            <th scope="col" :style="{ fontWeight: 'bold' }">Price </th>
            <th scope="col" :style="{ fontWeight: 'bold' }">Market Cap(USD)</th>
            <th scope="col" :style="{ fontWeight: 'bold' }">Supply</th>
            <th scope="col" :style="{ fontWeight: 'bold' }">Volume(24hr)</th>
            <th scope="col" :style="{ fontWeight: 'bold' }">VWAP24Hr</th>
            <th scope="col" :style="{ fontWeight: 'bold' }">Change(24hr)</th>
          </tr>
        </thead>
        <tbody>

           
          <tr v-for="info in data.data" :key="info.id" @click="navigateToQuiz(info.id)" style="cursor: pointer">
            <td>{{ info.rank }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.priceUsd }}</td>
            <td>{{ info.marketCapUsd }}</td>
            <td>{{ info.supply }}</td>
            <td>{{ info.volumeUsd24Hr }}</td>
            <td>{{ info.vwap24Hr }}</td>
            <td>{{ info.changePercent24Hr }} %</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>