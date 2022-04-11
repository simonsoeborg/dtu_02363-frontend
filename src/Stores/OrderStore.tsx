import { runInAction, makeAutoObservable } from "mobx";
import { API_URL } from "../Services/_services";
import OrderModel from "../Models/OrderModel";

class OrderStore {
  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();

  constructor() {
    makeAutoObservable(this);
    // Retrieves all order from the database on instantiated
    runInAction(() => {
      this.getOrdersAsync();
    });
  }

  get Orders() {
    return this.orders;
  }

  get Order() {
    return this.order;
  }

  setOrders = (orders: OrderModel[]) => {
    this.orders = orders;
  };

  getOrdersAsync = async () => {
    const response = await fetch(API_URL + "/resOrders");
    const data = await response.json();
    this.setOrders(data);
  };

  setTableNumber = (id: number) => {
    this.order.tableId = id;
  };
}

export const os = new OrderStore();
