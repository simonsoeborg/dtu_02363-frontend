import { makeAutoObservable } from 'mobx';
import UserModel from '../Models/UserModel';
import { api } from './APIStore';

class UserStore {
    users: UserModel[] = [];
    user: UserModel = new UserModel();

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
        const response = await fetch(api.api + "/User");
        const data = await response.json();
        this.users = data;
    }
}

export const us = new UserStore();