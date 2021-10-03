export interface AuthState {
    isLogin: boolean,
    email: string,
    username: string,
}

export interface LoginPayLoad {
    username: string,
    email: string,
}