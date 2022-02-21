import { makeAutoObservable } from 'mobx';
import RestaurantModel from '../Models/RestaurantModel';
import { api } from './APIStore';


class RestaurantStore {
    restaurants: RestaurantModel[] = [];
    restaurant: RestaurantModel = new RestaurantModel();

    // private api = "https://localhost:44390/api";


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


    setRestaurantName = (name : string) => {
        this.Restaurant.restaurantName = name;
    }

    setRestaurant = (restaurant : RestaurantModel) => {
        this.restaurant = restaurant
    }

    setRestaurants = (restaurants : RestaurantModel[] ) => {
        this.restaurants = restaurants
    }

    getRestaurantsAsync = async () => {
        const response = await fetch(api.Api + "/Restaurant");
        const data = await response.json();
        this.setRestaurants(data);
    }

    getRestaurantByIdAsync = async (id : number) => {
        const response = await fetch(`${api.Api}/Restaurant/${id}`);
        const data = await response.json();
        this.setRestaurant(data);
    }
}

export const us = new RestaurantStore();