import { makeAutoObservable } from 'mobx';

class ApiStore {
    api : string = "https://localhost:44390/api"

    constructor() {
        makeAutoObservable(this);
    }

    get Api() {
        return this.api;
    }
}

export const api = new ApiStore();