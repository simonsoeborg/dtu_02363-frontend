export default class ItemModel {
  id: number = 0;
  counterId : number = 0; 
  itemName: string = "";
  price: number = 0;
  categoryName: string = "";
  imgUrl?: string = "";

  constructor(
    itemName : string,
    price : number, 
    categoryName : string,
    imgUrl : string,
    id ?: number
) {
    this.itemName = itemName;
    this.price = price;
    this.categoryName = categoryName;
    this.imgUrl = imgUrl;
    this.id = id!;
}
}
