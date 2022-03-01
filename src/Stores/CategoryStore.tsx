import { makeAutoObservable } from 'mobx';
import CategoryModel from "../Models/CategoryModel";
import { API_URL } from '../Services/_services';

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
        const response = await fetch(API_URL + "/Category");
        const data = await response.json();
        this.categories = data;
    }
}

export const cs = new CategoryStore();