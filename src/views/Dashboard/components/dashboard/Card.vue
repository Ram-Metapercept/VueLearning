<template>
  <div class="statistics-card">
    <div class="header" >
      <i :class="iconClass"></i>
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <p>{{ value }}</p>
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: [String, Number],
    label: String,
    icon: String,
  },
  computed: {
    iconClass() {
      return `fas fa-${this.icon}`;
    },
  },
};
</script>

<style scoped>
.statistics-card {
  background-color: #ffffff;
  max-height: 180px;
  min-height:180px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  margin-bottom: 20px !important;
}


.statistics-card:hover {
  transform: scale(1.05);
}

.header {
  background-color: #4caf50;
  color: #ffffff;
  min-height: 90px;
  padding: 30px 15px 15px; 
  text-align: center;
  position: relative !important;
}

.header i {
  font-size: 24px;
  position: absolute;
  top: 20px; 
  left: 50%;
  transform: translate(-50%, -50%);
}
.header h3 {
  font-size: 1.5em;
  margin: 0;
}

.content {
  padding: 20px;
  text-align: center;
}

.content p {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.content span {
  color: #888888;
}
</style>
