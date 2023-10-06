import { legacy_createStore } from "redux";
import { Reducer } from "./Recucer";

export const Store = legacy_createStore(Reducer)