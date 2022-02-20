export type Event = {
    event_date: string;
    title: string;
    content: string;
    tag: string;
}

export type EventCategory = {
    pk: number;
    owner: number;
    category_name: string;
}

export type initialAppState = {
    event: Event[];
    eventCache: any,
    eventCategories: EventCategory[];
    creatingEventDone: boolean;
}