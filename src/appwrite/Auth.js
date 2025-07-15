import { Client, Account, ID } from "appwrite";
import conf from "../conf/Conf";


export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        console.log("Account created successfully:", userAccount);
        return this.login({ email, password });
      } else {
        console.log("Account creation failed: No user account returned");
        return userAccount;
      }
    } catch (error) {
      console.log("Error creating account:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error logging in:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      // This will attempt to get the current user session
      return await this.account.get();
    } catch (error) {
      // If there's an error (e.g., "User missing scope"),
      // it means no user is currently logged in.
      // We don't need to re-throw this specific error, just return null.
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null; // Return null when no user is logged in or an error occurs
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      console.log("Logged out successfully");
    } catch (error) {
      console.log("Error logging out:", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
