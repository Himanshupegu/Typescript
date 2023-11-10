interface Database {
  connection: string
  userName: string
  password: string
}

function Student<M, F extends Database>(
  valOne: M,
  valTwo: F
): object {
  return {
    valOne,
    valTwo,
  }
}

Student(true, {
  connection: 'yes',
  userName: 'pegu',
  password: 'pegu777',
})

interface Quiz {
  name: string
  type: string
}

interface Course {
  name: string
  author: string
  subject: string
}

class Sellable<Type> {
  public cart: Type[] = []

  addToCar(product: Type) {
    this.cart.push(product)
  }
}
