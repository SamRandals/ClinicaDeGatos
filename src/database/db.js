import Dexie from "dexie";

export const db = new Dexie("CatsDB");

db.version(20).stores({
  cats: `
    ++id,
    nameCat,
    raceCat,
    ageCat,
    sickCat,
    diagnostic
  `
});


db.open()
  .then(() => console.log("DB abierta correctamente"))
  .catch(err => console.error("Error abriendo DB:", err));
