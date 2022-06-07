<template>
  <div class="posts">
    <h1>Min sida</h1>
    <!--Show loged in users email-->
    <p class="logedinuser">Inloggad som: {{ $store.state.user.email }}</p>
<!--Link to page create-->
    <div class="router-link-class"> 
      <router-link class="router-link" :to="{ name: 'create' }"
        >Skapa ny uträkning</router-link
      >
    </div>
    <transition name="list" appear>
    
    
    <table>
      <thead>
        <tr>
          <th>Post</th>
          <th>Namn</th>
          <th>Redigera</th>
          <th>Radera</th>
        </tr>
      </thead>
      <!--if no posts in database show message-->
      <tbody v-if="posts.length === 0">
        <tr>
          <td colspan="4">
            <p class="no-calculation-saved">Du har inga sparade uträkningar.</p>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>
            <!--Link to page specific-->
            <router-link
              class="more-info"
              :to="{ name: 'specific', params: { id: post._id } }"
              >Läs mera</router-link
            >
          </td>
          <td class="post-title">{{ post.title }}</td>
          <td>
            <!--Link to page edit-->
            <router-link
              class="edit"
              :to="{ name: 'edit', params: { id: post._id } }"
              >Ändra</router-link
            >
          </td>
          <td>
            <button class="delete" @click.prevent="deletePost(post._id)"> 
            <i class="fa-solid fa-trash-can"></i>

              
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [],
      name: null,
    };
  },
  // get all posts from database
  created() {
    let uri = "//localhost:4000/posts"; 
    this.axios.get(uri).then((response) => {
      this.posts = response.data;
     
      
    });
    
  },
  // get the id  for delete
  methods: {
    deletePost(id) {
      let uri = `//localhost:4000/posts/delete/${id}`; 
      this.axios.delete(uri).then((response) => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    },
  },
  

};

</script>

<style scoped>
.list-enter-from {
  opacity: 0;
  transform: scale(0.1);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.5s ease;
}
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.no-calculation-saved {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f00;
  text-align: center;
}
.logedinuser {
  color: #4caf50;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}
h1 {
  text-align: center;
  margin-top: 1rem;
}
table {
  margin-top: 3rem;
}
@media screen and (max-width: 600px) {
 
  table {
    white-space: nowrap;
    margin: auto;
    max-width: 300px;
  }
  
  table th {
    display: none;
  }

  table td {
    display: block;
  }
}

.post-title {
  text-align: center;
  font-size: 1.3em;
}
.router-link-class {
  text-align: center;
  background-color: #4caf50;
  background-color: #4caf50;
  align-items: center;
  margin: 0 auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  max-width: 240px;
}
.router-link-class:hover {
  background-color: rgb(79, 231, 86);
}

.router-link {
  text-decoration: none;
  color: white;
}

.posts {
  margin: 0 auto;
  max-width: 600px;
}

.posts h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.posts table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;
}

.posts table th,
.posts table td {
  padding: 5px;
  border: 1px solid #ddd;
  min-width: 100px;
}

.posts table th {
  text-align: center;
}

.posts table tr {
  background-color: #fff;
}

.posts table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.more-info {
  background-color: #3f413f;
  border: 1px solid #ddd;
  padding: 6px;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: 80px;
}

.more-info:hover {
  background-color: rgb(110, 109, 109);
}

.edit {
  background-color: #dfbc25;
  border: 1px solid #ddd;
  padding: 6px;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-size: 1.2em;
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: 80px;
}

.edit:hover {
  background-color: rgb(248, 213, 12);
}

.delete {
  background-color: #c50d0d;
  
  padding: 8px;
  width: 80px;
  border-radius: 5px;
  
  color: rgb(255, 255, 255);
  font-size: 1.2em;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.delete:hover {
  background-color: rgb(250, 6, 6);
}
</style>
