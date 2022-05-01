import { runInAction, makeAutoObservable } from "mobx";
import { API_URL_ez_get, API_URL_admin_Create, API_URL_admin_Alter } from "../Services/_services";
import OrderModel from "../Models/OrderModel";
import OrderInfoModel from "../Models/OrderInfoModel";
import OrderOverviewViewModel from "../Models/OrderOverviewViewModel";
import ItemModel from "../Models/ItemModel";

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

  get Orders() {
    return this.orders;
  }

  get Order() {
    return this.order;
  }
 
  get OrderInfoSpecific(){
    return this.orderInfoSpecific
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
    const response = await fetch(API_URL_ez_get + "/Order");
    const data = await response.json();
    this.setOrders(data);
  };


  // Returns the id of the current order/receipt of the active table with 'id' 
  getSpecificOrderInfoAsync = async (id : number) =>{
    const response = await fetch(API_URL_ez_get + "/OrderInfo/"+id);
    const data = await response.json();
    this.setOrderInfo(data);
  }

  postOrders = async (newOrders : ItemModel[], specificOrderInfoId : number) =>  {

    let newArray : Array <OrderModel> = [];  
  
     newOrders.map((item) => {
  
      const individualOrder : OrderModel = {
        id : 0 , 
        itemId : item.id , 
        orderInfoId : specificOrderInfoId
      }
      newArray.push(individualOrder)
  }) 
     
      for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i])
        await this.postIndividualOrders(newArray[i])
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

    const request = new Request(`${API_URL_admin_Create}/Order`, options)
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

    const request = new Request(`${API_URL_admin_Create}/OrderInfo`, options)
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

     
    const request = new Request(`${API_URL_admin_Alter}/OrderInfo/`+tableId, options)
    console.log(request)
    const response = await fetch(request);
    if (response.status !== 204) {
        console.log(response);
    }
    return null
  }

  changeOrderInfoStatus = async (tableId : number) =>{
  
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
        method: "PUT",
        headers,
        body: tableId.toString()
    };

     console.log(JSON.stringify(tableId));

     
    const request = new Request(`${API_URL_admin_Alter}/OrderInfo/`+tableId, options)
    console.log(request)
    const response = await fetch(request);
    if (response.status !== 204) {
        console.log(response);
    }
    return null
  }

  getOrderViewAsync = async (id : number) =>{
    const response = await fetch(API_URL_ez_get + "/OrderOverviewView/"+id);
    const data = await response.json();
    this.setOrderViewList(data);
  }

  // setTableNumber = (id: number) => {
  //   this.orderInfoSpecific.tableId = id;
  // };
}

export const os = new OrderStore();
