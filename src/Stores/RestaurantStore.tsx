import { makeAutoObservable } from 'mobx';
import RestaurantModel from '../Models/RestaurantModel';

class RestaurantStore {
    resturants: RestaurantModel[] = [];
    resturant: RestaurantModel = new RestaurantModel();

    private api = "https://localhost:44390/api";

    constructor() {
        makeAutoObservable(this);
        this.getRestaurantsAsync();
    }

    get Restaurants() {
        return this.resturants;
    }

    get Restaurant() {
        return this.resturant;
    }

    getRestaurantsAsync = async () => {
        const response = await fetch(this.api + "/Restaurant");
        const data = await response.json();
        this.resturants = data;
    }
}

export const us = new RestaurantStore();