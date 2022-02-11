import { makeAutoObservable } from 'mobx';
import UserModel from '../Models/UserModel';

class UserStore {
    users: UserModel[] = [];
    user: UserModel = new UserModel();

    private api = "https://localhost:44390/api";

    constructor() {
        makeAutoObservable(this);
        this.getUsersAsync();
    }

    get Users() {
        return this.users;
    }

    get User() {
        return this.user;
    }

    getUsersAsync = async () => {
        const response = await fetch(this.api + "/User");
        const data = await response.json();
        this.users = data;
    }
}

export const us = new UserStore();