<!-- <template>
    <div class="card-container">
      <div class="card-header">
        <h2>Sources</h2>
        <p>Total sources</p>
        <h3>${{ totalAmount }}</h3>
      </div>
      <div class="card-content">
        <div v-for="(source, index) in sources" :key="index" class="source-card">
            <div>
          <img :src="`img-${index + 1}.png`" alt="Source Image">
        </div>
        <div>
          <h4>{{ source.name }}</h4>
        </div>
        <div>
          <p>${{ source.amount }}</p>
        </div>
        </div>
      </div>
      <div class="line-graph">

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalAmount: 7652,
        sources: [
          { name: 'Source 1', amount: 2478 },
          { name: 'Source 2', amount: 2625 },
          { name: 'Source 3', amount: 2856 },
          // Add more sources as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    max-width: 400px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card-header {
    background-color: #f0f0f0;
    padding: 15px;
    text-align: center;
  }
  
  .card-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
  }
  
  .source-card {
    gap:10px;
display: flex;
justify-content: center;
    margin: 10px;
  }
  
  .line-graph {
    /* Add your line graph styling here */
  }
  </style>
   -->



   <template>
  <div class="card-container">
    <div class="card-header">
      <h2>Sources</h2>
      <p>Total sources</p>
      <h3>${{ totalAmount }}</h3>
    </div>
    <table class="card-table">
      <thead>
        <tr>
          <th>Source Image</th>
          <th>Source Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, index) in sources" :key="index" class="source-row">
          <td>
            <img src="https://unsplash.com/photos/a-person-swimming-in-the-water-with-grass-gBCMAENwknA" alt="Source Image">

            <!-- <img [src]="../assets/img-1.png" alt="Source Image"> -->


          </td>
          <td>
            <h4>{{ source.name }}</h4>
          </td>
          <td>
            <p>${{ source.amount }}</p>
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      totalAmount: 7652,
      sources: [
        { name: 'Source 1', amount: 2478 },
        { name: 'Source 2', amount: 2625 },
        { name: 'Source 3', amount: 2856 },
        // Add more sources as needed
      ],
      lineChart: null,
    };
  },

};
</script>

<style scoped>
.card-container {
  max-width: 600px;
  margin: auto;

  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  background-color: #f0f0f0;
  padding: 15px;
  text-align: center;
}

.card-table {
    border: none;
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.card-table th[data-v-0730e2ec], .card-table td[data-v-0730e2ec] {
     border: 0px solid #ddd;
    padding: 10px;
    text-align: center;
}
.card-table th,
.card-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.source-row:hover {
  background-color: #f5f5f5;
}
.
.line-graph {
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #ddd;
}
</style>
