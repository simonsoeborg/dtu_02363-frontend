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

    postAuthentication = async (auth : AuthenticationModel) => {
        var instance = axios.create({ baseURL: `${API_URL}/`, headers: {'Content-Type': 'application/json'}});

        instance.post("Authentication", JSON.stringify(auth)).then((res) => {
            const data = res.data;
            this.setRBACAuth(new AuthViewModel(data.email, data.emailVerified, data.familyName, data.givenName, data.name, data.sub, data.nickname, data.picture!, data.role!, data.pin!));
        });
    }

}

export const authentication = new AuthStore();