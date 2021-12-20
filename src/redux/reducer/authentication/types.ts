export interface AuthState {
    isLogin: boolean,
    email: string,    
}

export interface LoginPayLoad {
    email: string,
    password: string,
}