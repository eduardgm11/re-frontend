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

    deleteAll() {
        return http.delete(`/Tarjetas`);
    }

    findByTitle(title) {
        return http.get(`/Tarjetas?id_tarjeta=${title}`);
    }
}

export default new TarjetaDataService();