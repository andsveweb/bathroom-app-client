<template>
  <div>
    <div class="calculate-container">
      <h1 class="information-calculation">Information om din uträkning</h1>
      <div class="calculate-information">
        <div class="information-text">
          <div class="name-info-created">
            <p>Namn: {{ post.title }}</p>
            <p>Information: {{ post.body }}</p>
            <!--show created_date as prop with format yyyy/mm/dd-->
            <p>Skapad: {{ formatDate(post.created_date) }}</p>
          </div>
        </div>
        <div class="router-link-class">
          <router-link class="router-link" :to="{ name: 'posts' }"
            >Tllbaka</router-link
          >
        </div>
      </div>

      <form id="addPost" method="get" @submit.prevent="addPost">
        <!--calculation for area of wall-->
        <div class="form-calculate">
          <p>Kvadratmeteryta vägg</p>
          <label>Höjd i meter:</label>
          <input
            type="number"
            step="any"
            placeholder="Längd i meterr"
            v-model="post.wallheight"
          />
          <label>Längd i meter</label>
          <input
            type="number"
            step="any"
            placeholder="Höjd i meter"
            v-model="post.wallwidth"
          />
        </div>

        <!--calculate for area floor -->
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

        <!--size for tile wall-->
        <div class="form-calculate">
          <p>Storlek på kakel vägg</p>
          <label>Bredden kakalplatta vägg i cm</label>

          <input
            type="number"
            step="any"
            placeholder="Ange bredd på kakelplatta väg"
            v-model="post.tilesizewallwidth"
          />
          <label>Längden kakel vägg i cm</label>
          <input
            type="number"
            step="any"
            placeholder="Ange längden på kakelplatta väg"
            v-model="post.tilesizewalllength"
          />
          <p>Kakel vägg {{ formatNumber(tilesizewall) }} kvm</p>
        </div>

        <!--size for tile floor-->
        <div class="form-calculate">
          <p>Storlek på kakel golv</p>
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
    </div>
    <!--Results for calculating area and tiles -->
    <div class="result">
      <div class="form-calculate">
        <p>Resultat</p>
        <p class="result-text"></p>
        <label>Väggarea</label>
        <h2>{{ formatNumber(resultareawall) }}</h2>
        <label>Golvarea</label>
        <h2>{{ formatNumber(resultareafloor) }}</h2>
        <label>Golv plus väggarea</label>
        <h2>{{ formatNumber(resultareatotal) }} kvm</h2>
        <label>Antal plattor vägg</label>
        <h2>
          {{ formatNumberTo(resulttilewallquantity) || "0" }} st kakelplattor
        </h2>
        <label>Antal plattor golv</label>
        <h2>{{ formatNumberTo(resulttilefloorquantity) }} st kakelplattor</h2>
      </div>
    <!--calculating total price with material-->
      <div class="form-calculate">
        <p>Material och pris</p>
        <label>Tätskikt</label>
        <h2>
          {{ formatNumber(tecmembrane) }} Kvm
          {{ formatNumber(tecmembraneprice) }} :-
        </h2>
        <label>Fästmassa</label>
        <h2>
          {{ formatNumber(rexfixkg) }} Kg {{ formatNumber(rexfixprice) }}:-
        </h2>
        <label>Fogmassa</label>
        <h2>
          {{ formatNumber(sealantkg) }} Kg {{ formatNumber(sealantprice) }}:-
        </h2>
        <label>Total kostnad mtrl</label>
        <h2 class="totalpriceall">{{ formatNumber(totalpriceall) }} Kronor</h2> 
      </div>
    </div>
  </div>
</template>

<script>
// import moment, handling date and time
import moment from "moment"; 
export default {
  data() {
    return {
      post: {},
    };
  },

  methods: {
    formatNumber(num) {
      return parseFloat(num).toFixed(2); // 2 decimaler
    },
    formatNumberTo(num) {
      return parseFloat(num).toFixed(); // no decimal
    },
    //format date
    formatDate(date) { 
      return (
        moment(date).format("YYYY-MM-DD") +
        " kl " +
        moment(date).format("HH:mm") 
      );
    },
  },

  computed: {
    resultareawall() {
      return this.post.wallheight * this.post.wallwidth; //calculation for area of wall
    },
    resultareafloor() {
      return this.post.floorlength * this.post.floorwidth; //calculation for area of floor
    },
    resultareatotal() {
      return this.resultareawall + this.resultareafloor; //calculation for area of total
    },
    tilesizewall() {
      return (
        (this.post.tilesizewallwidth * this.post.tilesizewalllength) / 10000 //calculation for tilesize of tile wall
      );
    },
    tilesizefloor() {
      return (
        (this.post.tilesizefloorwidth * this.post.tilesizefloorlength) / 10000 //calculation for tilesize of tile floor
      );
    },
    resulttilewallquantity() {
      return this.resultareawall / this.tilesizewall; //calculation for quantity of tile wall
    },
    resulttilefloorquantity() {
      return this.resultareafloor / this.tilesizefloor; //calculation for quantity of tile floor
    },
    tecmembrane() {
      return this.post.wallheight * 4 + this.resultareafloor; //calculation for tecmembrane
    },
    tecmembraneprice() {
      return this.tecmembrane * 191; //calculation for tecmembrane price
    },
    rexfixkg() {
      return this.resultareatotal * 3; //calculation for rexfixkg
    },
    rexfixprice() {
      return this.rexfixkg * 17; //calculation for rexfixprice
    },
    sealantkg() {
      return this.resultareatotal * 2; //calculation for sealantkg
    },
    sealantprice() {
      return this.sealantkg * 24; //calculation for sealantprice
    },
    totalpriceall() {
      return this.tecmembraneprice + this.rexfixprice + this.sealantprice; //calculation for totalpriceall
    },
  },
  //get data from database
  mounted() {
    let uri = "//localhost:4000/posts/" + this.$route.params.id;
    this.axios.get(uri).then((response) => {
      this.post = response.data;
    });
  },
};
</script>

<style scoped>
.router-link-class {
  text-align: center;
  background-color: #4caf50;
  background-color: #4caf50;
  align-items: center;
  margin: 20px auto;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  max-width: 100px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.router-link {
  text-decoration: none;
  color: white;
}

.router-link-class:hover {
  background-color: rgb(79, 231, 86);
}

.name-info-created p {
  text-align: left;
}

title-calculation {
  text-align: left;
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

h1,
h2,
h3 {
  color: black;
  font-weight: 200;
  padding: 5px;
}

h2 {
  text-align: left;
}

.information-calculation {
  text-align: center;
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
  border-radius: 5px;
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
