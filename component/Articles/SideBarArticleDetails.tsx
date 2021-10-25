import React, { useState } from 'react'
import { ArticleModel } from '../../models/article.model'
import FavoriteIcon from '../../public/icons/favorite.svg'
import useStore from '../../lib/store/useStore'
import { use } from 'ast-types'
import { useRouter } from 'next/router'

export interface Props {
  article: ArticleModel
}

const SideBarArticleDetails = ({ article }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const [option, setOption] = useState(article.options[1])
  const [quality, setQuality] = useState('')
  const [state, setState] = useState([
    {
      name: 'Bon état',
      icon: <FavoriteIcon className="fill-current text-green" />,
      selected: false,
    },
    {
      name: 'Etat moyen',
      icon: <FavoriteIcon className="fill-current text-secondary" />,
      selected: false,
    },
    {
      name: 'Mauvais etat',
      icon: <FavoriteIcon className="fill-current text-ternary" />,
      selected: false,
    },
  ])

  const selectQuality = (quality: any) => {
    const copyState = [...state]
    copyState.map((s) => {
      if (s.name === quality.name) {
        s.selected = true
        setQuality(s.name)
      } else {
        s.selected = false
      }
    })
    setState(copyState)
  }

  const selectOption = (e: any) => {
    const selectedOption: any = article.options.find(
      (o) => o.name === e.target.value
    )
    setOption(selectedOption)
  }

  const { setCart } = useStore()

  const router = useRouter()

  const addToCart = () => {
    const articleCart: any = { ...article }
    articleCart.quality = quality
    articleCart.options = option
    articleCart.quantity = quantity
    setCart(articleCart)
    router.replace('/forms/collection')
  }

  return (
    <>
      <div>
        <p className="text-center text-white text-3xl mb-2">{article.name}</p>
        <div className="bg-secondary w-full h-1 rounded-full" />
      </div>
      <div className="flex flex-col my-4">
        <p className="text-white text-lg my-3">Options :</p>
        <select
          className="rounded-lg h-10 bg-light-secondary"
          onChange={selectOption}
        >
          {article.options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <p className="text-white text-lg my-3">Etat général :</p>
        <div className="flex flex-row justify-between">
          {state.map((s) => {
            return (
              <button
                type="button"
                className={`flex flex-col items-center w-28 rounded-lg border-4 border-primary${
                  s.selected ? 'border-4 border-secondary' : ''
                }`}
                onClick={() => selectQuality(s)}
              >
                <div className="bg-light-secondary p-2 rounded w-16 flex justify-center">
                  {s.icon}
                </div>
                <p className="text-white text-sm">{s.name}</p>
              </button>
            )
          })}
        </div>
      </div>
      <div className="my-4">
        <p className="text-white text-lg my-3">Quantité :</p>
        <div className="bg-light-secondary h-10 flex justify-between items-center px-1 rounded-lg">
          <button
            type="button"
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button type="button" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="flex-grow my-4">
        <div className="flex justify-center mx-auto bg-ternary rounded-full h-16 items-center w-36 text-white text-center">
          <p>{article.price * quantity * option.quantity} points</p>
        </div>
      </div>
      <button
        type="button"
        onClick={addToCart}
        disabled={!quality}
        className="bg-secondary rounded-lg h-20 text-2xl font-bold disabled:opacity-20"
      >
        Ajouter aux donations
      </button>
    </>
  )
}

export default SideBarArticleDetails
