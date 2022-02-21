import { makeAutoObservable } from 'mobx';
import RestaurantModel from '../Models/RestaurantModel';
// import { api } from './APIStore';


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

    setRestaurantName = (name : string) => {
        this.Restaurant.restaurantName = name;
    }


    setRestaurant = (restaurant : RestaurantModel) => {
        this.resturant = restaurant
    }


    getRestaurantsAsync = async () => {
        const response = await fetch(this.api + "/Restaurant");
        const data = await response.json();
        this.resturants = data;
    }

    getRestaurantByIdAsync = async (id : number) => {
        const response = await fetch(`${this.api}/User/${id}`);
        const data = await response.json();
        this.setRestaurant(data);
    }
}

export const us = new RestaurantStore();