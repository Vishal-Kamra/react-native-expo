import { Account, Client } from "react-native-appwrite";
import { v4 as uuidV4 } from "uuid";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.private.myapp",
  projectId: "66ed987500221ce8f7e7",
  databaseId: "66ed9a420037f38fc0eb",
  usersCollectionId: "66ed9ac7002741b255f2",
  videosCollectionId: "66ed9ae2002441163863",
  storageId: "66ed9c82000aab6ca2ad",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(uuidV4(), "email", "password", "username").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
