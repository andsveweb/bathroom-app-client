<template>
  <div>
    <div>
      <navbarView />
    </div>
    <div class="information-boxes">
      <div class="information">
        <button @click="showText1 = !showText1">Länkar</button>
        <div class="textbox" v-if="showText1">
          <h2>Länkar</h2>
          <nav>
            <ul class="mainmenu">
              <li>
                <a href="https://www.gvk.se/branschregler/" target="_blank"
                  >GVK Branschregler för våtrum</a
                >
              </li>
              <li>
                <a href="https://www.bkr.se/" target="_blank"
                  >Byggkeramikrådet</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="information">
        <button @click="showText2 = !showText2">Information i bilder</button>
        <div class="textbox" v-if="showText2">
          <h2>Zoner i badrum</h2>
          <div>
            <img class="images" src="../assets/images/zones.jpg" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data: () => {
    return {
      showText1: true,
      showText2: true,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
}

.mainmenu {
  list-style-type: none;
  margin: 10px;
  padding: 20px;
  overflow: hidden;
  background-color: rgb(253, 250, 250);
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}

.mainmenu li {
  display: block;
}

.mainmenu a {
  display: block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: rgb(17, 17, 17);
  font-size: 20px;
}

.mainmenu a:hover {
  background-color: rgb(105, 161, 112);
  color: #fff;
}

.information-boxes {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
}

.information {
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  align-content: center;
  text-align: center;
}

button {
  background-color: #609e75;
  border: 0;
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.link-roule {
  font-family: paralucent-text, sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  background-color: #f5f5f5;
}

.images {
  float: right;
  max-width: 600px;
  height: 450px;
  margin: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
