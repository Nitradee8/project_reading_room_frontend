const ACCESS_TOKEN = 'ACCESS_TOKEN'
const ROLE = "ROLE";

/* VARIABLE */
export const ADMIN = "ADMIN";

/* ACCESS TOKEN */
export const addAccessToken = token => localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

/* ROLE */
export const addRole = (role) => localStorage.setItem(ROLE, role);
export const getRole = () => localStorage.getItem(ROLE);
export const removeRole = () => localStorage.removeItem(ROLE);