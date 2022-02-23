import { makeAutoObservable } from 'mobx';
import RestaurantModel from '../Models/RestaurantModel';
import { api } from './APIStore';

class RestaurantStore {
    restaurants: RestaurantModel[] = [];
    restaurant: RestaurantModel = new RestaurantModel();

    constructor() {
        makeAutoObservable(this);
        this.getRestaurantsAsync();
    }

    get Restaurants() {
        return this.restaurants;
    }

    get Restaurant() {
        return this.restaurant;
    }

    getRestaurantsAsync = async () => {
        const response = await fetch(api.Api + "/Restaurant");
        const data = await response.json();
        this.restaurants = data;
    }
}

export const rs = new RestaurantStore();