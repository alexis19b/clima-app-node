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
        const ciudadSelec = await lugares.find((el) => el.id === id);

        //Mostrar resultados
        console.log("\n Información de la ciudad\n");
        console.log("Ciudad;", ciudadSelec.nombre);
        console.log("Lat:", ciudadSelec.lat);
        console.log("Lng:", ciudadSelec.lgn);
        console.log("Temperatura:");
        console.log("Minima:");
        console.log("Máxima:");

        break;
      case 2:
        await console.log("parte 2 del menu");
      default:
        break;
    }
    await pausa();
  } while (opt !== 0);
};
main();
