import {runInAction, makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";
import { API_URL } from '../Services/_services';

class ItemStore {
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel();
    

    constructor() {
        makeAutoObservable(this);
        runInAction(() => {
            this.getItemsAsync();
        })
    }

    get Items() {
        return this.items;
    }

    get Item() {
        return this.item;
    }

    setItems = (items : ItemModel[]) => {
        this.items = items
    }

    getItemsAsync = async () => {
        const response = await fetch(API_URL + "/ItemView");
        const data = await response.json();
        this.setItems(data);
    }
}

export const is = new ItemStore();