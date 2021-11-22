<template>
  <v-container>
    <v-row justify="center" class="mb-5">
      <h1>Estrategias</h1>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels inset>
        <v-expansion-panel v-for="(item, i) in items" :key="i" :v-on="on">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content v-on="on">
            {{ item.message }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Comunicación Constante",
          message:
            "Mantener comunicación constante con el cliente, de esta manera de minimizan los errores y se verifica que el producto se adapte a la perfección con las necesidades del cliente.",
        },
        {
          title: "Metodología Scrum",
          message:
            "Organizar un equipo siguiendo la metodología Scrum, siguiendo los roles que este ofrece, Product Owner (es el encargado de optimizar y maximizar el valor del producto),Scrum Master (gestionar el proceso Scrum y ayudar a eliminar impedimentos que puedan afectar a la entrega del producto),Developers (se encargan de desarrollar el producto, auto-organizándose y auto-gestionándose para conseguir entregar un incremento de software al final del ciclo de desarrollo).",
        },
        {
          title: "Tecnologías Avanzadas",
          message:
            "Usar las tecnologías mas eficientes, novedosas y profesionales que se encuentren disponibles en el mercado, y siguiendo los estándares mas altos de desarrollo. De esta manera no solo el cliente estará satisfecho con su producto final, sino también nos posicionaremos como una empresa de alto prestigio y con gran capacidad de desarrollo.",
        },
        {
          title: "Cliente Piloto",
          message:
            "Se seguirá la estrategia de un cliente piloto, este recibirá un precio menor al normal, sin embargo, recibirá todos los beneficios que podamos ofrecer, de esta manera nos implementaremos al mercado con una empresa que inicia con costos bajos pero con calidad impecable, así se ira expandiendo nuestro rango de clientes y también ira incrementado progresivamente el costo de nuestros servicios según nuestra expansión.",
        },
        {
          title: "Ambiente Laboral",
          message:
            "Generar un ambiente laboral sano y competitivo, de esta manera los desarrolladores se sentirán cómodos con sus compañeros de trabajo y se motivaran entre si para aprender entre ellos mismos y entregar un producto final de mayor calidad.",
        },
      ],
    };
  },
};
</script>
