import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
    Account,
    Avatars,
    Client,
    Databases,
    OAuthProvider,
    Storage,
    TablesDB
} from "react-native-appwrite";

export const config = {
    platform: "com.jsm.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    galleryId:process.env.EXPO_PUBLIC_GALLERY_ID,
    reviewId:process.env.EXPO_PUBLIC_REVIEW_ID,
    agentsId:process.env.EXPO_PUBLIC_AGENTS_ID,
    propertyId:process.env.EXPO_PUBLIC_PROPERTIES
};

export const client = new Client();
client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const tablesDb = new TablesDB(client);
export const storage = new Storage(client);
export async function name() {
    try{
      await tablesDb.createRow({
        databaseId: "config.databaseId!",
        tableId: "config.propertyId!",
        rowId:"",
        data: {
            title: "My Property",
            price: 2000
        }
    });

    }
    catch(e:any){

    }
}
export async function login() {
    try {
        const redirectUri = Linking.createURL("/");

        const response = account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri
        );
        if (!response) throw new Error("Create OAuth2 token failed");

        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri
        );
        if (browserResult.type !== "success")
            throw new Error("Create OAuth2 token failed");

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        if (!secret || !userId) throw new Error("Create OAuth2 token failed");

        const session = await account.createSession(userId, secret);
        if (!session) throw new Error("Failed to create session");

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function logout() {
    try {
        const result = await account.deleteSession("current");
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function getCurrentUser() {
    try {
        const result = await account.get();
        if (result.$id) {
            const userAvatar = avatar.getInitials(result.name);

            return {
                ...result,
                avatar: userAvatar.toString(),
            };
        }

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}