import { runInAction, makeAutoObservable } from "mobx";
import { API_URL } from "../Services/_services";
import OrderModel from "../Models/OrderModel";
import OrderInfoModel from "../Models/OrderInfoModel";
import OrderOverviewViewModel from "../Models/OrderOverviewViewModel";
import ItemModel from "../Models/ItemModel";
import UserModel from "../Models/UserModel";

class OrderStore {
  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();
  
  orderInfoList: OrderInfoModel[] = []; 
  orderInfoSpecific : OrderInfoModel = new OrderInfoModel(); 

  OrderViews : OrderOverviewViewModel[] = []; 
  Orderview : OrderOverviewViewModel = new OrderOverviewViewModel(); 

  constructor() {
    makeAutoObservable(this);
    // Retrieves all order from the database on instantiated
    runInAction(() => {
      this.getOrdersAsync();
      //this.getOrderViewAsync(); 
    });
  }

  getOrders() {
    return this.orders;
  }

  getOrder() {
    return this.order;
  }
 
  setOrders = (orders: OrderModel[]) => {
    this.orders = orders;
  };


  setOrderViewList = (orderViewList : OrderOverviewViewModel[]) => {
      this.OrderViews = orderViewList;
  }; 

  setOrderInfo = (orderInfo : OrderInfoModel) => {
    this.orderInfoSpecific = orderInfo;
}; 


  getOrdersAsync = async () => {
    const response = await fetch(API_URL + "/Order");
    const data = await response.json();
    this.setOrders(data);
  };


  // Returns the id of the current order/receipt of the active table with 'id' 
  getSpecificOrderInfoAsync = async (id : number) =>{
    const response = await fetch(API_URL + "/OrderInfo/"+id);
    const data = await response.json();
    this.setOrderInfo(data);
  }

  

  postOrders = async (newOrders : ItemModel[], orderInfoId : number) =>  {

  console.log(newOrders[0].itemName)
  console.log(newOrders[1].itemName)

  this.setOrders([])
  const convertedItems = this.getOrders();  
  
  if (convertedItems.length > 0 ){
    console.log("WHY GOD WHY")
  }

    for (let i = 0; i < newOrders.length; i++) {
    
      console.log(i)
      convertedItems[i].id = 0
      convertedItems[i].itemId = 2
      convertedItems[i].orderInfoId = orderInfoId     
    }

    console.log(convertedItems[0].itemId)
    console.log(convertedItems[1].itemId)

    // await this.setOrders(convertedItems)

    for (let i = 0; i < convertedItems.length; i++) {
      await this.postIndividualOrders(convertedItems[i])
    }
  }

  postIndividualOrders = async (model : OrderModel) =>  {

    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
        method: "POST",
        headers,
        body: JSON.stringify(model) 
    };

    console.log(JSON.stringify(model))

    const request = new Request(`${API_URL}/Order`, options)
    const response = await fetch(request);
    // const data = await response.json();

    if (response.status !== 204) {
        console.log(response);
    }

    return null
  }



  postOrderInfo = async (tableId : number) =>{
    const newOrderInfoObject = {
      id: 0,
      tableId: tableId,
      orderPayed: false
    }; 

    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
        method: "POST",
        headers,
        body: JSON.stringify(newOrderInfoObject) 
    };
    //console.log(JSON.stringify(newOrderInfoObject));

    const request = new Request(`${API_URL}/OrderInfo`, options)
    const response = await fetch(request);
    // const data = await response.json();

    if (response.status !== 204) {
        console.log(response);
    }

    return null
  }

  putOrderInfo = async (tableId : number) =>{
  
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
        method: "PUT",
        headers,
        body: tableId.toString()
    };

     console.log(JSON.stringify(tableId));

     
    const request = new Request(`${API_URL}/OrderInfo/`+tableId, options)
    console.log(request)
    const response = await fetch(request);
    if (response.status !== 204) {
        console.log(response);
    }
    return null
  }




  getOrderViewAsync = async (id : number) =>{
    const response = await fetch(API_URL + "/OrderOverviewView/"+id);
    const data = await response.json();
    this.setOrderViewList(data);
  }

  // setTableNumber = (id: number) => {
  //   this.orderInfoSpecific.tableId = id;
  // };
}

export const os = new OrderStore();
