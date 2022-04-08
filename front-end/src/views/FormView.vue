<template>
<div class="home">
  <h2>A list of Submitted Haiku's</h2>
  <section class="image-gallery">
    <div class="image" v-for="item in items" :key="item.id">
      <h2>{{item.title}}</h2>
      <p>{{item.author}}</p>
      <img :src="item.path" />
      <p>{{item.haiku}}</p>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'FormView',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
       console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  align-items: center;
}

.image img {
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: auto;
    width: 50%;
    margin: 0.5em;
    margin-left: auto;
    margin-right: auto;;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
