import { makeAutoObservable } from 'mobx';

class ApiStore {
    api : string = "https://api.uglyrage.com:8080/api/"

    constructor() {
        makeAutoObservable(this);
    }

    get Api() {
        return this.api;
    }
}

export const api = new ApiStore();