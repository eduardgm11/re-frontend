<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Buscar Tarjeta"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTarjeta">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Tarjetas</v-card-title>

        <v-data-table
            :headers="headers"
            :items="tarjetas"
            disable-pagination
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteTarjetas(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="tarjetas.length > 0">
          <v-btn small color="error" @click="removeAllTarjetas">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TarjetaDataService from "../services/TarjetaDataService";
export default {
  name: "tarjeta-list",
  data() {
    return {
      tarjetas: [],
      title: "",
      headers: [
        { text: "ID tarjeta", align: "start", sortable: false, value: "id_tarjeta" },
        { text: "Gaveta", value: "gaveta", sortable: false },
        { text: "Disciplina", value: "disciplina", sortable: false },
        { text: "Tamaño", value: "tamano", sortable: false },
        { text: "Unidad", value: "unidad", sortable: false },
        { text: "Tipo de documento", value: "tipo_documento", sortable: false },
        { text: "Imagenes", value: "imagenes", sortable: false },
        { text: "Observación", value: "observacion", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveTarjetas() {
      TarjetaDataService.getAll()
          .then((response) => {
            this.tarjetas = response.data.map(this.getDisplayTarjetas);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveTarjetas();
    },

    removeAllTarjetas() {
      TarjetaDataService.deleteAll()
          .then((response) => {
            console.log(response.data);
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    searchTarjeta() {
      TarjetaDataService.findByTitle(this.title)
          .then((response) => {
            this.tarjetas = response.data.map(this.getDisplayTarjetas);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    editTutorial(id) {
      this.$router.push({ name: "tutorial-details", params: { id: id } });
    },

    deleteTarjetas(id) {
      TarjetaDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTarjetas(tarjeta) {
      return {
        id_tarjeta: tarjeta.id_tarjeta.length > 30 ? tarjeta.id_tarjeta.substr(0, 30) + "..." : tarjeta.id_tarjeta,
        gaveta: tarjeta.gaveta.length > 30 ? tarjeta.gaveta.substr(0, 30) + "..." : tarjeta.gaveta,
        disciplina: tarjeta.disciplina.length > 30 ? tarjeta.disciplina.substr(0, 30) + "..." : tarjeta.disciplina,
        tamano: tarjeta.tamano.length > 30 ? tarjeta.tamano.substr(0, 30) + "..." : tarjeta.tamano,
        unidad: tarjeta.unidad.length > 30 ? tarjeta.unidad.substr(0, 30) + "..." : tarjeta.unidad,
        tipo_documento: tarjeta.tipo_documento.length > 30 ? tarjeta.tipo_documento.substr(0, 30) + "..." : tarjeta.tipo_documento,
        imagenes: tarjeta.imagenes.length > 30 ? tarjeta.imagenes.substr(0, 30) + "..." : tarjeta.imagenes,
        observacion: tarjeta.observacion.length > 30 ? tarjeta.observacion.substr(0, 30) + "..." : tarjeta.observacion,
      };
    },
  },
  mounted() {
    this.retrieveTarjetas();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>