import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("666af2ed003d5171e791");    

export const database = new Databases(client);

export const account = new Account(client);

export default client;