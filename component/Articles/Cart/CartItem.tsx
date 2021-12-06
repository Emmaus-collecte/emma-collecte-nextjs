import React from 'react'
import { CartModel } from '../../../models/cart.model'
import Toaster from '../../../public/illustrations/Toaster02.png'
import TrashIcon from '../../../public/icons/trash.svg'
import Image from 'next/image'
import useStore from '../../../lib/store/useStore'

interface CartItemProps {
  item: CartModel
  isCart: boolean
  className?: string
}

const defaultProps: Partial<CartItemProps> = {
  className: '',
}

const CartItem = ({ item, isCart, className }: CartItemProps) => {
  const { deleteCartItem } = useStore()

  const handleDelete = async () => {
    deleteCartItem(item)
  }
  return (
    <>
      <div
        className={`grid cols-3 p-2 m-4 rounded-2xl bg-light-secondary font-light relative ${className}`}
      >
        <div className="col-start-1 w-3/4">
          <Image src={Toaster} alt="toaster" />
        </div>
        <div className="col-start-2">
          <p className="font-bold">{item.name}</p>
          <p>Qualité : {item.quality}</p>
          <p>Option : {item.options.name}</p>
          <p>Quantité : {item.quantity}</p>
        </div>
        <button
          type="button"
          className={`bg-ternary rounded-full w-8 h-8 absolute -top-1 -left-1 flex justify-center items-center ${
            isCart ? 'block' : 'hidden'
          }`}
          onClick={handleDelete}
        >
          <TrashIcon className="fill-current text-white" />
        </button>
      </div>
    </>
  )
}

CartItem.defaultProps = defaultProps
export default CartItem
