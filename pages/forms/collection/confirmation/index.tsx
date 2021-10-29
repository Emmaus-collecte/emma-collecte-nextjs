import React from 'react'
import useStore from '../../../../lib/store/useStore'
import ConfirmationInformation from '../../../../component/Articles/Confirmation/ConfirmationInformation'

const Confirmation = () => {
  const { cart, points, information } = useStore((state) => state.collection)
  console.log(information)
  // @ts-ignore
  return <ConfirmationInformation information={information} />
}

export default Confirmation
