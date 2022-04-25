import { makeAutoObservable, runInAction } from 'mobx';
import AuthenticationModel from '../Models/AuthenticationModel';
import AuthViewModel from '../Models/AuthViewModel';
import { API_URL } from '../Services/_services';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

class AuthStore {
    auth : AuthenticationModel = new AuthenticationModel("", false, "", "", "", "");
    rbacAuth : AuthViewModel = new AuthViewModel("", "", "", "");

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
        runInAction(() => {
            this.rbacAuth = rbacAuth;
        });
    }

    setAuth = (auth : AuthenticationModel) => {        
        runInAction(() => {        
            this.auth = auth;
        });
    }

    setName = (name : string) => {
        runInAction(() => {
            this.rbacAuth.name = name        
        });
    }
    setEmail = (email : string) => {
        runInAction(() => {     
            this.rbacAuth.email = email;   
        });
    }
    setRole = (role : string) => {
        runInAction(() => {     
            this.rbacAuth.role = role;           
        });
    }
    setSub = (sub : string) => {
        runInAction(() => {     
            this.rbacAuth.sub = sub;           
        });
    }
    setPicture = (picture : string) => {
        runInAction(() => {     
            this.rbacAuth.picture = picture;           
        });
    }
    setPin = (pin : number) => {
        runInAction(() => {     
            this.rbacAuth.pin = pin;        
        });
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
            const decoded = jwt_decode(data);
            let newObj = (JSON.stringify(decoded));
            this.setName(newObj.replace("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", "name").split(":")[1].split(",")[0].split('"')[1]);
            this.setEmail(newObj.replace("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress", "email").split(":")[3].split(",")[0].split('"\\')[0].split('"')[1]);
            this.setRole(newObj.replace("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", "role").split(":")[5].split(",")[0].split('"\\')[0].split('"')[1]);
            this.setPicture(newObj.replace("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/uri", "picture").split(",")[4].split('":')[1].split('\\"')[0].split('"')[1])
            this.setSub(newObj.replace("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier", "sub").split(":")[7].split(",")[0].split('"\\')[0].split('"')[1]);
            this.setPin(+newObj.replace("http://schemas.microsoft.com/ws/2008/06/identity/claims/serialnumber", "pin").split(":")[12].split(",")[0].split('"\\')[0].split('"')[1]);
        });
    }

}

export const authentication = new AuthStore();