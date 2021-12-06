import CollecteIllustration from '../public/illustrations/collecte.svg'
import DepotIllustration from '../public/illustrations/depot.svg'
import { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <ToastContainer className="h-2" />

      <div className="p-10">
        <div className="mb-16 text-4xl">
          <p>Bienvenue sur Emma-Collecte !</p>
          <div className="bg-secondary w-2/5 h-1" />
        </div>
        <div className="flex flex-col">
          <div className="group bg-ternary rounded-t-2xl h-80 mb-8 grid grid-cols-2 hover:bg-ternary-hovered">
            <div className="col-start-1 flex flex-row justify-center items-center">
              <div className="flex flex-col m-auto">
                <p className=" text-white text-3xl mb-2">
                  Faites une demande <br />
                  de collecte à domicile
                </p>
                <div className="bg-secondary w-4/5 h-1 ml-1.5 mb-2 transform group-hover:rotate-3 transition duration-500 ease-in-out" />
                <div className="bg-secondary w-4/5 h-1 ml-10 transform group-hover:-rotate-3 transition duration-500 ease-in-out" />
              </div>
              <div className="bg-white h-4/5 w-8 rounded mr-auto transform group-hover:rotate-12 transition duration-500 ease-in-out" />
            </div>
            <div className="col-start-2 flex flex-row -mt-10">
              <CollecteIllustration className="h-home-illu" />
            </div>
          </div>
          <div className="group bg-secondary rounded-b-2xl h-80 grid grid-cols-2 hover:bg-secondary-hovered transform">
            <div className="col-start-1 flex flex-row">
              <DepotIllustration className="h-home-illu -mt-10 " />
            </div>
            <div className="col-start-2 flex flex-row justify-center items-center">
              <div className="bg-white h-4/5 w-8 rounded mr-auto transform group-hover:rotate-12 transition duration-500 ease-in-out" />
              <div className="flex flex-col m-auto">
                <p className="text-3xl mb-2">
                  Ou réserver un créneaux <br />
                  dans un de nos points drives
                </p>
                <div className="bg-white w-4/5 h-1 ml-1.5 mb-2 transform group-hover:rotate-3 transition duration-500 ease-in-out" />
                <div className="bg-white w-4/5 h-1 ml-10 transform group-hover:-rotate-3 transition duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
