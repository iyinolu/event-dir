export type Event = {
    event_date: string;
    title: string;
    content: string;
    tag: string;
}
export type UserInfo = {
    email: string;
    access: string;
    refresh: string;
    id:number;
    is_active: boolean;
    username: string;
    firstname: string;
    lastname: string;
}
export type UserTokenData = {
    id:number;
    email: string;
    is_active: boolean;
    username: string;
}
export type TokenClaim = {
    exp: number;
    jti: string;
    token_type: string;
    user: UserTokenData;
}

export type EventPayload = {
    event_date: string,
    title: string,
    content: string,
    tag: number|undefined,
    owner: number,
}

export type FetchEventPayload = {
    date: Date
}

export type FetchEventReturnData = {
    data: Event[],
    dateQuery: string
}