import { heroes } from "./heroes.js";

//PUNTO 1

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

const getHeroeByIdAsinc = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = getHeroeById(id);
    if (heroe) {
      resolve(heroe);
    } else {
      reject("no se ha encontrado ningun heroe con ese id");
    }
  });
};

getHeroeByIdAsinc(2)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.warn(err));

getHeroeByIdAsinc(10)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.warn(err));

//PUNTO2

const peticion = fetch("https://api.github.com/users/manishmshiva");

peticion
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data))
  .catch((err) => console.warn(err));

//PUNTO3

const getName = async () => {
  try {
    const respuesta = await fetch("https://api.github.com/users/manishmshiva");
    const data = await respuesta.json();
    console.log(name);
  } catch (error) {
    console.error("Se ha producido un error en la solicitud");
  }
};
getName();
