import React, { useEffect } from 'react'
import ShoppingIcon from '../../../public/icons/shopping.svg'
import useStore from '../../../lib/store/useStore'
import CartItem from './CartItem'
import Link from 'next/link'

interface CartProps {
  isCartOpen: boolean
  closeCart: () => void
}

const Cart = ({ isCartOpen, closeCart }: CartProps) => {
  const { cart, points } = useStore()

  // console.log(cart)
  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <div
      className={`bg-primary absolute top-0 right-0 h-full w-80 rounded-l-3xl flex flex-col ${
        isCartOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="grid cols-3 mt-4 flex items-center ">
        <button
          type="button"
          className="col-start-1 text-3xl flex justify-around font-thin text-white"
          onClick={closeCart}
        >
          x
        </button>

        <div className="col-start-2 flex">
          <div className="bg-ternary text-white w-full flex p-4 rounded-3xl mx-4 justify-around">
            {points}/30
            <ShoppingIcon className="fill-current" />
          </div>
        </div>
      </div>
      <div>
        {cart.length !== 0 ? (
          cart.map((cartItem) => <CartItem item={cartItem} />)
        ) : (
          <p className="m-8 text-white">
            Aucun article dans le panier de donations
          </p>
        )}
      </div>
      <div className="flex-grow flex" />
      <Link href="/forms/collection/informations/">
        <button
          type="button"
          disabled={cart.length === 0}
          className="bg-secondary rounded-lg h-20 text-2xl font-bold disabled:opacity-20 m-8"
        >
          Valider mon panier
        </button>
      </Link>
    </div>
  )
}

export default Cart
