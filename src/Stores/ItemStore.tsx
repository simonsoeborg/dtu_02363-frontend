import axios from 'axios';
import {runInAction, makeAutoObservable } from 'mobx';
import ItemModel from "../Models/ItemModel";
import ItemPostModel from '../Models/ItemPostModel';
import { API_URL_ez_get, API_URL_admin_Create, API_URL_admin_Alter } from '../Services/_services';

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

    setPostItemName = (name : string) => {
        runInAction(() => {
            this.PostItem.name = name;
        })
    } 

    setPostItemPrice = (price : number) => {
        runInAction(() => {
            this.PostItem.price = price;
        })
    } 

    setPostItemId = (id : number) => {
        runInAction(() => {
            this.PostItem.id = id;
        })
    } 

    setPostItemImgUrl = (imgUrl : string) => {
        runInAction(() => {
            this.PostItem.imgUrl = imgUrl;
        })
    } 

    setPostItemCategoryId= (categoryId : number) => {
        runInAction(() => {
            this.PostItem.categoryId = categoryId;
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

    getItemByIdAsync = async (id : number) => {
        const response = await fetch(API_URL_ez_get + "/Item/" + Number(id));
        const data = await response.json();
        this.setPostItem(data);
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

    putItemModel = async (item : ItemPostModel) => {
        const res = await fetch(API_URL_admin_Alter + "/Item/" + Number(item.id), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
        console.log(res.status);
        this.getItemsAsync();
    }
}

export const is = new ItemStore();