import { getAccounts } from "./getAccounts";
import login from "./login";
import me from "./me";
import register from "./register";

export const accountController = {
    register: register,
    login: login,
    getAccounts: getAccounts,
    me: me
    
}