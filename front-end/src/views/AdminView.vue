<template>
<main>
  <section class="adminPage">
    <div class="form-flex">
    <img src="images/SlothIcon.svg" class="svgicon" alt="A sloth icon">
    <h1>The Admin Page for All Things Sloths!</h1>
    <div class="heading">
      <h2>Add a Haiku</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title">
        <p></p>
        <input v-model="author" placeholder="Author">
        <p></p>
	<textarea v-model="haiku" placeholder="Haiku | 5/7/5 Syllable Count"></textarea>
	<p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
	<p>{{addItem.author}}</p>
        <img :src="addItem.path" />
	<p>{{addItem.haiku}}</p>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete an Item</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title">
        <p></p>
        <input v-model="findItem.author">
        <p></p>
        <textarea v-model="findItem.haiku" placeholder="Haiku | 5/7/5 Syllable Count"></textarea>
	<p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
  </div>
  </section>
</main>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  data() {
    return {
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      haiku: "",
      author: "",
      userEmail: "",
      userPhoneNumber: "",
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          haiku: this.findItem.haiku,
          author: this.findItem.author,
          userEmail: this.findItem.userEmail,
          userPhoneNumber: this.findItem.userPhoneNumber,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
       console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
        try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
    } catch (error) {
        console.log(error);
        }
     },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
	console.log(this.title, "title", this.haiku, "haiku", r1.data.path, "path");
        let r2 = await axios.post('/api/items', {
          title: this.title,
          haiku: this.haiku,
          author: this.author,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
