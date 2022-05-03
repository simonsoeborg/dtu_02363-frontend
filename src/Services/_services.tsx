const API_URL = "https://api.uglyrage.com/api";
const API_URL_admin = "https://api.uglyrage.com/api/Admin";
const API_URL_admin_Alter = "https://api.uglyrage.com/api/Admin/Alter";
const API_URL_admin_Create = "https://api.uglyrage.com/api/Admin/Create";
const API_URL_admin_Delete = "https://api.uglyrage.com/api/Admin/Delete";
const API_URL_ez_get = "https://api.uglyrage.com/api/EasyTap/get";

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

export { API_URL, API_URL_admin, API_URL_admin_Alter, API_URL_admin_Create, API_URL_admin_Delete, API_URL_ez_get,
  defaultImage, 
  switchRoles };
