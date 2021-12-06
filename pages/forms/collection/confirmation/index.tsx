import React from 'react'
import useStore from '../../../../lib/store/useStore'
import ConfirmationInformation from '../../../../component/Articles/Confirmation/ConfirmationInformation'
import BackButton from '../../../../component/common/BackButton'
import ConfirmationDonate from '../../../../component/Articles/Confirmation/ConfirmationDonate'
import { isEmpty } from '../../../../lib/utils/isEmpty'

const Confirmation = () => {
  return (
    <>
      <BackButton
        name={'Retour aux informations'}
        href={'/forms/collection/informations'}
      />
      <div className="mt-4">
        <p className="text-2xl">Récapitulatif</p>
        <div className="bg-secondary w-2/5 h-1" />
      </div>
      <ConfirmationInformation />
      <ConfirmationDonate />
      <button className="bg-secondary w-3/4 h-12 rounded-xl flex items-center justify-center mx-auto font-bold disabled:opacity-20 mt-4">
        Confirmer
      </button>
    </>
  )
}

export default Confirmation
