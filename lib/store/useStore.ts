import create from "zustand"

import  createArticlesSlice, {ArticlesSlice} from "./createArticlesSlice"
import createCartSlice, {CartSlice} from "./createCartSlice";
import {devtools} from "zustand/middleware";

export type State = ArticlesSlice & CartSlice;

// @ts-ignore
const store = (set, get) => ({
        ...createArticlesSlice(set, get),
        ...createCartSlice(set,get)
});

const useStore = create(devtools(store))

export default useStore;