import { makeAutoObservable, runInAction } from "mobx";
import TableModel from "../Models/TableModel";
import { API_URL } from "../Services/_services";

class TableStore {
  tables: TableModel[] = [];
  currentTableId: number = 0;

  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.getTablesAsync();
    });
  }

  get Tables() {
    return this.tables;
  }

  setTables = (tables: TableModel[]) => {
    this.tables = tables;
  };

  setCurrentTableId(id: number){
    this.currentTableId = id;
  }

  getTablesAsync = async () => {
    const response = await fetch(API_URL + "/SeatingTable");
    const data = await response.json();
    this.setTables(data);
  };
}
export const ts = new TableStore();
