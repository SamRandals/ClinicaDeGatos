import Dexie from "dexie";

export const db = new Dexie("CatsDB");

db.version(1).stores({
  cats: `
    ++id,
    nameCat,
    raceCat,
    ageCat,
    sickCat,
    status,
    diagnostic
  `
});


db.open()
  .then(() => console.log("DB abierta correctamente"))
  .catch(err => console.error("Error abriendo DB:", err));
