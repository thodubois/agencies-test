import type { Agency } from "./types/agency";

interface Database {
  agencies: Array<Agency>;
}

export const base: Database = JSON.parse(
  `{"agencies":[{"id":"0","name":"Sekoya","owner":"Mark Zuckerberg","location":"Marseille","activity":"Plomberie"},{"id":"1","name":"Oak","owner":"Jeff Besos","location":"Nantes","activity":"Electrique"},{"id":"2","name":"Maple","owner":"Bill Gates","location":"Bordeaux","activity":"Climatisation"},{"id":"3","name":"Acacia","owner":"Sundar Pichai","location":"Paris","activity":"Plomberie"},{"id":"4","name":"Cypress","owner":"Time Cook","location":"Lyon","activity":"Climatisation"}]}`
);
