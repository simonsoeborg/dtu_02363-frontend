import AuthenticationModel from "../Models/AuthenticationModel";

class AuthenticationStore {
    user: AuthenticationModel = new AuthenticationModel();
}

export const auth = new AuthenticationStore();