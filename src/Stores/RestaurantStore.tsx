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

    
    // Alters a user in the database, uses PUT HTTP Request
    putResturantAsync = async () => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(this.Restaurant)
        };

        console.log( JSON.stringify(this.Restaurant))

        const request = new Request(`${api.Api}/Restaurant/${this.Restaurant.id}`, options)
        const response = await fetch(request);

        if (response.status !== 204) {
            console.log(response);
        }

        this.putResturantAsync();
        return response.status;
    }
}

export const rs = new RestaurantStore();