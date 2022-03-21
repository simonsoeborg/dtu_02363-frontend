import { makeAutoObservable, runInAction } from "mobx";
import TableModel from "../Models/TableModel";
import { API_URL } from "../Services/_services";

class TableStore {
  tables: TableModel[] = [];
  table: TableModel = new TableModel();

  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.getTablesAsync();
    });
  }

  get Tables() {
    return this.tables;
  }

  get Table() {
    return this.table;
  }

  setTables = (tables: TableModel[]) => {
    this.tables = tables;
  };

  setTable = (table: TableModel) => {
    this.table = table;
  };

  getTablesAsync = async () => {
    const response = await fetch(API_URL + "/SeatingTable");
    const data = await response.json();
    this.setTables(data);
  };

  getTableByIdAsync = async (tableId: number) => {
    const response = await fetch(`${API_URL}/SeatingTable/${tableId}`);
    const data = await response.json();
    this.setTable(data);
  };
}
export const ts = new TableStore();
