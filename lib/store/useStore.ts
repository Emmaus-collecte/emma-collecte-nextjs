import create from "zustand"

import  createArticlesSlice, {ArticlesSlice} from "./createArticlesSlice"

export type State = ArticlesSlice;

const useStore = create<State>((set, get) => ({
        ...createArticlesSlice(set, get),
}));

export default useStore;