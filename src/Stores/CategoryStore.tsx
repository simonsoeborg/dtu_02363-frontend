import { makeAutoObservable } from 'mobx';
import CategoryModel from "../Models/CategoryModel";
import { api } from './APIStore';

class CategoryStore {
    categories: CategoryModel[] = [];
    category: CategoryModel = new CategoryModel();
    activeCategory : string = "Starters";

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

    get ActiveCategory() {
        return this.activeCategory;
    }
    
    setActiveCategory = (category : string) => {
        this.activeCategory = category;
    }


    getCategoriesAsync = async () => {
        const response = await fetch(api.api + "/Category");
        const data = await response.json();
        this.categories = data;
        console.log(data);
    }
}

export const cs = new CategoryStore();