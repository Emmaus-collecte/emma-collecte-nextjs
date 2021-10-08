import { GetState, SetState } from "zustand";
import { State } from "./useStore";

export interface CartSlice {
    cart: Array<Object>;
    setCart: () => void;
}

const createCartSlice = (set: SetState<State>, get: GetState<State>) => ({
    cart: [],
    setArticles: (article: any) => {
        set(() => ({cart: cart.push(article)}));
    }
});

export default createCartSlice;