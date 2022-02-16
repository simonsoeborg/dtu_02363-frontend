import { makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";

class ItemStore {
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel();

    private api = "https://localhost:44390/api";

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
        const response = await fetch(this.api + "/ItemView");
        const data = await response.json();
        this.items = data;
        console.log(data);
    }
}

export const is = new ItemStore();