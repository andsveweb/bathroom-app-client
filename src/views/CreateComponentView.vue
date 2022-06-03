<template>
  <div>
    <div class="calculate-container">
      <h1>Badrumskalkylatorn</h1>
      <div class="calculate-information">
        <p class="information-text">
          Här kan du mata in badrumsmått och kakelstorlek för att få ut hur
          många kvadratmeter kakel du behöver köpa. Med dessa innmatade mått får
          du även ut ett ungefärligt pris på vad tätskikt samt plattsättning
          kommer kosta
        </p>
        <p class="information-text">
          Observera detta är endast en uträkning för tätskikt och material för
          kakling
        </p>
      </div>
     
      <form id="addPost" method="get" @submit.prevent="addPost">
        <div class="form-calculate">
          <p>Din uträkning</p>
          <label>Titel</label>
          <input type="text" placeholder="Namn" v-model="post.title" />
          <label>Information om din uträkning</label>
          <textarea placeholder="Information" v-model="post.body"> </textarea>
        </div>
        
        <div class="form-calculate">
          <p>Kvadratmeteryta vägg</p>

          <label>Höjd i meter:</label>
          <input
            type="number"
            step="any"
            placeholder="Höjd i meter"
            v-model="post.wallheight"
          />
          <label>Längd i meter</label>
          <input
            type="number"
            step="any"
            placeholder="Längd i meter"
            v-model="post.wallwidth"
          />
        </div>

        <!--Kvadratmeteryta golv -->
        <div class="form-calculate">
          <p>Kvadratmeteryta golv</p>
          <label>Bredd i meterr</label>
          <input
            type="number"
            step="any"
            placeholder="Bredd i meter"
            v-model="post.floorwidth"
          />
          <label>Längd i meter</label>
          <input
            type="number"
            step="any"
            placeholder="Längd i meterr"
            v-model="post.floorlength"
          />
        </div>

        <!--storlek kakelplatta vägg -->
        <div class="form-calculate">
          <p>Storlek på kakelplatta vägg</p>
          <label>Bredden kakalplatta vägg i cm</label>

          <input
            type="number"
            step="any"
            placeholder="Ange bredd på kakelplatta väg"
            v-model="post.tilesizewallwidth"
          />
          <label>Längden kakalplatta vägg i cm</label>
          <input
            type="number"
            step="any"
            placeholder="Ange längden på kakelplatta väg"
            v-model="post.tilesizewalllength"
          />
          <p>Kakel vägg {{ formatNumber(tilesizewall) }} kvm</p>
        </div>

        <!--storlek kakelplatta golv -->
        <div class="form-calculate">
          <p>Storlek på kakelplatta golv</p>
          <label>Bredden kakalplatta golv i cm</label>
          <input
            type="number"
            step="any"
            placeholder="Ange bredd på kakelplatta golv"
            v-model="post.tilesizefloorwidth"
          />
          <label>Längden kakalplatta golv i cm</label>
          <input
            type="number"
            step="any"
            placeholder="Ange längden på kakelplatta golv"
            v-model="post.tilesizefloorlength"
          />
          <p>Kakel golv {{ formatNumber(tilesizefloor) }} kvm</p>
        </div>
      </form>
      <input type="submit" form="addPost" class="button-save-result" />
    </div>
    <!--Results -->
    <div class="result">
      <div class="form-calculate">
        <p>Resultat</p>
        <p class="result-text"></p>
        <label>Väggarea</label>
        <h2>{{ formatNumber(resultareawall) || "0" }}</h2>
        <label>Golvarea</label>
        <h2>{{ formatNumber(resultareafloor) || "0" }}</h2>
        <label>Golv plus väggarea</label>
        <h2>{{ formatNumber(resultareatotal) || "0" }} kvm</h2>
        <label>Antal plattor vägg</label>
        <h2>
          {{ formatNumberTo(resulttilewallquantity) || "0" }} st kakelplattor
        </h2>
        <label>Antal plattor golv</label>
        <h2>{{ formatNumberTo(resulttilefloorquantity) || "0" }} st kakelplattor</h2> 
      </div>
      <div class="form-calculate">
        <p>Material och pris</p>
        <label>Tätskikt</label>
        <h2>
          {{ formatNumber(tecmembrane) || "0" }} Kvm
          {{ formatNumberTo(tecmembraneprice) || "0" }} :-
        </h2>
        <label>Fästmassa</label>
        <h2>
          {{ formatNumber(rexfixkg) || "0" }} Kg {{ formatNumberTo(rexfixprice) || "0" }}:-
        </h2>
        <label>Fogmassa</label>
        <h2>
          {{ formatNumber(sealantkg) || "0" }} Kg {{ formatNumberTo(sealantprice) || "0" }}:-
        </h2>
        <label>Total kostnad mtrl</label>
        <h2 class="totalpriceall">{{ formatNumberTo(totalpriceall) || "0"}} Kronor</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  // Functions for adding and removing posts
  methods: {
    addPost() {
      let uri = "//localhost:4000/posts/add";
      this.axios.post(uri, this.post).then(() => { 
        this.$router.push({ name: "posts" }); 
      });
    },
    
    formatNumberTo(num) { //take away NaN and formate number 
      if (isNaN(num)) {
        return null;
      } else {
        return parseFloat(num).toFixed();
      }
    },
    formatNumber(num) { //take away NaN and formate number to 2 decimals
      if (isNaN(num)) {
        return null;
      } else {
        return parseFloat(num).toFixed(2);
      }
    }
  },
  // Calculated values
  computed: {
    resultareawall() {
      return this.post.wallheight * this.post.wallwidth; 
    },
    resultareafloor() {
      return this.post.floorlength * this.post.floorwidth;
    },
    resultareatotal() {
      return this.resultareawall + this.resultareafloor;
    },
    tilesizewall() {
      return (
        (this.post.tilesizewallwidth * this.post.tilesizewalllength) / 10000
      );
    },
    tilesizefloor() {
      return (
        (this.post.tilesizefloorwidth * this.post.tilesizefloorlength) / 10000
      );
    },
    resulttilewallquantity() {
      return this.resultareawall / this.tilesizewall;
    },
    resulttilefloorquantity() {
      return this.resultareafloor / this.tilesizefloor;
    },
    tecmembrane() {
      return this.post.wallheight * 4 + this.resultareafloor;
    },
    tecmembraneprice() {
      return this.tecmembrane * 191;
    },
    rexfixkg() {
      return this.resultareatotal * 3;
    },
    rexfixprice() {
      return this.rexfixkg * 17;
    },
    sealantkg() {
      return this.resultareatotal * 2;
    },
    sealantprice() {
      return this.sealantkg * 24;
    },
    totalpriceall() {
      return this.tecmembraneprice + this.rexfixprice + this.sealantprice;
    },
  },
//get post from database
  mounted() {
    let uri = "//localhost:4000/posts/" + this.$route.params.id; 
    this.axios.get(uri).then((response) => {
      this.post = response.data;
    });
  },
};
</script>

<style scoped>
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
h1,
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
  max-width: 700px;
  background-color: white;
  margin: auto;
  padding: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.information-text {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.calculate-container {
  margin: 20px;
  max-width: 1700px;
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
