export interface AuthState {
    isLogin: boolean,
    email: string,    
    access: string,
    refresh: string,    
    id:number,
    is_active: boolean,
    username: string,
    firstname: string,
    lastname: string
}

export interface LoginPayLoad {
    email: string,
    password: string,
}