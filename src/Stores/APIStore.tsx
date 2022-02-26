import { makeAutoObservable } from 'mobx';

class ApiStore {
    api : string = "http://grp2.uglyrage.com:8080/api"

    constructor() {
        makeAutoObservable(this);
    }

    get Api() {
        return this.api;
    }
}

export const api = new ApiStore();