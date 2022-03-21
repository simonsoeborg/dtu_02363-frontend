
export default class AuthenticationModel {
    email : string = "";
    email_verified : boolean = false;
    family_name : string = "";
    given_name : string = "";
    name : string = "";
    nickname : string = "";
    picture : string = "";
    sub : string = "";
    roleId : number = 0;
    pin : number = 0;

    constructor(
        email : string, 
        email_verified : boolean, 
        family_name : string, 
        given_name : string,
        name : string,
        sub : string,
        nickname? : string,
        picture? : string,
        roleId? : number,
        pin? : number,
        ) {
            this.email = email;
            this.email_verified = email_verified;
            this.family_name = family_name;
            this.given_name = given_name;
            this.name = name;
            this.sub = sub;
            this.nickname = nickname!; // Non-Null Assertion Operator
            this.picture = picture!;
            this.roleId = roleId!;
            this.pin = pin!;
        }

}