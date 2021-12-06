import React, { useState } from 'react'
import BackButton from '../../../../component/common/BackButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { initializeApollo } from '../../../../apollo/client'
import { gql } from '@apollo/client'
import { CityModel } from '../../../../models/city.model'
import { TimeWindowModel } from '../../../../models/timeWindow.model'
import useStore from '../../../../lib/store/useStore'
import { CollectionInformationModel } from '../../../../models/collectionInformation.model'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query getCities {
        getCities {
          id
          name
          cp
        }
        getTimeWindows {
          id
          startHour
          endHour
        }
      }
    `,
  })

  return {
    props: {
      cities: data.getCities,
      timeWindows: data.getTimeWindows,
    },
  }
}

interface InformationsProps {
  cities: Array<CityModel>
  timeWindows: Array<TimeWindowModel>
}
const Informations = ({ cities, timeWindows }: InformationsProps) => {
  const { setCollectionInformation } = useStore()
  const router = useRouter()

  const [selectedCity, setSelectedCity] = useState({})
  const [selectedTimeWindow, setSelectedTimeWindow] = useState({})

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Le prénom est requis'),
    lastName: Yup.string().required('Le nom est requis'),
    email: Yup.string().required("L'email est requis"),
    phone: Yup.string()
      .matches(phoneRegExp, 'Numéro de téléhpone invalide')
      .required('Le numéro de téléphone est requis'),
    address: Yup.string().required("L'adresse est requise"),
    more: Yup.string(),
    city: Yup.string().required('La ville est requise'),
    timeWindow: Yup.string().required('La plage horaire est requise'),
  })
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      more: '',
      city: '',
      timeWindow: '',
    },
    validationSchema,
    onSubmit(values) {
      let copyValues: any = { ...values }
      copyValues.city = selectedCity
      copyValues.timeWindow = selectedTimeWindow
      const collectionInformation: CollectionInformationModel = copyValues
      setCollectionInformation(collectionInformation)
      router.replace('/forms/collection/confirmation')
    },
  })

  const handleSelect = (event: any, field: string) => {
    const selectValue = event.target.value
    if (field === 'timeWindow') {
      const timeWindow = timeWindows.find((tw) => tw.id === selectValue) || {}
      setSelectedTimeWindow(timeWindow)
    } else if (field === 'city') {
      const city = cities.find((c) => c.id === selectValue) || {}
      setSelectedCity(city)
    }
    formik.setFieldValue(field, selectValue)
  }
  return (
    <div>
      <BackButton name="Retour aux articles" href="/forms/collection" />
      <div className="mt-4">
        <p className="text-2xl">Informations</p>
        <div className="bg-secondary w-2/5 h-1" />
      </div>
      <form
        className="bg-light-secondary w-full h-full rounded-2xl mt-4 grid grid-cols-2 grid-rows-2 grid-rows-none"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-start-1 flex flex-col relative">
          <div className="input-form">
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              {...formik.getFieldProps('firstName')}
              className={`${
                formik.touched.firstName && formik.errors.firstName
                  ? 'input-error'
                  : ''
              }`}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="lastName">Nom :</label>
            <input
              type="text"
              {...formik.getFieldProps('lastName')}
              className={`${
                formik.touched.lastName && formik.errors.lastName
                  ? 'input-error'
                  : ''
              }`}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              {...formik.getFieldProps('email')}
              className={`${
                formik.touched.email && formik.errors.email ? 'input-error' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="phone">N° de téléphone :</label>
            <input
              type="text"
              {...formik.getFieldProps('phone')}
              className={`${
                formik.touched.phone && formik.errors.phone ? 'input-error' : ''
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}
          </div>
          <div className="bg-primary h-4/5 mx-auto w-1 absolute right-0 rounded-full top-0 bottom-0 my-auto" />
        </div>
        <div className="col-start-2 flex flex-col relative">
          <div className="input-form">
            <label htmlFor="address">Adresse :</label>
            <input
              type="text"
              {...formik.getFieldProps('address')}
              className={`${
                formik.touched.address && formik.errors.address
                  ? 'input-error'
                  : ''
              }`}
            />
            {formik.touched.address && formik.errors.address && (
              <div className="error">{formik.errors.address}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="more">Complément (Batiment, Etage ...) :</label>
            <input
              type="text"
              {...formik.getFieldProps('more')}
              className={`${
                formik.touched.more && formik.errors.more ? 'input-error' : ''
              }`}
            />
            {formik.touched.more && formik.errors.more && (
              <div className="error">{formik.errors.more}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="city">Ville :</label>
            <select
              {...formik.getFieldProps('city')}
              onChange={(value) => handleSelect(value, 'city')}
              className={`${
                formik.touched.city && formik.errors.city ? 'input-error' : ''
              }`}
            >
              <option value="" selected disabled hidden>
                Sélectionnez une ville
              </option>
              {cities.map((city) => (
                <option value={city.id} onClick={() => setSelectedCity(city)}>
                  {city.cp} - {city.name}
                </option>
              ))}
            </select>
            {formik.touched.city && formik.errors.city && (
              <div className="error">{formik.errors.city}</div>
            )}
          </div>
          <div className="input-form">
            <label htmlFor="timeWindow">Plage horaire :</label>
            <select
              {...formik.getFieldProps('timeWindow')}
              onChange={(value) => handleSelect(value, 'timeWindow')}
              className={`${
                formik.touched.timeWindow && formik.errors.timeWindow
                  ? 'input-error'
                  : ''
              }`}
            >
              <option value="" selected disabled hidden>
                Sélectionnez une plage horaire
              </option>
              {timeWindows.map((timeWindow) => (
                <option value={timeWindow.id}>
                  {timeWindow.startHour} - {timeWindow.endHour}
                </option>
              ))}
            </select>
            {formik.touched.timeWindow && formik.errors.timeWindow && (
              <div className="error">{formik.errors.timeWindow}</div>
            )}
          </div>
        </div>
        <div className="py-8 col-start-1 col-end-3 row-start-2">
          <button
            type="submit"
            className="bg-secondary w-3/4 h-12 rounded-xl flex items-center justify-center m-auto font-bold"
            onClick={() => formik.submitForm()}
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Informations
