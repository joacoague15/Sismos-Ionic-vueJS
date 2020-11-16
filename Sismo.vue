<template>

  <ion-content
    :scroll-events="true"
    @ionScrollStart="logScrollStart()"
    @ionScroll="logScrolling($event)"
    @ionScrollEnd="logScrollEnd()">
    <ion-list v-for="sismo in ultimos_sismos" :key="sismo.id">
        <!-- Sismos leves -->
        <ion-item v-if="sismo.magnitude < 4">
          <li class="sismo-verde">State: {{sismo.state}}</li>
          <li class="sismo-verde">Magnitud: {{sismo.magnitude}}</li>
          <li class="sismo-verde">Horario UTC: {{sismo.utc_time}}</li>
          <li class="sismo-verde">Horario Chileno: {{sismo.chilean_time}}</li>
          <li class="sismo-verde">Escala: {{sismo.scale}}</li>
          <li class="sismo-verde">Latitud: {{sismo.latitude}}</li>
          <li class="sismo-verde">Longitud: {{sismo.longitude}}</li>
          <li class="sismo-verde">Profundidad: {{sismo.depth}}</li>
          <li class="sismo-verde">ID: {{sismo.id}}</li>
          <li class="sismo-verde">URL: {{sismo.url}}</li>
          <li class="sismo-verde">Source: {{sismo.source}}</li>
          </ion-item>

        <!-- Sismos Intermedios -->
        <ion-item v-else-if="sismo.magnitude >= 4 && sismo.magnitude < 6">
          <li class="sismo-amarillo">State: {{sismo.state}}</li>
          <li class="sismo-amarillo">Magnitud: {{sismo.magnitude}}</li>
          <li class="sismo-amarillo">Horario UTC: {{sismo.utc_time}}</li>
          <li class="sismo-amarillo">Horario Chileno: {{sismo.chilean_time}}</li>
          <li class="sismo-amarillo">Escala: {{sismo.scale}}</li>
          <li class="sismo-amarillo">Latitud: {{sismo.latitude}}</li>
          <li class="sismo-amarillo">Longitud: {{sismo.longitude}}</li>
          <li class="sismo-amarillo">Profundidad: {{sismo.depth}}</li>
          <li class="sismo-amarillo">ID: {{sismo.id}}</li>
          <li class="sismo-amarillo">URL: {{sismo.url}}</li>
          <li class="sismo-amarillo">Source: {{sismo.source}}</li>
        </ion-item>

        <!-- Sismos Peligrosos -->
        <ion-item v-else-if="sismo.magnitude > 6">
          <li class="sismo-rojo">State: {{sismo.state}}</li>
          <li class="sismo-rojo">Magnitud: {{sismo.magnitude}}</li>
          <li class="sismo-rojo">Horario UTC: {{sismo.utc_time}}</li>
          <li class="sismo-rojo">Horario Chileno: {{sismo.chilean_time}}</li>
          <li class="sismo-rojo">Escala: {{sismo.scale}}</li>
          <li class="sismo-rojo">Latitud: {{sismo.latitude}}</li>
          <li class="sismo-rojo">Longitud: {{sismo.longitude}}</li>
          <li class="sismo-rojo">Profundidad: {{sismo.depth}}</li>
          <li class="sismo-rojo">ID: {{sismo.id}}</li>
          <li class="sismo-rojo">URL: {{sismo.url}}</li>
          <li class="sismo-rojo">Source: {{sismo.source}}</li>
        </ion-item>

        <!-- GOOGLE MAPS -->
        <GmapMap class="map"
          :center="{lat:sismo.latitude, lng:sismo.longitude}"
          :zoom="5"
          map-type-id="terrain"
          style="width: 80%; height: 400px"
        >
        <!--
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        /> -->
      </GmapMap>

    </ion-list>
  </ion-content>

</template>

<!-- JAVASCRIPT -->
<script>
  import { IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent }
  });
</script>


<script>
import axios from 'axios'


export default {
    data() {
      return {
        ultimos_sismos: null,

        //id: 9
      }
    },
    //Una vez que el componente se monte
    mounted() {
      this.getInformation();
    },
    methods: {
      getInformation() {
        axios
            //Si el usuario es Joaquin:
             .get('https://chilealerta.com/api/query/?user=joaquin&select=ultimos_sismos')
             // Si se accede con un usuario DEMO:
             //.get('https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos')
                .then(response => {
                  this.ultimos_sismos = response.data.ultimos_sismos
                })
                .catch(e => console.log(e))
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    color: black;
    list-style: none;
    user-select: none;
    font-size: 24px;
    scroll-behavior: auto;
    font-family: sans-serif, arial;
    background-color: #FAF0E6;
  }

  li {
    text-align: center;
    padding-bottom: 10px;
    transition: all 0.5s ease;
  }

  li:hover {
    background-color: #9B870C;
    transform: scale(1.2);
  }

  .sismo-verde {
    background-color: #22af4b;
  }

  .sismo-amarillo {
    background-color: #fee851;
  }

  .sismo-rojo {
    background-color: #ff6961 ;
  }

  /* Estilo de Mapa */
  .map {
      margin: 20px auto;
      position: relative;
      width: auto;
  }

  div {
    overflow-y: auto;
  }

</style>
