<template>

<ion-content>
    <!-- La lista se genera, dependiendo la magnitud, con un if -->
    <ul v-for="sismo in ultimos_sismos" :key="sismo.id">
      <!-- Sismos leves -->
      <div v-if="sismo.magnitude < 4">
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
        </div>

      <!-- Sismos Intermedios -->
      <div v-else-if="sismo.magnitude >= 4 && sismo.magnitude < 6">
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
      </div>

      <!-- Sismos Peligrosos -->
      <div v-else-if="sismo.magnitude > 6">
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
      </div>

    </ul>

</ion-content>

</template>

<script>
import axios from 'axios'
//import { defineComponent } from 'vue';

/*export default defineComponent({
  name: 'Home',
  components: {

  }
});
*/

export default {
    data() {
      return {
        ultimos_sismos: null
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
             //.get('https://chilealerta.com/api/query/?user=joaquin&select=ultimos_sismos')
             // Si se accede con un usuario DEMO:
             .get('https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos')
                .then(response => {
                  this.ultimos_sismos = response.data.ultimos_sismos
                })
                .catch(e => console.log(e))
      }
    }

}

</script>

<style scoped>
  * {
    color: black;
    list-style: none;
    font-size: 24px;
    scroll-behavior: auto;
    font-family: sans-serif, arial;
  }

  li {
    text-align: center;
    padding-bottom: 10px;
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
</style>
