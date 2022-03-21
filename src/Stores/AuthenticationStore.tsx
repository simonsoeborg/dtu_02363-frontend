import { makeAutoObservable } from 'mobx';
import AuthenticationModel from '../Models/AuthenticationModel';
import AuthViewModel from '../Models/AuthViewModel';
import { API_URL } from '../Services/_services';
import axios from 'axios';

class AuthStore {
    auth : AuthenticationModel = new AuthenticationModel("", false, "", "", "", "");
    rbacAuth : AuthViewModel = new AuthViewModel("", false, "", "", "", "");

    constructor() {
        makeAutoObservable(this);        
    }

    get Auth() {
        return this.auth;
    }

    get RBACAuth() {
        return this.rbacAuth;
    }

    setRBACAuth = (rbacAuth : AuthViewModel) => {
        this.rbacAuth = rbacAuth;
    }

    setAuth = (auth : AuthenticationModel) => {
        this.auth = auth;
    }

    getRole = () => {
        return this.RBACAuth.role;
    }

    getPin = () => {
        return this.RBACAuth.pin;
    }
/*     getAuthentication = async (email : string) => {
        const response = await fetch(`${API_URL}/Authentication/${email}`);
        const data = await response.json();
        if(response.ok) {
            this.setAuth(data);
        }
    } */

    postAuthentication = async (auth : AuthenticationModel) => {
        var instance = axios.create({ baseURL: `${API_URL}/`, headers: {'Content-Type': 'application/json'}});
        // var instance = axios.create({ baseURL: `https://localhost:44390/api/`, headers: {'Content-Type': 'application/json'}});
        // axios.post(`${API_URL}/Authentication`, JSON.stringify(auth)).then((res) => {
        //     console.log(res)
        // })
        // axios({
        //     method: 'post',
        //     url: `${API_URL}/Authentication`,
        //     data: JSON.stringify(auth)
        // })
        await instance.post("Authentication", JSON.stringify(auth)).then((res) => {
            const data = res.data;
            this.setRBACAuth(new AuthViewModel(data.email, data.emailVerified, data.familyName, data.givenName, data.name, data.sub, data.nickname, data.picture!, data.role!, data.pin!));
        });
    }

    // postAuthentication = async (auth : AuthenticationModel) => {
    //     const headers = new Headers();
    //     headers.append("Content-type", "application/json");
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //     var options = {
    //         method: "POST",
    //         headers,
    //         body: JSON.stringify(auth)
    //     };
    //     //const request = new Request(`https://localhost:44390/api/Authentication/`, options)
    //     const request = new Request(`${API_URL}/Authentication/`, options)
    //     const res = await fetch(request);
    //     const data = await res.json();
    //     console.log(data);
    //     if(res.ok) {
    //         this.setRBACAuth(data);
    //     }
    // }   
}

export const authentication = new AuthStore();