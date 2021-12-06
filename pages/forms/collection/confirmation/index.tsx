import React from 'react'
import useStore from '../../../../lib/store/useStore'
import ConfirmationInformation from '../../../../component/Articles/Confirmation/ConfirmationInformation'
import BackButton from '../../../../component/common/BackButton'
import ConfirmationDonate from '../../../../component/Articles/Confirmation/ConfirmationDonate'
import Link from 'next/link'
import { toast } from 'react-toastify'
const Confirmation = () => {
  const { information } = useStore()
  const notify = () => {
    toast.info(`Email de confirmation envoyé à ${information.email}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
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
      <Link href={'/'}>
        <button
          className="bg-secondary w-3/4 h-12 rounded-xl flex items-center justify-center mx-auto font-bold disabled:opacity-20 mt-4"
          onClick={notify}
        >
          Confirmeraa
        </button>
      </Link>
    </>
  )
}

export default Confirmation
