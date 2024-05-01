export type Guitar = {
    id: number
    name: string
    image: string
    image2: string
    description: string
    price: number
  }
  
  export type CartItem = Guitar & {
    cantidad: number
  }

  export type GuitarID = Guitar ['id']