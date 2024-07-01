import { database } from "@/app/Config";

export const getCollection = async (collectionId) => {
    try {
        const response = await database.listDocuments(collectionId);
        return response.documents;
    } catch (error) {
        console.error(error);
    }
}