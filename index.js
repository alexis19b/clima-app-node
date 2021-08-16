const { inquirerMenu, pausa } = require("./helpers/inquirer");

const main = async () => {
  let opt = Number;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        console.log("Parte 1 del menu");
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
