<template>
  <div v-if="currentTarjeta" class="edit-form py-3">
    <p class="headline">Editar Tarjeta</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
          v-model="currentTarjeta.id_tarjeta"
          :rules="[(v) => !!v || 'El nombre es requerido']"
          label="id Tarjeta"
          required
      ></v-text-field>

      <v-text-field
          v-model="currentTarjeta.gaveta"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Gaveta"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.disciplina"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Disciplina"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.tamano"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Tamaño"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.unidad"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Unidad"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.tipo_documento"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Tipo de documento"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.imagenes"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Imagenes"
          required
      ></v-text-field>
      <v-text-field
          v-model="currentTarjeta.observacion"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="Observación"
          required
      ></v-text-field>

      <v-text-field
          v-model="currentTarjeta.PDF"
          :rules="[(v) => !!v || 'El nombre de la gaveta es requerida']"
          label="PDF"
          required
      ></v-text-field>

      <!--
      <label><strong>Status:</strong></label>
      {{ currentTarjeta.published ? "Tarjeta Publicada" : "Pendiente" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentTarjeta.published"
             @click="updatePublished(false)"
             color="primary" small class="mr-2"
      >
        UnPublish
      </v-btn>

      <v-btn v-else
             @click="updatePublished(true)"
             color="primary" small class="mr-2"
      >
        Publish
      </v-btn>
      -->

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
  name: "Tarjeta",
  data() {
    return {
      currentTarjeta: null,
      message: "",
    };
  },
  methods: {
    getTarjeta(id) {
      TarjetaDataService.get(id)
          .then((response) => {
            this.currentTarjeta = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updatePublished(status) {
      var data = {
        id: this.currentTarjeta.id,
        title: this.currentTarjeta.title,
        description: this.currentTarjeta.description,
        published: status,
      };

      TarjetaDataService.update(this.currentTarjeta.id, data)
          .then((response) => {
            this.currentTarjeta.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
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
    this.message = "";
    this.getTarjeta(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>