import create from 'zustand'

import createArticlesSlice, { ArticlesSlice } from './createArticlesSlice'
import createCollectionSlice, { CollectionSlice } from './createCollectionSlice'
import { devtools } from 'zustand/middleware'

export type State = ArticlesSlice & CollectionSlice

// @ts-ignore
const store = (set, get) => ({
  ...createArticlesSlice(set, get),
  ...createCollectionSlice(set, get),
})

const useStore = create(devtools(store))

export default useStore
