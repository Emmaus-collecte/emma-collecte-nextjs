import { GetState, SetState } from 'zustand'
import { State } from './useStore'
import { CartModel } from '../../models/cart.model'
import { CollectionInformationModel } from '../../models/collectionInformation.model'
import { CityModel } from '../../models/city.model'
import { TimeWindowModel } from '../../models/timeWindow.model'

export interface CollectionSlice {
  cart: Array<CartModel>
  points: number
  information: CollectionInformationModel
  setCart: (article: CartModel) => void
  deleteCartItem: (article: CartModel) => void
  updatePoints: () => void
}

const createCollectionSlice = (set: SetState<State>, get: GetState<State>) => ({
  cart: [],
  points: 0,
  information: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    more: '',
    city: {
      id: '',
      name: '',
      cp: 0,
    },
    timeWindow: {
      id: '',
      endHour: '',
      startHour: '',
    },
  },

  updatePoints: () => {
    set((state) => {
      let tempPoint = 0
      state.cart.map((s: CartModel) => {
        tempPoint += s.price * s.options.quantity * s.quantity
      })
      state.points = tempPoint
    })
  },

  setCart: (article: CartModel) => {
    set((state) => {
      state.cart.push(article)
      state.updatePoints()
    })
  },

  deleteCartItem: (article: CartModel) => {
    set((state) => {
      state.cart.splice(
        state.cart.findIndex((sa: CartModel) => sa === article),
        1
      )
      state.updatePoints()
    })
  },

  setCollectionInformation: (information: CollectionInformationModel) => {
    set((state) => {
      state.information = information
    })
  },
})

export default createCollectionSlice
