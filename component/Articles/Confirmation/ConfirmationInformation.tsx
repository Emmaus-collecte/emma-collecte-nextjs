import React from 'react'
import { CollectionInformationModel } from '../../../models/collectionInformation.model'

interface ConfirmationInformationProps {
  information: CollectionInformationModel
}
const ConfirmationInformation = ({
  information,
}: ConfirmationInformationProps) => {
  return (
    <div>
      <p>Informations</p>
      <div className="grid grid-cols-2">
        <div className="col-start-1 flex flex-col">
          <p>
            Nom/Prénom: {information.firstName} {information.lastName}
          </p>
          <p>Email: {information.email}</p>
          <p>N° de téléphone: {information.phone}</p>
        </div>
        <div className="col-start-2 flex flex-col">
          <p>
            Adresse: {information.address}, {information.city.cp}{' '}
            {information.city.name}
          </p>
          <p>Complément: {information.more}</p>
          <p>
            Plage horaire: {information.timeWindow.startHour} -{' '}
            {information.timeWindow.endHour}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationInformation
