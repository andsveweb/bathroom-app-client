<template>
  <div>
    
    <HeaderView />
    <FooterView />
  </div>
</template>

<script>
//  import the HeaderView and footerView from components folder

import HeaderView from "./components/HeaderView.vue"; 
import FooterView from "./components/FooterView.vue";

export default {
  components: { // use the HeaderView and footerView component
    HeaderView,  
    FooterView,
  },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: url(https://unsplash.com/photos/tqu0IOMaiU8/download?force=true);
  background-size: cover;
  font-family: paralucent-text, sans-serif;
  position: relative;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button {
  border: none;
}
</style>
