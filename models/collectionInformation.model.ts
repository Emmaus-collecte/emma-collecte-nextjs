import { TimeWindowModel } from './timeWindow.model'
import { CityModel } from './city.model'

export interface CollectionInformationModel {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  more: string
  city: CityModel
  timeWindow: TimeWindowModel
}
