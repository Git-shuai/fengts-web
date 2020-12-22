import cookie from "cookie_js";

//设置cookie过期时间（默认一天）
cookie.expiresMultiplier=60*60*24*7;

const token="Authorization";
const username="fengtsUser";
const menuList="menuList";
const IsCollapse="IsCollapse";

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

export function setMenu(menuUrl) {
    return cookie.set(menuList,menuUrl);
}

export function getMenu() {
    return cookie.get(menuList);
}

export function removeMenu() {
    return cookie.remove(menuList);
}

export function setIsCollapse(value) {
    return cookie.set(IsCollapse,JSON.stringify(value));
}

export function getIsCollapse() {
    return cookie.get(IsCollapse)==="true";
}

export function removeIsCollapse() {
    return cookie.remove(IsCollapse);
}
