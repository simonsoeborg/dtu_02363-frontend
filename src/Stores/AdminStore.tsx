import { makeAutoObservable } from 'mobx';

class AdminStore {
    activeKey : number = 1

    constructor() {
        makeAutoObservable(this);
    }

    get ActiveKey() {
        return this.activeKey;
    }

    setActiveKey = (key: number) => {
        this.activeKey = key
    }
}

export const as = new AdminStore();