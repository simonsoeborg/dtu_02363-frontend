import { makeAutoObservable, runInAction } from "mobx";
import TableModel from "../Models/TableModel";
import { API_URL } from "../Services/_services";

class TableStore {
  tables: TableModel[] = [];
  currentTableId: number = 0;
  tableIsInUse: boolean = false; 

  constructor() {
    makeAutoObservable(this);
    runInAction(() => {
      this.getTablesAsync();
    });
  }

  getTables() {
    return this.tables;
  }
  
  setTables = (tables: TableModel[]) => {
    this.tables = tables;
  };

  setCurrentTableId(id: number){
    this.currentTableId = id;
  }

  setCurrentTableStatus(status : boolean){
    this.tableIsInUse = status;
  }

  changeTableOccupation = async () => {
    this.tables[this.currentTableId-1].isInUse = !(this.tables[this.currentTableId-1].isInUse); 

    console.log(this.tables[this.currentTableId-1].isInUse);
      const headers = new Headers();
      headers.append("Content-type", "application/json");
      var options = {
          method: "PUT",
          headers,
          body: JSON.stringify(this.tables.filter(x=>x.id===this.currentTableId)[0])
      };
      
      console.log(JSON.stringify(this.tables.filter(x=>x.id===this.currentTableId)[0]));

      const request = new Request(`${API_URL}/SeatingTable/${this.currentTableId}`, options)
      const response = await fetch(request);

      if (response.status !== 204) {
          console.log(response);
      }
      return null
  }

  getTablesAsync = async () => {
    const response = await fetch(API_URL + "/SeatingTable");
    const data = await response.json();
    this.setTables(data);
  };
}
export const ts = new TableStore();
