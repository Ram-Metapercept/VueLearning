

<script setup>
import { ref, onMounted,watch } from "vue";
import axios from "axios";
import BitTable from "./components/BitTable.vue";
import {RouterView} from "vue-router"
const data = ref(null);
const news= ref(null);
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

</script>
<template>

  <RouterView />

<!-- <div>{{news}}</div>



  <div>

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
          <tr v-for="info in data.data" :key="info.id">
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
  </div> -->
</template>


<style scoped>
</style>
