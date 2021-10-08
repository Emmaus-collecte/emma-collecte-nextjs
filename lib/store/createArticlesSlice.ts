import { GetState, SetState } from "zustand";
import { State } from "./useStore";

export interface ArticlesSlice {
    articles: Array<Object>;
    setArticles: () => void;
}

const createArticlesSlice = (set: SetState<State>, get: GetState<State>) => ({
    articles: [],
    setArticles: (articleList: any) => {
        set(() => ({articles: articleList}))
    }
});

export default createArticlesSlice;