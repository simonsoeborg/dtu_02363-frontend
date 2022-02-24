import { runInAction, makeAutoObservable } from 'mobx';
import UserModel from '../Models/UserModel';
import UserPostModel from '../Models/UserPostModel';
import { api } from './APIStore';

class UserStore {
    users: UserModel[] = [];
    user: UserModel = new UserModel();
    postUser: UserPostModel = new UserPostModel();

    constructor() {
        makeAutoObservable(this);
        // Retrieves all users from the database on instantiated. 
        runInAction(() => {
            this.getUsersAsync();
        })
    }

    get Users() {
        return this.users;
    }

    get User() {
        return this.user;
    }

    get PostUser() {
        return this.postUser;
    }

    setPostUserName = (name : string) => {
        this.PostUser.name = name;
    }
    setPostUserEmail = (email : string) => {
        this.PostUser.email = email;
    }
    setPostUserPassword = (password : string) => {
        this.PostUser.password = password;
    }

    setUserName = (name : string) => {
        this.User.name = name;
    }
    setUserEmail = (email : string) => {
        this.User.email = email;
    }
    setUserPassword = (password : string) => {
        this.User.password = password;
    }

    setUsers = (users : UserModel[] ) => {
        this.users = users
    }

    setUser = (user : UserModel) => {
        this.user = user
    }

    // Gets all users from database uses, GET HTTP Request
    getUsersAsync = async () => {
        const response = await fetch(api.Api + "/User");
        const data = await response.json();
        this.setUsers(data)
    }

    // Gets a user from database with ID argument, uses GET HTTP Request
    getUserByIdAsync = async (userId : number) => {
        const response = await fetch(`${api.Api}/User/${userId}`);
        const data = await response.json();
        this.setUser(data);
    }

    // Alters a user in the database, uses PUT HTTP Request
    putUserAsync = async () => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(this.User)
        };

        const request = new Request(`${api.Api}/User/${this.User.id}`, options)
        const response = await fetch(request);

        if (response.status !== 204) {
            console.log(response);
        }

        this.getUsersAsync();
        return response.status;
    }

    // Posts a new user in the database, uses POST HTTP Request
    postUserAsync = async (userItem : UserPostModel) => {
        if(userItem.roleId === 0) {
            userItem.roleId = 1
        }
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(userItem),
        };

        const request = new Request(api.Api + "/User/", options)
        const response = await fetch(request);

        if (response.status !== 201) {
            console.log(response);
        }

        this.getUsersAsync();
        return response.status;
    }

    // Deletes a user in the database, uses DELETE HTTP Request
    deleteUserAsync = async (userId : number) => {
        const res = await fetch(`${api.Api}/User/${userId}`, {
            method: "DELETE",
            mode: "cors",
        });

        if (res.status !== 204) {
            console.log(res);
        }
        this.getUsersAsync();
        return res.status;
    }
}

export const us = new UserStore();