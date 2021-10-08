import Image from 'next/image'
import Toaster from '../../public/illustrations/Toaster02.png'

interface ItemProps {
    item: {
    name: string,
    price: number,
    description: string,
    drive: boolean
}
}

const ArticleItem = ({item}: ItemProps) => {
    console.log(item)
    return (
        <div className="bg-secondary w-64 rounded-3xl m-3">
            <div className="p-10 bg-light-secondary rounded-3xl">
                <Image src={Toaster} alt="toaster"/>
            </div>
            <div className="p-6 grid gris-cols-2 grid-rows-2 flex">
                <p className="col-start-1 row-start-1">{item.name}</p>
                <p className="col-start-1 row-start-2">{item.description}</p>
                <p className="col-start-2 row-start-2  flex justify-end">{item.price} pts</p>
            </div>
        </div>
    )
};

export default ArticleItem;