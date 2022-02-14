import { makeAutoObservable } from 'mobx';
import CategoryModel from "../Models/CategoryModel";

class CategoryStore {
    categories: CategoryModel[] = [];
    category: CategoryModel = new CategoryModel();

    private api = "https://localhost:44390/api";

    constructor() {
        makeAutoObservable(this);
        this.getCategoriesAsync();
    }

    get Categories() {
        return this.categories;
    }

    get Category() {
        return this.category;
    }

    getCategoriesAsync = async () => {
        const response = await fetch(this.api + "/Category");
        const data = await response.json();
        this.categories = data;
        console.log(data);
    }
}

export const cs = new CategoryStore();