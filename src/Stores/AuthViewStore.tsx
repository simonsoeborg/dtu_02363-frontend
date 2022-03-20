import { makeAutoObservable } from 'mobx';
import AuthViewModel from '../Models/AuthViewModel';
import { API_URL } from '../Services/_services';

class AuthViewStore {
    auth : AuthViewModel = new AuthViewModel("", false, "", "", "", "");

    constructor() {
        makeAutoObservable(this);        
    }

    get Auth() {
        return this.auth;
    }

    setAuth = (auth : AuthViewModel) => {
        this.auth = auth;
    }

    getAuthentication = async (email : string) => {
        const response = await fetch(`${API_URL}/AuthView/${email}`);
        const data = await response.json();
        if(response.ok) {
            this.setAuth(data);
        }
    }
}

export const authentication = new AuthViewStore();