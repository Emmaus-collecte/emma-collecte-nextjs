export interface CartModel {
  id: string
  name: string
  price: number
  isCollection: boolean
  description: string
  options: {
    name: string
    quantity: number
  }
  quantity: number
  quality: string
}
