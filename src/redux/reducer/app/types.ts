export type Event = {
    event_date: string;
    title: string;
    content: string;
    tag: string;
}

export type initialAppState = {
    event: Event[];
}