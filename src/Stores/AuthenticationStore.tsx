import { makeAutoObservable } from 'mobx';
import AuthenticationModel from '../Models/AuthenticationModel';
import { API_URL } from '../Services/_services';

class AuthStore {
    auth : AuthenticationModel = new AuthenticationModel("", false, "", "", "", "");

    constructor() {
        makeAutoObservable(this);        
    }

    get Auth() {
        return this.auth;
    }

    setAuth = (auth : AuthenticationModel) => {
        this.auth = auth;
    }

/*     getAuthentication = async (email : string) => {
        const response = await fetch(`${API_URL}/Authentication/${email}`);
        const data = await response.json();
        if(response.ok) {
            this.setAuth(data);
        }
    } */

    postAuthentication = async (auth : AuthenticationModel) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        //headers.append('Access-Control-Allow-Credentials', 'true');
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(auth)
        };
        //const request = new Request(`https://localhost:44390/api/Authentication/`, options)
        const request = new Request(`${API_URL}/Authentication/`, options)
        await fetch(request);
    }   
}

export const authentication = new AuthStore();