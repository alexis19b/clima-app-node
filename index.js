const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt = Number;

  const busquedas = new Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //Mostrar mensaje
        const lugar = await leerInput("Ciudad: ");
        await busquedas.ciudad(lugar);

        //Mostrar resultados
        console.log("\n Información de la ciudad\n");
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Lng:");
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
