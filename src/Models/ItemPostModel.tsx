export default class ItemPostModel {
    id: number = 0;
    name: string = "";
    price: number = 0;
    categoryId: number = 0;
    imgUrl: string = "";

    constructor(
        id : number,
        name : string,
        price : number, 
        categoryId : number,
        imgUrl : string
    ) {
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.imgUrl = imgUrl;
        this.id = id!;
    }
  }
  