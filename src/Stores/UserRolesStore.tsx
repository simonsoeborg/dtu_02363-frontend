import { runInAction, makeAutoObservable } from 'mobx';
import UserRolesModel from '../Models/UserRolesModel';
import { api } from './APIStore';

class UserRolesStore {
    users: UserRolesModel[] = [];
    user: UserRolesModel = new UserRolesModel();

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

    setUserName = (name : string) => {
        this.User.name = name;
    }

    setUsers = (users : UserRolesModel[] ) => {
        this.users = users
    }

    setUser = (user : UserRolesModel) => {
        this.user = user
    }

    // Gets all users from database uses, GET HTTP Request
    getUsersAsync = async () => {
        const response = await fetch(api.Api + "/UserRoles");
        const data = await response.json();
        this.setUsers(data)
    }

    // Gets a user from database with ID argument, uses GET HTTP Request
    getUserByIdAsync = async (userId : number) => {
        const response = await fetch(`${api.Api}/UserRoles/${userId}`);
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

        const request = new Request(`${api.Api}/UserRoles/${this.User.id}`, options)
        const response = await fetch(request);

        if (response.status !== 204) {
            console.log(response);
        }

        this.getUsersAsync();
        return response.status;
    }

    // Posts a new user in the database, uses POST HTTP Request
    postUserAsync = async (userItem : UserRolesModel) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(userItem),
        };

        const request = new Request(api.Api + "/UserRoles/", options)
        const response = await fetch(request);

        if (response.status !== 204) {
            console.log(response);
        }

        this.getUsersAsync();
        return response.status;
    }

    // Deletes a user in the database, uses DELETE HTTP Request
    deleteUserAsync = async (userId : number) => {
        const res = await fetch(`${api.Api}/UserRoles/${userId}`, {
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

export const urs = new UserRolesStore();