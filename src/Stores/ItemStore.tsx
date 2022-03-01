import { makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";
import { API_URL } from '../Services/_services';

class ItemStore {
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel();

    constructor() {
        makeAutoObservable(this);
        this.getItemsAsync();
    }

    get Items() {
        return this.items;
    }

    get Item() {
        return this.item;
    }

    getItemsAsync = async () => {
        const response = await fetch(API_URL + "/ItemView");
        const data = await response.json();
        this.items = data;
    }
}

export const is = new ItemStore();