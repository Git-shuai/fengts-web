import cookie from "cookie_js";

//设置cookie过期时间（默认一天）
cookie.expiresMultiplier=60*60*24*7;

const token="Authorization";
const username="fengtsUser";

export function setToken(Authorization) {
 return cookie.set(token,Authorization);
}

export function getToken() {
    return cookie.get(token);
}

export function removeToken() {
    return cookie.remove(token);
}
export function setUsername(userName) {
    return cookie.set(username,userName);
}

export function getUsername() {
    return cookie.get(username);
}

export function removeUsername() {
    return cookie.remove(username);
}
