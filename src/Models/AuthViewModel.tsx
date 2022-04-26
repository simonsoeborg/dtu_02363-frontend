
export default class AuthViewModel {
    email : string = "";
    name : string = "";
    picture : string = "";
    sub : string = "";
    role : string = "";
    pin : number = 0;
    rawJWT : string = "";

    constructor(
        email : string, 
        name : string,
        sub : string,
        picture? : string,
        role? : string, 
        pin? : number,
        rawJWT : string = ""
        ) {
            this.email = email;
            this.name = name;
            this.sub = sub;
            this.picture = picture!;
            this.role = role!;
            this.pin = pin!;
            this.rawJWT = rawJWT;
        }

}