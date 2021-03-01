<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Añadir Tarjeta</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
            v-model="tarjeta.id_tarjeta"
            :rules="[(v) => !!v || 'El nombre de la tarjeta es requerido']"
            label="ID Tarjeta"
            required
        ></v-text-field>

        <v-text-field
            v-model="tarjeta.gaveta"
            :rules="[(v) => !!v || 'Gaveta requerida']"
            label="Gaveta"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.disciplina"
            :rules="[(v) => !!v || 'Disciplina requerida']"
            label="Disciplina"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.tamano"
            :rules="[(v) => !!v || 'Tamaño requerido']"
            label="Tamaño"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.unidad"
            :rules="[(v) => !!v || 'Unidad requerido']"
            label="Unidad"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.tipo_documento"
            :rules="[(v) => !!v || 'Tipo de documento requerida']"
            label="Tipo de documento"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.imagenes"
            :rules="[(v) => !!v || 'Imagenes requerida']"
            label="Imagenes"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.observacion"
            :rules="[(v) => !!v || 'observación requerida']"
            label="Observación"
            required
        ></v-text-field>
        <v-text-field
            v-model="tarjeta.PDF"
            :rules="[(v) => !!v || 'Gaveta requerida']"
            label="PDF"
            required
        ></v-text-field>

      </v-form>

      <v-btn color="primary" class="mt-3" @click="GuardarTarjeta">Guardar</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Creado sastifactoriamente!
        </v-card-title>

        <v-card-subtitle>
          Clic para añadir una nueva tarjeta.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="NuevaTarjeta">Añadir</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import TarjetaDataService from "@/services/TarjetaDataService";

export default {
  name: "add-tarjeta",
  data() {
    return {
      tarjeta: {
        id: null,
        id_tarjeta: "",
        gaveta: "",
        disciplina: 0,
        tamano: "",
        unidad: 0,
        tipo_documento: "",
        imagenes: 0,
        observacion: "",
        PDF: null}
    };
  },
  methods: {
    GuardarTarjeta() {
      var data = {
        id_tarjeta: this.tarjeta.id_tarjeta,
        gaveta: this.tarjeta.gaveta,
        tamano: this.tarjeta.tamano,
        disciplina: this.tarjeta.disciplina,
        unidad: this.tarjeta.unidad,
        tipo_documento: this.tarjeta.tipo_documento,
        imagenes: this.tarjeta.imagenes,
        observacion: this.tarjeta.observacion,
        PDF: this.tarjeta.PDF,
      };

      TarjetaDataService.create(data)
          .then((response) => {
            this.tarjeta.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    NuevaTarjeta() {
      this.submitted = false;
      this.tarjeta = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>