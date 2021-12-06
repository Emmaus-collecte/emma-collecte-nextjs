import useStore from '../../../lib/store/useStore'
import CartItem from '../Cart/CartItem'
import React from 'react'
import Link from 'next/link'
import EditIcon from '../../../public/icons/edit.svg'

const ConfirmationDonate = () => {
  const { cart } = useStore()
  return (
    <div className="bg-light-secondary rounded-xl p-4">
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="text-xl">Donations</p>
          <div className="bg-secondary w-full h-0.5" />
        </div>
        <div>
          <Link href={'/forms/collection'}>
            <button className="bg-ternary rounded-full p-2 text-white flex items-center p-1">
              <EditIcon className="fill-current mr-1" />
              Modifier
            </button>
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-2 m-auto">
        {cart.map((cartItem) => (
          <li>
            <CartItem
              className="bg-white max-w-sm"
              item={cartItem}
              isCart={false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConfirmationDonate
