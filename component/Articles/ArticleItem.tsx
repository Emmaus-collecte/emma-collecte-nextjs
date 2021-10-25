import Image from 'next/image'
import Toaster from '../../public/illustrations/Toaster02.png'
import { ArticleModel } from '../../models/article.model'
import Link from 'next/link'

interface ItemProps {
  item: ArticleModel
}

const ArticleItem = ({ item }: ItemProps) => {
  return (
    <Link
      href={{
        pathname: '/forms/collection/details/[id]',
        query: { id: item.id },
      }}
    >
      <a>
        <div className="bg-secondary w-64 rounded-3xl m-3">
          <div className="p-10 bg-light-secondary rounded-3xl">
            <Image src={Toaster} alt="toaster" />
          </div>
          <div className="p-6 grid gris-cols-2 grid-rows-2 gap-y-2 flex">
            <p className="col-start-1 row-start-1">{item.name}</p>
            <p className="col-start-1 row-start-2 text-xs font-light">
              {item.options.length} options
            </p>
            <p className="col-start-2 row-start-2 flex justify-end">
              {item.price} à{' '}
              {Math.max.apply(
                null,
                item.options.map((i) => i.quantity)
              ) * item.price}{' '}
              pts
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleItem
