import { GetState, SetState } from 'zustand'
import { State } from './useStore'
import { CartModel } from '../../models/cart.model'

export interface CartSlice {
  cart: Array<CartModel>
  points: number
  setCart: (article: CartModel) => void
  deleteCartItem: (article: CartModel) => void
}

const createCartSlice = (set: SetState<State>, get: GetState<State>) => ({
  cart: [],
  points: 0,
  setCart: (article: CartModel) => {
    set((state) => void state.cart.push(article))
    set(
      (state) =>
        void state.cart.map((s: CartModel) => {
          state.points += s.price * s.options.quantity * s.quantity
        })
    )
  },
  deleteCartItem: (article: CartModel) => {
    set(
      (state) =>
        void state.cart.splice(
          state.cart.findIndex((sa: CartModel) => sa === article),
          1
        )
    )
  },
})

export default createCartSlice
