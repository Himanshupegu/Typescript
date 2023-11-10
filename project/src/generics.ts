// https://www.typescriptlang.org/docs/handbook/2/generics.html

const score: Array<number> = []
const names: Array<string> = []

function identityOne(
  val: boolean | number
): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: any): any {
  return val
}

identityThree(true)

function identityFour<T>(val: T): T {
  console.log(val)

  return val
}

interface Bootle {
  brand: string
  type: number
}

// identityFour<Bootle>({brand: 'pegu', type: 7})

function getSearchProducts<T>(product: T[]): T {
  // do some database operations
  const myIndex = 3
  return product[myIndex]
}

const getMoreSearchProduch = <Type,>(
  products: Type[]
): Type => {

  // do some database operations
  const myIndex = 7
  return products[myIndex]
}
