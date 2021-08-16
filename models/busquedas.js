const axios = require("axios");

class Busquedas {
  historial = ["Barinas", "Caracas", "Carabobo"];

  constructor() {
    //TODO: Leer Base de datos si exitos
  }
  get paramsMaxbox() {
    return {
      access_token:
        "pk.eyJ1IjoiYWxleGlzMTliIiwiYSI6ImNrc2Y0OThubTE3NnAyeG9tODZya2h0b2QifQ.sgK3ujUI59FCHCnbNu2EvA",
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
      console.log(resp.data);

      console.log(resp.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}
module.exports = Busquedas;
