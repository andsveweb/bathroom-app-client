<template>
  <div class="home-container">
    <h1>Byggregler för badrum</h1>

    <div>
      <p class="information-steps">
        Välkommen till sidan som hjälper dig med allt som har med
        badrumsrenovering att göra.
      </p>

      <p>
        Att veta vad kostnaden blir är relevant för de flesta bostadsägare. På
        denna sida kan du läsa om de regler som är relevanta och vad som gäller
        för dig som kund. Du kan göra en enklare uträkning för att se hur mycket
        kakel det går åt samt en uträkning för arbetspris som gäller från och
        med tätskikt till färdigt kakel. Förarbetet innan tätskikt är något som
        måste göras från plats beroende på olika underlag. <br />
        <br />
        Men låt oss då gå igenom ett exempel på hur en renovering av ett badrum
        kan gå till steg för steg me de olika momenten som gäller.
      </p>
    </div>

    <div class="steps">
      <p class="press-click">Klicka för att visa de olika stegen</p>
      <div>
        <button @click="showStep1 = !showStep1">
          Steg 1 &nbsp;
          <p class="hower">Förarbete och offert</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep1" v-if="showStep1">
            <p class="step-information-text"></p>
            <div id="app">
              <img class="images" src="../assets/images/offert.jpg" />
            </div>
            <p>
              Hantverkaren mäter upp aktuellt badrum och kollar underlaget på
              väggar samt golv. I de flesta fall så bör väggarnas beklädnad
              rivas fram till regelstommen för bästa resultat. Detta är även en
              fördel för att kontrollera eventuella tidigare fuktskador. <br />
              <br />Är det en vägg av betong eller liknande så ska väggen göras
              ren från tapeter eller liknande beklädnad. Är golvet gjort av
              betong eller trä? Vid betonggolv så ska gammalt kakel och tätskikt
              tas bort. Är det plastmatta ska denna tas bort också. Golvets
              stabilitet undersöks. Eventuellt måste golvet förstärkas om det är
              trägolv. Detta kan göras med flytspackel innan tätskiktet, vilket
              görs i de flesta fall för att få avrinning mot avloppet enligt
              bestämelser. När besöket och uppmätning av badrummet är gjort så
              vet hantverkaren vad som behöver göras och kan räkna på detta.
              <br />
              <br />
              Överlämning av offert sker och denna gäller enligt vad som
              skrivits på den. Vid ok så kan arbetet starta
            </p>
          </div>
        </transition>
      </div>
      <div>
        <button @click="showStep2 = !showStep2">
          Steg 2 &nbsp;
          <p class="hower">Rivning och uppbyggnad</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep2" v-if="showStep2">
            <p class="step-information-text"></p>

            <div id="app">
              <img class="images" src="../assets/images/image1.jpg" />
            </div>
            <p>
              I vissa fall väljer kunden själv att riva en stor del av själva
              badrummet. I detta fall så minskar ju kostnaden för kunde
              avsevärt.
              <br />
              <br />
              Men annars så startar arbetet med att en rörläggare kommer dit och
              stänger av vattnet och kopplar bort toalet, handfat osv. Sen rivs
              gamla väggar in till reglerna om det är en regelvägg. Är det
              betongvägg så skall all ytbeklädnad skrapas och rivas bort. Detta
              för att minska risken för mögelpåväx vid eventuellt läkage. <br />
              <br />
              Innan skivor sätts upp på väggarna kan eventuellt ny el dras i
              väggarna om det är aktuellt. <br />
              <br />

              Nästa steg är att sätta plywoodskivor på väggarna och därefter
              gips samt. Viktigt är att kontrollera väggarnas styvhet så att de
              inte sviktar. I vissa fall kan man behöva flera regler eller
              skivor för att stabilisera väggen. <br />
              <br />
              I vissa fall kan det vara aktuellt att fixa bättre fall i badrum.
              Det finns vissa krav på lutniing för att få badrummet godkänt.
              Detta görs i de flesta fall med flytspackling. Flytspacklet hälls
              ut från kanterna på badrummet in mot bunnet. På detta sätt så
              rinner flytspacklet och bildar ett fall. Vill man ha indraget
              golvvärme så läggs den innan flytspacklingen.<br />
              <br />

              Golvbrunnen ska bytas om den är äldre än från 1990 en ligt lag.
              <br />
              <br />
              <br />
            </p>
          </div>
        </transition>
      </div>
      <div>
        <button @click="showStep3 = !showStep3">
          Steg 3 &nbsp;
          <p class="hower">Tätning av badrum</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep3" v-if="showStep3">
            <p class="step-information-text"></p>
            <div id="app">
              <img class="images" src="../assets/images/folie.jpg" />
            </div>
            <p>
              Det finns många olika tätskiktssystem, vissa bättre än andra.
              Byggkeramikrådet har en lista över godkända tillverkare. Ett
              system som är väldigt populärt är weber saint gobain. Weber`s
              system heter Tec. Tec innefattar primer som rollas på gispskivor
              och golv. Detta för att övriga utanpåliggande tätskikt sen ska
              fästa. Därefter sätts tätskikt av folietyp samt rollat system
              beroende på underlag. I våtzon 1 skall tätskikt av folietyp
              användas. Våtzone 1 innefattar hela golvet samt väggarna vid
              duschen samt en meter på varje sida utanför duschplatsen. Överigt
              är våtzon 2 som rollas på och är som en gummimassa.
              <br />
              <br />
            </p>
          </div>
        </transition>
      </div>
      <div>
        <button @click="showStep4 = !showStep4">
          Steg 4 &nbsp;
          <p class="hower">Kakling</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep4" v-if="showStep4">
            <p class="step-information-text"></p>
            <div id="app">
              <img class="images" src="../assets/images/tile.jpg" />
            </div>
            <p>
              När allt underarbete är färdigställt är det dags för kakling.
              Tiden för detta varierar väldigt mycket pga av dels storlek på
              badrummet, men också storleken på kaklet i fråga. Mindre plattor
              tar för det mesta längre tid att sätta. Efter kaklingen är det
              dags att foga. Detta går för det mesta väldigt fort, men också i
              detta fall så går det fortare att foga störra plattor än mindre
              pga mindre antal fogar. Silikon av hörn-vägg vinklar görs efter
              detta. Ibland kan man använda sig av fogmassa i hörnen istället
              för silikon. Men det är då viktigt att väggarna består av material
              som inte rör sig så som betong. Vid träväggar är det bäst att
              använda sig av silikon.
            </p>
          </div>
        </transition>
      </div>
      <div>
        <button @click="showStep5 = !showStep5">
          Steg 5 &nbsp;
          <p class="hower">Montering av inventarier</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep5" v-if="showStep5">
            <p class="step-information-text"></p>
            <div id="app">
              <img class="images" src="../assets/images/IMG_0927.jpg" />
            </div>
            <p>
              Inventarier och inredning. Efter kaklingen är det dags att montera
              inredningen. Dusch, badkar, handfat, toalett, handuksvärmare osv.
              efter detta kan rörläggaren koppla in vattnet till respektive.
              Elektrikern kan koppla in elen där det behövs.
            </p>
          </div>
        </transition>
      </div>
      <div>
        <button @click="showStep6 = !showStep6">
          Steg 6 &nbsp;
          <p class="hower">Slutbesiktning och fakturering</p>
        </button>
        <transition name="slow-transition">
          <div class="showStep6" v-if="showStep6">
            <p class="step-information-text"></p>
            <div id="app">
              <img
                class="images"
                src="../assets/images/kvalitetsdokument_2022.jpg"
              />
            </div>
            <p>
              När badrummet slutligen är klart kan ett intyg skrivas av
              hantverkaren. På detta intyg säkerställer han att badrummet är
              korrekt gjort och beskriver vilket typ av tätskiktssystem som
              användts på golv och väggar. samt samt om golvbrunnen är bytt.
              <br />
              <br />
              Garantin gäller i tio år från färdigt badrum såvida allt är
              korrekt. Detta intyget skickas sen till beställaren samt
              byggkeramikrådet för lagring. Om det nu blir något läkage eller
              annat fel på badrummet så kontrolleras detta av
              försökringsbolaget. Kontrollen görs för att se om hantverkaren har
              gjort ett dåligt arbete eller vad som orsakade läkaget. Det kan
              bli hantverkaren som får stå för omarbetet om han gjort fel. I
              annat fall går det på hans försäkring.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => {
    return {
      showStep1: false,
      showStep2: false,
      showStep3: false,
      showStep4: false,
      showStep5: false,
      showStep6: false,
    };
  },

  components: {},
};
</script>

<style scoped>
.slow-transition-enter-from {
  opacity: 0;
}

.slow-transition-enter-active {
  transition: all 1s ease;
}

.slow-transition-leave-to {
  opacity: 0;
}
.slow-transition-leave-active {
  transition: all 0.2s ease;
}

h1 {
  text-align: center;
}

p {
  margin: 20px;
  line-height: 1.5;
  font-size: 17px;
  text-align: left;
}

.press-click {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.information-steps {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.home-container {
  font-family: paralucent-text, sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  padding: 25px;
  margin: 0 auto;
  max-width: 800px;
  background-color: #e7e7e7;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  margin-top: 20px;
}
.steps {
  display: flex;
  flex-direction: column;
  margin-top: 2px;
}

button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  text-align: left;
  background-color: #609e75;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(38, 39, 39);
  color: #fff;
}

.hower:hover {
  background-color: rgb(38, 39, 39);
  color: #fff;
}

.hower {
  font-size: 1.5rem;
}

.images {
  float: right;
  width: 150px;
  height: 150px;
  margin: 10px;
}
</style>
