import { makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";
import { api } from './APIStore';

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
        const response = await fetch(api.api + "/ItemView");
        const data = await response.json();
        this.items = data;
    }
}

export const is = new ItemStore();