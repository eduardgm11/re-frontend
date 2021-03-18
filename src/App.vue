<template>
  <v-app>
    <v-app-bar app dark>
      <div style="padding-right: 3%" class="d-flex align-center mr-2">
        SISTEMA DE INFORMACIÓN
      </div>

      <v-btn to="/tarjeta" text>
        Tarjetas
      </v-btn>

      <!--
      <v-btn to="/add" text>
        Añadir Tarjeta
      </v-btn>
      -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
