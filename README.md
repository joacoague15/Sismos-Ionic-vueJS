# Sismos-Ionic-vueJS

Consumo de un EndPoint sobre los últimos 15 sismos. Renderiza un mapa y un fondo de color, dependiendo la magnitud del sismo.

SOBRE IONIC:
* Version: 6.12.1
* Todo TypeScript fue borrado
* Los únicos componente usado fueron Ion-content, Ion-list, Ion-item

SOBRE VueJS:
* Version: 4.5.8
* Se usa AXIOS para las requests

CÓMO COMENZAR:
* Instalacon de VueJS: https://cli.vuejs.org/guide/creating-a-project.html#vue-create
* Instalar dependencias especificadas en package.JSON
* API usada: https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos (recomiendo crear un usuario)

SOBRE ARCHIVOS:
* Home.vue es el mismo archivo default de Vue, pero distinto contenido
* Sismo.vue es un componente que renderiza toda la informacion, ubicar dentro de ./components
* index.html y index.JS son el mismo archivo que el default, pero con comentarios a tener en cuenta
* main.JS es muy importante para que funcionan los mapas de google
