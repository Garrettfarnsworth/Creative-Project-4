<template>
<div class="wrapper">
  <div class="sloths">
    <div class="sloth" v-for="sloth in sloths" :key="sloth.id">
      <div class="info">
        <h1>{{sloth.FullName}}</h1>
        <p>Gender: {{sloth.Gender}}</p>
        <p>Common Name{{sloth.CommonName}}</p>
        <p>Scientific Name: {{sloth.ScientificName}}</p>
        <p>Personality Trait: {{sloth.Buzzword}}</p>
        <p>State: {{sloth.Location}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SlothList',
  props: {
    sloths: Array
  }
}
</script>

<style scoped>
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .sloths {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    
    .sloth {
      margin: 10px;
      margin-top: 50px;
      width: 200px;
    }
    
    .sloth img {
      border: 2px solid #333;
      height: 250px;
      width: 200px;
      object-fit: cover;
    }
    
    .sloth .image {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
    }
    
    .info {
      background: #EF959C;
      color: #000;
      padding: 10px 30px;
      height: 450px;
    }
    
    .info h1 {
      font-size: 30px;
    }
    
    .info h2 {
      font-size: 14px;
    }
    
    .info p {
      margin: 3px;
      font-size: 20px;
    }
    
    .nameDetail {
      display: flex;
    }
    
    button {
      height: 50px;
      background: #000;
      color: white;
      border: none;
    }
    
    .auto {
      margin-left: auto;
    }
    </style>