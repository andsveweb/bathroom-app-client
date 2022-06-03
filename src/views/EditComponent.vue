<template>
 
  <div class="calculate-container">
    
    <div class="calculate-information">
      <h1 class="information-text">
       Ändra i din uträkning
      </h1>
    </div>
    <form id="addPost" method="get" @submit.prevent="updatePost">

    <div class="form-calculate">
        <p>Din uträkning</p>

        <label>Namn</label>
        <input
          type="text"
          placeholder="Namn"
          v-model="post.title"
        />
        <label>Information om din uträkning</label>
      <textarea placeholder="Information" v-model="post.body" >  </textarea>
      </div>
      <!--Area wall -->
      <div class="form-calculate">
        <p>Kvadratmeteryta vägg</p>

        <label>Höjd i meter:</label>
        <input
          type="number"  step="any"
          placeholder="Längd i meterr"
          v-model="post.wallheight"
        />
        <label>Längd i meter</label>
        <input type="number" step="any" placeholder="Höjd i meter" v-model="post.wallwidth" />
      </div>

      <!--area floor -->
      <div class="form-calculate">
        <p>Kvadratmeteryta golv</p>
        <label>Bredd i meter</label>
        <input type="number" step="any" placeholder="Bredd i meter" v-model="post.floorwidth" />
        <label>Längd i meter</label>
        <input
          type="number" step="any"
          placeholder="Längd i meterr"
          v-model="post.floorlength"
        />
      </div>

      <!--tile size wall -->
      <div class="form-calculate">
        <p>Storlek på kakel vägg</p>
        <label>Bredden kakalplatta vägg i cm</label>

        <input
          type="number" step="any"
          placeholder="Ange bredd på kakelplatta väg"
          v-model="post.tilesizewallwidth"
        />
        <label>Längden kakalplatta vägg i cm</label>
        <input
          type="number" step="any"
          placeholder="Ange längden på kakelplatta väg"
          v-model="post.tilesizewalllength"
        />
        
      </div>

      <!--tilesize floor -->
      <div class="form-calculate">
        <p>Storlek på kakel golv</p>
        <label>Bredden kakalplatta golv i cm</label>
        <input
          type="number" step="any"
          placeholder="Ange bredd på kakelplatta golv"
          v-model="post.tilesizefloorwidth"
        />
        <label>Längden kakalplatta golv i cm</label>
        <input
          type="number" step="any"
          placeholder="Ange längden på kakelplatta golv"
          v-model="post.tilesizefloorlength"
        />
       
      </div>
      
    </form>
    <input type="submit" form="addPost" class="button-save-result" />
  </div>
</template>

<script>
  export default {

   data() {
    return {
     post: {}
    }
   },
   // get the id from the url and get the post
   created() {
    let uri = `//localhost:4000/posts/edit/${this.$route.params.id}`; 
    this.axios.get(uri).then((response) => {
      this.post = response.data;
    });
   },
   // get the id from the url and update the post
   methods: {
    updatePost() {
     let uri = `//localhost:4000/posts/update/${this.$route.params.id}`; 
     this.axios.post(uri, this.post).then(() => { 
      this.$router.push({name: 'posts'});
     });
    }
   }
  }
</script>

<style scoped>
  calculate-container {
    display: flex;
    height: 100vh;
    max-width: 500px;
    background-color: #f5f5f5;
  }

h1 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  cursor: pointer;
  height: 40px;
}

form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

textarea {
  width: 100%;
  max-width: 275px;
  height: 100px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  resize: none;
}

p {
  color: black;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  font-size: 1.5rem;
}

h2,
h3 {
  color: black;
  font-weight: 200;
  padding: 5px;
}

h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

.totalpriceall {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
}

.calculate-information {
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

.information-text {
  font-size: 25px;
  font-weight: bold;
}

.calculate-container {
  margin: 20px;
  max-width: 900px;
  margin: auto;
}

form {
  display: flex;
  flex-wrap: wrap;
}

.form-calculate {
  width: 300px;
  flex-direction: row;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}

label {
  color: rgb(46, 45, 45);
  display: inline-block;
  margin: 15px 0 5px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #aaa;
  color: #555;
  font-size: 1.2em;
}

.button-save-result {
  background-color: #4caf50;
  max-width: 320px;
  margin: auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.result {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.result-text {
  font-size: 14px;
  font-weight: bold;
}

.result-finished {
  font-size: 20px;
  text-align: left;
}
</style>