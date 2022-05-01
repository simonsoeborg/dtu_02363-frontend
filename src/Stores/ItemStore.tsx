import axios from 'axios';
import {runInAction, makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";
import ItemPostModel from '../Models/ItemPostModel';
import { API_URL_ez_get, API_URL_admin_Create } from '../Services/_services';

class ItemStore {
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel("", 0, "", "");
    postItem: ItemPostModel = new ItemPostModel(0, "", 0, 0, "");

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

    get PostItem() {
        return this.postItem;
    }

    setItems = (items : ItemModel[]) => {
        runInAction(() => {
            this.items = items
        })
    }

    setItem = (item : ItemModel) => {        
        runInAction(() => {
            this.item = item;
        })
    } 

    setPostItem = (item : ItemPostModel) => {        
        runInAction(() => {
            this.postItem = item;
        })
    } 

    getItemsAsync = async () => {
        const response = await fetch(API_URL_ez_get + "/ItemView");
        const data = await response.json();
        this.setItems(data);
    }

    postItemModel = async (item : ItemPostModel) => {
        var instance = axios.create({
        baseURL: `${API_URL_admin_Create}/`,
        headers: { "Content-Type": "application/json" },
        });

        await instance.post("Item", JSON.stringify(item)).then((res) => {
            console.log(res.status);
        });

        this.getItemsAsync();
    }
}

export const is = new ItemStore();