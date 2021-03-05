import http from "../http-common";

class TarjetaDataService {
    getAll() {
        return http.get("/Tarjetas");
    }

    get(id) {
        return http.get(`/Tarjetas/${id}`);
    }

    create(data) {
        return http.post("/Tarjetas", data);
    }

    update(id, data) {
        return http.put(`/Tarjetas/${id}`, data);
    }

    delete(id) {
        return http.delete(`/Tarjetas/${id}`);
    }

    findByTarjeta(id_tarjeta) {
        return http.get(`/Tarjetas?buscaTarjeta=${id_tarjeta}`);
    }
}

export default new TarjetaDataService();