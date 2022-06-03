<template>
  <div>
    <h1>404</h1> 
    <h2>Denna sida finns inte.</h2>
    <div class="home-button">
      <router-link to="/">
        <button>Hem</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

button {
  background: #a53232;
  color: #f3f5f7;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
}

.home-button {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
