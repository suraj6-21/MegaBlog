import { Client, Account, ID } from "appwrite";
import { conf } from "../conf";

export class AuthService {
    Client = new Client()
    account;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.Client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
                console.log("Account created successfully:", userAccount);
                // Call another method

                return this.login({ email, password })

            } else {
                console.log("Account creation failed: No user account returned");
                return userAccount

            }

        } catch (error) {
            console.log("Error creating account:", error);


        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            console.log("Error logging in:", error);
            throw error


        }
    }

    async getCurrentUser() {
        try {
            return await this.Client.get()

        } catch (error) {
            console.log("Current stutus error:: getCurremtUser", error);
            throw error
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            console.log("Logged out successfully");
            
        } catch (error) {
            console.log("Error logging out:", error);
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;