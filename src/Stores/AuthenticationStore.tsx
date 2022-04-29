import { makeAutoObservable, runInAction } from "mobx";
import AuthenticationModel from "../Models/AuthenticationModel";
import AuthViewModel from "../Models/AuthViewModel";
import { API_URL } from "../Services/_services";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { authToken } from "./AuthTokenStore";

class AuthStore {
  auth: AuthenticationModel = new AuthenticationModel(
    "",
    false,
    "",
    "",
    "",
    ""
  );
  rbacAuth: AuthViewModel = new AuthViewModel("", "", "", "");
  authTemp: AuthenticationModel = new AuthenticationModel(
    "",
    false,
    "",
    "",
    "",
    ""
  );
  fullList: AuthViewModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get Auth() {
    return this.auth;
  }

  get RBACAuth() {
    return this.rbacAuth;
  }

  get AuthTemp() {
    return this.authTemp;
  }

  get RBACAuthFullList() {
    return this.fullList;
  }

  setRBACAuth = (rbacAuth: AuthViewModel) => {
    runInAction(() => {
      this.rbacAuth = rbacAuth;
    });
  };

  setAuthTemp = (rbacAuth: AuthenticationModel) => {
    runInAction(() => {
      this.authTemp = rbacAuth;
      authToken.setAuth(this.RBACAuth);
    });
  };

  setAuth = (auth: AuthenticationModel) => {
    runInAction(() => {
      this.auth = auth;
    });
  };

  setNameRBACTempUser = (name: string) => {
    runInAction(() => {
      this.authTemp.name = name;
    });
  };

  setName = (name: string) => {
    runInAction(() => {
      this.rbacAuth.name = name;
    });
  };
  setEmail = (email: string) => {
    runInAction(() => {
      this.rbacAuth.email = email;
    });
  };
  setRole = (role: string) => {
    runInAction(() => {
      this.rbacAuth.role = role;
    });
  };
  setSub = (sub: string) => {
    runInAction(() => {
      this.rbacAuth.sub = sub;
    });
  };
  setPicture = (picture: string) => {
    runInAction(() => {
      this.rbacAuth.picture = picture;
    });
  };
  setPin = (pin: number) => {
    runInAction(() => {
      this.rbacAuth.pin = pin;
    });
  };

  getRole = () => {
    return this.RBACAuth.role;
  };

  getPin = () => {
    return this.RBACAuth.pin;
  };

  setJWT = (jwt: string) => {
    runInAction(() => {
      this.rbacAuth.rawJWT = jwt;
    });
  };

  getJWT = () => {
    return this.RBACAuth.rawJWT;
  };

  setAuthList = (AuthList: AuthViewModel[]) => {
    this.fullList = AuthList;
  };

  getAuthenticatedUsersAsync = async () => {
    const response = await fetch(
      API_URL + "/Authentication/AuthenticatedUsers/" + this.getJWT()
    );
    const data = await response.json();
    this.setAuthList(data);
  };

  getAuthUserByEmailAsync = async (email: string) => {
    const response = await fetch(
      API_URL + "/Authentication/" + email + "/" + this.getJWT()
    );
    const data = await response.json();
    this.setAuthTemp(data);
    return this.authTemp;
  };

  putTemporaryAuthUser = async () => {
    var instance = axios.create({
      baseURL: `${API_URL}`,
      headers: { "Content-Type": "application/json" },
    });

    instance.put(
      "/Authentication/AuthenticatedUsers/" +
        this.getJWT() +
        "/" +
        this.AuthTemp.email,
      JSON.stringify(this.AuthTemp)
    );
    this.getAuthenticatedUsersAsync();
  };

  postAuthentication = async (auth: AuthenticationModel) => {
    var instance = axios.create({
      baseURL: `${API_URL}/`,
      headers: { "Content-Type": "application/json" },
    });

    instance.post("Authentication", JSON.stringify(auth)).then((res) => {
      const data = res.data;
      this.setJWT(data);
      console.log(data);
      const decoded = jwt_decode(data);
      let newObj = JSON.stringify(decoded);
      this.setName(
        newObj
          .replace(
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
            "name"
          )
          .split(":")[1]
          .split(",")[0]
          .split('"')[1]
      );
      this.setEmail(
        newObj
          .replace(
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
            "email"
          )
          .split(":")[3]
          .split(",")[0]
          .split('"\\')[0]
          .split('"')[1]
      );
      this.setRole(
        newObj
          .replace(
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
            "role"
          )
          .split(":")[5]
          .split(",")[0]
          .split('"\\')[0]
          .split('"')[1]
      );
      this.setPicture(
        newObj
          .replace(
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/uri",
            "picture"
          )
          .split(",")[4]
          .split('":')[1]
          .split('\\"')[0]
          .split('"')[1]
      );
      this.setSub(
        newObj
          .replace(
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
            "sub"
          )
          .split(":")[7]
          .split(",")[0]
          .split('"\\')[0]
          .split('"')[1]
      );
      this.setPin(
        +newObj
          .replace(
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/serialnumber",
            "pin"
          )
          .split(":")[12]
          .split(",")[0]
          .split('"\\')[0]
          .split('"')[1]
      );
    });
  };
}

export const authentication = new AuthStore();
