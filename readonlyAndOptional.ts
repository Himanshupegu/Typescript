type User = {
  readonly _id: string //Readonly
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number //Optional
}

let myUser: User = {
  _id: '1212212',
  name: 'pegu',
  email: 'pegu@gmail.com',
  isActive: false,
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber &
  cardDate & {
    cvv: number
  }


myUser.email = 'hpegu@gmail.com'

export {}
