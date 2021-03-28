import { SET_AUTH_USER } from "../constants/auth";

export const setAuthUser = (id) => {
    return {
        type: SET_AUTH_USER,
        id
    }
}