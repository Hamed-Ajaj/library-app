import { database } from "./Config";
import { ID } from "appwrite";
const db ={}

const collections = [
    {
        dbId:"66752c27002558198f75",
        id:"668abe680039f54325e3",
        name:"cart"
    },
    {
        dbId:"66752c27002558198f75",
        id:"66752c2c001ec7db5aea",
        name:"books"
    }
]

collections.forEach((col) => {
    db[col.name] = {
        create: (payload, permissions, id = ID.unique()) =>
            database.createDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        update: (id, payload, permissions) =>
            database.updateDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        delete: (id) => database.deleteDocument(col.dbId, col.id, id),

        list: (queries = []) =>
            database.listDocuments(col.dbId, col.id, queries),

        get: (id) => database.getDocument(col.dbId, col.id, id),
    };
});

export default db;