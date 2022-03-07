import { runInAction, makeAutoObservable } from 'mobx';
import CategoryModel from "../Models/CategoryModel";
import { API_URL } from '../Services/_services';

class CategoryStore {
    categories: CategoryModel[] = [];
    category: CategoryModel = new CategoryModel();
    activeCategory : string = "Starters";

    constructor() {
        makeAutoObservable(this);
        runInAction(() => {
            this.getCategoriesAsync();
        })
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

    setCategories = (categories: CategoryModel[]) =>{
        this.categories = categories
    }

    getCategoriesAsync = async () => {
        const response = await fetch(API_URL + "/Category");
        const data = await response.json();
        this.setCategories(data);
    }
}

export const cs = new CategoryStore();