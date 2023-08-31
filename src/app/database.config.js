// database.config.ts
import Dexie from "dexie";

const database = new Dexie("database");
database.version(1).stores({
    friends: '++id, name, age'
});

export const customerTable = database.table('friends');

export default database;