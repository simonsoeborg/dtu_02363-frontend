import { runInAction, makeAutoObservable } from 'mobx';
import AuthenticationModel from '../Models/AuthenticationModel';
import { API_URL } from '../Services/_services';

class AuthStore {
    auth : AuthenticationModel = new AuthenticationModel();

    constructor() {
        makeAutoObservable(this);        
    }

    get Auth() {
        return this.auth;
    }

    setAuth = (auth : AuthenticationModel) => {
        this.auth = auth;
    }

    getAuthentication = async (email : string) => {
        const response = await fetch(`${API_URL}/Auth/${email}`);
        const data = await response.json();
        if(response.status !== 200) {
            return false
        } else {
            this.setAuth(data);
            return true
        }
    }

    postAuthentication = async (auth : AuthenticationModel) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(auth)
        };

        const request = new Request(`${API_URL}/Auth/${auth}`, options)
        const response = await fetch(request);

        if (response.status !== 204) {
            console.log(response);
        }
    }   

    checkBeforePost = async (auth : AuthenticationModel) => {        
        runInAction(() => {
            const res = this.getAuthentication(auth.email);
            if(!res) {
                this.postAuthentication(auth);
            }
        }); 
    }
}

export const aus = new AuthStore();