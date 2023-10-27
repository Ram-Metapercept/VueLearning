

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios"; 
  
  const data = ref(null);
  const route = useRoute();
  
  const fetchData = async () => {
    const apiUrl = "https://api.coincap.io/v2/assets";
  
    try {
      const response = await axios.get(apiUrl);
      data.value = response.data.data;
      console.log(data.value[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const filteredData = ref([]);
  onMounted(async () => { 
    await fetchData(); 
    if (data.value) { 
      filteredData.value = data.value.filter((item) => item.id === route.params.id);

    }
  });

 
  </script>
  
<template>
    <div>
   <h1> Coin with detail Info</h1>

   <div v-for="info in filteredData" class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Rank</b>:{{info.id}}</li>
      <li class="list-group-item"><b>Name</b>:{{info.name}}</li>
      <li class="list-group-item"><b>Change in 24Hr</b>:{{info.changePercent24Hr}}</li>
      <li class="list-group-item"><b>Change in 24Hr</b>:{{info.priceUsd}}</li>
      <li class="list-group-item"><b>Max Supply</b>:{{info.maxSupply}}</li>
      <li class="list-group-item"><b>Volume used in 24Hr</b>:{{info.volumeUsd24Hr}}</li>
      <li class="list-group-item"><b>vwap24Hr</b>:{{info.vwap24Hr}}</li>
      <li class="list-group-item"><b>marketCapUsd</b>:{{info.marketCapUsd}}</li>
      <li class="list-group-item"><b>Symbol</b>:{{info.symbol}}</li>
    </ul>
  </div>
    </div>
  </template>
  
  