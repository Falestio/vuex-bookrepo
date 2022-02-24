<template>
  <div>
    <div class="container">
      <form class="form" @submit.prevent>
        <label for="name">Book Name</label>
        <input type="text" id="name" v-model="bookName">

        <label for="author">Author Name</label>
        <input type="text" id="author" v-model="authorName">

        <button @click="addBook()" type="submit">Submit</button>
      </form>
      <ul>
        <li v-for="book in books" :key="book.name" class="list">
          <span>{{ book.name }}</span>
          <span>{{ book.author }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bookName: '',
      authorName: '',
    }
  },
  methods: {
    addBook(){
      this.$store.commit('addBook', {
        name: this.bookName,
        author: this.authorName, 
      })

      console.log(this.$store.state.books)
    },


  },
  computed: {
    books(){
      return this.$store.getters.getAllBooks
    }
  },
}


</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto auto;
  border: 2px solid #eaeaea;
  border-radius: 5px;
  padding: 20px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
}

.list span {
  font-size: 22px;
}


</style>