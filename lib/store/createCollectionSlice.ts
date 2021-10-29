import { GetState, SetState } from 'zustand'
import { State } from './useStore'
import { CartModel } from '../../models/cart.model'
import { CollectionInformationModel } from '../../models/collectionInformation.model'
import { CityModel } from '../../models/city.model'
import { TimeWindowModel } from '../../models/timeWindow.model'

export interface CollectionSlice {
  collection: {
    cart: Array<CartModel>
    points: number
    information: Object
  }
  setCart: (article: CartModel) => void
  deleteCartItem: (article: CartModel) => void
  updatePoints: () => void
}

const createCollectionSlice = (set: SetState<State>, get: GetState<State>) => ({
  collection: {
    cart: [],
    points: 0,
    information: {},
  },

  updatePoints: () => {
    set((state) => {
      let tempPoint = 0
      void state.collection.cart.map((s: CartModel) => {
        tempPoint += s.price * s.options.quantity * s.quantity
      })
      state.collection.points = tempPoint
    })
  },

  setCart: (article: CartModel) => {
    set((state) => {
      void state.collection.cart.push(article)
      void state.updatePoints()
    })
  },
  deleteCartItem: (article: CartModel) => {
    set((state) => {
      void state.collection.cart.splice(
        state.collection.cart.findIndex((sa: CartModel) => sa === article),
        1
      )
      void state.updatePoints()
    })
  },

  setCollectionInformation: (information: CollectionInformationModel) => {
    set((state) => {
      state.collection.information = information
    })
  },
})

export default createCollectionSlice
