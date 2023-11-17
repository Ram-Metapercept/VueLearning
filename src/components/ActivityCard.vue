<!-- ActivityCard.vue -->
<template>
  <h1 class="activity-heading">Recent Activity Feeds</h1>
    <div class="activity-card">


      <div v-for="activity in activities" :key="activity.date" class="activity-item">
        <i class="fa-solid fa-check"></i>
        <div class="activity-date">{{ formatDate(activity.date) }}</div>
        <div class="activity-details">{{ activity.details }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activities: {
        type: Array,
        required: true,
      },
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
      },
    },
  };
  </script>
  
  <style scoped>
  .activity-card:not(span) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .activity-card > span {
    display: flex;
    justify-content: flex-start;
  }

  
  .activity-item {
    padding: 15px;
    width: 300px;
    transition: transform 0.3s ease;
    position: relative;
    
  }
  .activity-item i{
    position: absolute;
    left: -25px;
    width: 30px;
    height: 30px;
    color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(152, 152, 255);
    border-radius: 50%;
  }
  .activity-item::before{
    position: absolute;
    left: -10px;
    top:20px;
    content: "";
    height: 100% ;
    width: 2px;
    border-left: 1px dotted red;
  }
  
  .activity-date {
    color: #007bff; /* Blue color for the date */
    font-weight: bold;
  }
  
  .activity-details {
    color: #495057; /* Dark gray color for the details */
    margin-top: 8px;
  }
  
  .activity-heading{
    margin-left: 40px;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  </style>
  