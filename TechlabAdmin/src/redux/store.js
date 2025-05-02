import { legacy_createStore } from "redux";
import { sidebarReducer } from "./toggleReducer";

export const store = legacy_createStore(sidebarReducer)