import { Client, ID, Storage, Databases, Query } from "appwrite";
import conf from "../conf/Conf";


export class Services {
    Client = new Client()
    databases;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    // User Create Post
    async createpost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                },
                // [
                //     Query.equal("slug", slug),
                //     Query.equal("userId", userId)
                // ]

            )
        } catch (error) {
            console.log("Error creating post:: createpost :: error", error);
            throw error;

        }
    }

    // User Update Post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Error updating post:: updatePost :: error", error);
            throw error;
        }
    }

    // User Delete Post
    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug
            )
            console.log("Post deleted successfully");
            return true;
        } catch (error) {
            console.log("Error deleting post:: deletePost :: error", error);
            throw error;
            return false
        }
    }

    // Select Get Single Post
    async getPost(slug) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                // slug ? [Query.equal("slug", slug)] : [],
                slug

            )
        } catch (error) {
            console.log("Error fetching posts:: getPosts :: error", error);
            throw error;
            return false
        }
    }

    // Select Get All Posts
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("Error fetching posts:: getPosts :: error", error);
            throw error;
            return false
        }
    }


    // File Upload Services Methods
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error uploading file:: uploadFile :: error", error);
            throw error;
            return false
        }
    }

    // Delete File
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("Error deleting file:: deleteFile :: error", error);
            throw error;
            return false

        }
    }

    // File Preview 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}





const services = new Services()
export default services;