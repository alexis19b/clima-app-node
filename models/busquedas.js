const axios = require("axios");

class Busquedas {
  historial = ["Barinas", "Caracas", "Carabobo"];

  constructor() {
    //TODO: Leer Base de datos si exitos
  }
  get paramsMaxbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }
  async ciudad(lugar = "") {
    try {
      //Peticion http
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMaxbox,
      });
      const resp = await intance.get();
      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lgn: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return [];
    }
  }
}
module.exports = Busquedas;
