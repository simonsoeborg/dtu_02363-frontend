import { isBreakStatement } from "typescript";

const API_URL = "https://api.uglyrage.com/api";

// private api = "https://localhost:5001/api";
// "https://api.uglyrage.com/api";

const defaultImage =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

const switchRoles = (id ?: number, roleName ?: string) => {
  if(id!!) {
    switch(id) {
      case 1: {
        return "user" 
      }
      case 3: {
        return "waiter" 
      }
      case 7: {
        return "admin" 
      }
    }
  }

  if(roleName!!) {
    switch(roleName) {
      case "user": {
        return 1
      }
      case "waiter": {
        return 3
      }
      case "admin": {
        return 7
      }
    }
  }
}

export { API_URL, defaultImage, switchRoles };
