import { makeAutoObservable } from 'mobx';
import RestaurantModel from '../Models/RestaurantModel';
import { api } from './APIStore';


class RestaurantStore {
    resturants: RestaurantModel[] = [];
    resturant: RestaurantModel = new RestaurantModel();

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
        const response = await fetch(api.Api + "/Restaurant");
        const data = await response.json();
        this.resturants = data;
    }
}

export const us = new RestaurantStore();