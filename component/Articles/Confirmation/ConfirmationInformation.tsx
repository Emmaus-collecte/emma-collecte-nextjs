import React from 'react'
import useStore from '../../../lib/store/useStore'
import EditIcon from '../../../public/icons/edit.svg'
import Link from 'next/link'

const ConfirmationInformation = () => {
  const { information } = useStore()
  return (
    <>
      <div className="bg-light-secondary rounded-xl p-4 mt-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <p className="text-xl">Informations</p>
            <div className="bg-secondary w-full h-0.5" />
          </div>
          <div>
            <Link href={'/forms/collection/informations'}>
              <button className="bg-ternary rounded-full p-2 text-white flex items-center p-1">
                <EditIcon className="fill-current mr-1" />
                Modifier
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm">
          <div className="col-start-1 flex flex-col">
            <p className="m-2">
              Nom/Prénom: {information.firstName} {information.lastName}
            </p>
            <p className="m-2">Email: {information.email}</p>
            <p className="m-2">N° de téléphone: {information.phone}</p>
          </div>
          <div className="col-start-2 flex flex-col">
            <p className="m-2">
              Adresse: {information.address}, {information.city.cp}{' '}
              {information.city.name}
            </p>
            <p className="m-2">Complément: {information.more}</p>
            <p className="m-2">
              Plage horaire: {information.timeWindow.startHour} -{' '}
              {information.timeWindow.endHour}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full h-0.5 mx-auto my-4" />
    </>
  )
}

export default ConfirmationInformation
