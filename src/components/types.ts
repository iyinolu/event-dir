import { AuthState } from "../redux/reducer/authentication/types";
import { Event } from "../redux/types";

// Component Props
export type EventListProps = {
  events: Event[];
};
export type NavProps = {
  userState: AuthState;
  sideBarState: any;
  setSideBarState: any;
  username: string;
};
export type ShowEventProps = {
  viewEvent: ViewEventState;
  setViewEvent: any;
};
// Component States
export type FormDataState = {
  title: string;
  content: string;
  category: number | undefined;
};
export type ViewEventState = {
  data: Event | null;
  open: boolean;
};
// Others
export type CategoryOptionsRef = {
  value: number;
  label: string;
};
