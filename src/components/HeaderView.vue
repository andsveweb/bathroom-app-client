<template>
  <div>
    <div class="header">
      <h1>Badrums information</h1>
      <!-- <p class="logedinuser">Inloggad som: {{ $store.state.user.email }}</p> -->
      <!--display current user-->

      <nav>
        <router-link class="router-link" to="/">Hem</router-link>
        <router-link class="router-link" :to="{ name: 'roules' }"
          >Branschregler</router-link
        >

        <router-link class="router-link" :to="{ name: 'create' }"
          >Räkna</router-link
        >
        <router-link class="router-link" :to="{ name: 'posts' }"
          >Min sida</router-link
        >
      </nav>

      <button v-if="user" class="log-btn" @click="$store.dispatch('logout')">
        Logga ut
      </button>
      <router-link class="router-link-logout" v-else :to="{ name: 'login' }">
        Logga in
      </router-link>

      <button class="log-btn" @click="back">Framåt</button>
      <button class="log-btn" @click="forward">Tillbaka</button>
    </div>
    <router-view />
  </div>
</template>

<!--Importing firebase components-->
<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    //Fetching user data
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
 // toggle logout button
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  name: "HeaderView",
  //Go back and forward in history
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
  // v-if logedin user
};
</script>

<style scoped>
.logedinuser {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #1ea334;
}
h1 {
  color: white;
}
.router-link-logout {
  color: white;
  background-color: #fcfcfc;
  padding: 10px;
   border-radius: 5px;
   text-decoration: none;
  color: black;
   text-align: center;
}
.router-link-logout:hover {
  background-color: #4caf50;
  color: white;
}


button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ebf1ef;
  color: rgb(12, 12, 12);
  font-weight: bold;
  cursor: pointer;
}
.header {
  background-color: #202122;
  opacity: 0.8;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: paralucent, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.router-link:hover {
  background-color: rgb(217, 250, 215);
  color: rgb(2, 2, 2);
}
.log-btn:hover {
  background-color: rgb(21, 168, 53);
  color: rgb(255, 255, 255);
}
nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #f3f5f7;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: rgb(14, 13, 13);
  background: rgb(217, 250, 215);
}
</style>
