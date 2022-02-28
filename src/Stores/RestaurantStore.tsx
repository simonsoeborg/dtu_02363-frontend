import { makeAutoObservable } from 'mobx';
import RestaurantViewModel from '../Models/RestaurantViewModel';
import RestaurantModel from '../Models/RestaurantModel';

import { api } from './APIStore';

class RestaurantStore {
    restaurantsView: RestaurantViewModel[] = [];
    restaurantView: RestaurantViewModel = new RestaurantViewModel();

    restaurants: RestaurantModel[] = []; 
    restaurant: RestaurantModel = new RestaurantModel();  

    // private api = "https://localhost:44390/api";

    constructor() {
        makeAutoObservable(this);
        this.getRestaurantsAsync();
    }

    // Special getters and settersfor sql-views
    get RestaurantsView() {
        return this.restaurantsView;
    }

    get RestaurantView() {
        return this.restaurantView;
    }

    setRestaurantView = (restaurantView : RestaurantViewModel) => {
        this.restaurantView= restaurantView
    }

    setRestaurantsView = (restaurantsView : RestaurantViewModel[] ) => {
        this.restaurantsView = restaurantsView
    }



    // Regular getters and setters mathing database clases. 
    /*get Restaurants() {
        return this.restaurants;
    }*/

    get Restaurant() {
        return this.restaurant;
    }

    setRestaurant = (restaurant : RestaurantModel) => {
        this.restaurant= restaurant
    }

    /*setRestaurants = (restaurants : RestaurantModel[] ) => {
        this.restaurants = restaurants
    }*/ 

    setRestaurantName = (name : string) => {
        this.Restaurant.name = name;
    }

    setRestaurantOwner = (id : number) => {
        this.Restaurant.ownerID = id;
    }

    setRestaurantId = (id : number) => {
        this.Restaurant.id = id
    }

    // Get ResturantViewData for all resturants        
    getRestaurantsAsync = async () => {
        const response = await fetch(api.Api + "/Restaurant");
        const data = await response.json();
        this.setRestaurantsView(data);
    }
    
    // Get ResturantViewData for a specific resturant.
    getRestaurantByIdAsync = async (id : number) => {
        const response = await fetch(`${api.Api}/Restaurant/${id}`);
        const data = await response.json();
        this.setRestaurantView(data);
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