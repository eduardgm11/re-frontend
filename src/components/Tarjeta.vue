<template>
  <div v-if="currentTarjeta" class="edit-form py-3">
    <p class="headline">Editar Tarjeta</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentTarjeta.id_tarjeta"
          :rules="[(v) => !!v || 'El nombre es requerido']"
          label="ID Tarjeta"

      ></v-text-field>

      <v-text-field
          v-model="currentTarjeta.gaveta"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Gaveta"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.disciplina"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Disciplina"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.tamano"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Tamaño"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.unidad"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Unidad"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.tipo_documento"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Tipo de documento"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.imagenes"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Imagenes"

      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.observacion"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Observación"

      ></v-text-field>

      <template>
        <v-file-input
            accept="file/pdf"
            label="PDF"
        ></v-file-input>
      </template>

      <v-btn color="error" small class="mr-2" @click="deleteTarjeta">
        Borrar Tarjeta
      </v-btn>

      <v-btn color="success" small @click="updateTarjeta">
        Actualizar Tarjeta
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Por favor haga click en un tarjeta</p>
  </div>
</template>

<script>
import TarjetaDataService from "../services/TarjetaDataService";

export default {
  name: "Tarjeta-details",
  data() {
    return {
      currentTarjeta: [],
    };
  },
  methods: {
    getTarjeta(id) {
      TarjetaDataService.get(id)
          .then((response) => {
            this.currentTarjeta = response.data;
            this.currentTarjeta = response.data.map(this.getDisplayTarjetas);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.getTarjeta();
    },

    getDisplayTarjetas() {
      return  {
        id_tarjeta: this.currentTarjeta.id_tarjeta,
        gaveta: this.currentTarjeta.gaveta,
        disciplina: this.currentTarjeta.disciplina,
        tamano: this.currentTarjeta.tamano,
        unidad: this.currentTarjeta.unidad,
        tipo_documento: this.currentTarjeta.tipo_documento,
        imagenes: this.currentTarjeta.imagenes,
        observacion: this.currentTarjeta.observacion,
      };
    },

    updateTarjeta() {
      TarjetaDataService.update(this.currentTarjeta.id, this.currentTarjeta)
          .then((response) => {
            console.log(response.data);
            this.message = "La tarjeta ha sido actualizada";
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteTarjeta() {
      TarjetaDataService.delete(this.currentTarjeta.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "Tarjetas" });
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.getTarjeta(this.$route.params.id);

  },
};
</script>

<style>
.edit-form {
  max-width: 600px;
  margin: auto;
}
</style>