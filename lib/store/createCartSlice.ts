import { GetState, SetState } from 'zustand'
import { State } from './useStore'
import { CartModel } from '../../models/cart.model'

export interface CartSlice {
  cart: Array<CartModel>
  points: number
  setCart: (article: CartModel) => void
  deleteCartItem: (article: CartModel) => void
  updatePoints: () => void
}

const createCartSlice = (set: SetState<State>, get: GetState<State>) => ({
  cart: [],
  points: 0,

  updatePoints: () => {
    set((state) => {
      let tempPoint = 0
      void state.cart.map((s: CartModel) => {
        tempPoint += s.price * s.options.quantity * s.quantity
      })
      state.points = tempPoint
    })
  },

  setCart: (article: CartModel) => {
    set((state) => {
      void state.cart.push(article)
      void state.updatePoints()
    })
  },
  deleteCartItem: (article: CartModel) => {
    set((state) => {
      void state.cart.splice(
        state.cart.findIndex((sa: CartModel) => sa === article),
        1
      )
      void state.updatePoints()
    })
  },
})

export default createCartSlice
