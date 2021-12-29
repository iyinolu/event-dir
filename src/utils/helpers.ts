/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt_decode from 'jwt-decode';

type Storage = {
    access: string,
    refresh: string
}

export const toAbsoluteUrl = (pathname:string) => process.env.PUBLIC_URL + pathname;

export const storageService = {
    getFromStorage: (key: string) => {
        var value = localStorage.getItem(key)
        try {
            var result: object|null = JSON.parse(value || "") 
            return result
        } catch {
            return value
        }
    },
    addToStorage: (key: string, value: any) => {
        if (typeof value === "object") {
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            localStorage.setItem(key, value)
        }        
    },
    removeFromStorage: (key:string) => {
        localStorage.removeItem(key)
    }
}

export const refreshTokValid = (token: string) => {
    var decoded  = jwt_decode<any>(token);
    var now = new Date();
    var isValid = now > decoded.exp;
    return isValid;
}

export const verifyLoggedInStatus = (refresh:string, isLogin:boolean):boolean => {
    var validToken = refreshTokValid(refresh)
    return validToken && isLogin
}

export const capitalize = (input:string) => {
    var format = `${input[0].toUpperCase()}${input.slice(1)}`
    return format
}