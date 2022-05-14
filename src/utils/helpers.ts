import jwt_decode from "jwt-decode";

export const toAbsoluteUrl = (pathname: string) =>
  process.env.PUBLIC_URL + pathname;

export const storageService = {
  getFromStorage: (key: string) => {
    var value = localStorage.getItem(key);
    try {
      var result: object | null = JSON.parse(value || "");
      return result;
    } catch {
      return value;
    }
  },
  addToStorage: (key: string, value: any) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  removeFromStorage: (key: string) => {
    localStorage.removeItem(key);
  },
};

export const refreshTokValid = (token: string) => {
  var decoded = jwt_decode<any>(token);
  var isValid = decoded.exp * 1000 > Date.now();
  return isValid;
};

export const verifyLoggedInStatus = (
  refresh: string,
  isLogin: boolean
): boolean => {
  var validToken = refreshTokValid(refresh);
  return validToken && isLogin;
};

export const capitalize = (input: string) => {
  var format = `${input[0].toUpperCase()}${input.slice(1)}`;
  return format;
};

export const renderDate = (date: Date | undefined) => {
  if (date) {
    let dateObj = new Date(date);
    let _dateObj = dateObj.toDateString().split(" ");
    var renderDateFormat = `${_dateObj[1]} ${_dateObj[2]}, ${_dateObj[3]}`;
  } else {
    return " ";
  }
  return renderDateFormat;
};

export const formatDate = (date: Date | undefined) => {
  if (date) {
    let dateObj = new Date(date);
    let _dateObj = dateObj.toLocaleDateString().split("/");
    var renderDateFormat = `${_dateObj[2]}-${_dateObj[1]}-${_dateObj[0]}`;
  } else {
    return " ";
  }
  return renderDateFormat;
};