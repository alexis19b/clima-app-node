require("dotenv").config();
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt = Number;

  const busquedas = new Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        const lugares = await busquedas.ciudad(termino);
        const id = await listarLugares(lugares);
        if (id === "0") continue;
        const ciudadSelec = await lugares.find((el) => el.id === id);
        busquedas.agregarHistorial(ciudadSelec.nombre);
        const { nombre, lat, lgn } = ciudadSelec;
        const clima = await busquedas.climaLugar(lat, lgn);

        //Mostrar resultados
        console.log("\n Información de la ciudad\n");
        console.log("Ciudad;", nombre);
        console.log("Lat:", lat);
        console.log("Lng:", lgn);
        console.log("Temperatura:", clima.temperatura);
        console.log("Minima:", clima.min);
        console.log("Máxima:", clima.max);
        console.log("Como esta el clima: ", clima.cli);

        break;
      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
      default:
        break;
    }
    await pausa();
  } while (opt !== 0);
};
main();
