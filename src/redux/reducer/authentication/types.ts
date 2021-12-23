export interface AuthState {
    isLogin: boolean,
    email: string,    
    access: string,
    refresh: string
}

export interface LoginPayLoad {
    email: string,
    password: string,
}