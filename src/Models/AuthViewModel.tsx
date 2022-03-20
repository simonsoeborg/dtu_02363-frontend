
export default class AuthViewModel {
    email : string = "";
    email_verified : boolean = false;
    family_name : string = "";
    given_name : string = "";
    name : string = "";
    nickname : string = "";
    picture : string = "";
    sub : string = "";
    role : string = "";
    pin : number = 0;
    userEmail : string = "";

    constructor(
        email : string, 
        email_verified : boolean, 
        family_name : string, 
        given_name : string,
        name : string,
        sub : string,
        nickname? : string,
        picture? : string,
        role? : string, 
        pin? : number,
        userEmail? : string
        ) {
            this.email = email;
            this.email_verified = email_verified;
            this.family_name = family_name;
            this.given_name = given_name;
            this.name = name;
            this.sub = sub;
            this.nickname = nickname!; // Non-Null Assertion Operator
            this.picture = picture!;
            this.role = role!;
            this.pin = pin!;
            this.userEmail = userEmail!;
        }

}