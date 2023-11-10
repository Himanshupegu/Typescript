// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types:~:text=Try-,Union%20Types,-TypeScript%E2%80%99s%20type%20system

let userId: number | string = 'id69696'

type User = {
  userName: string
  id: number
}

type Admin = {
  name: string
  id: number
  authorize: boolean
}

let pegu: User | Admin = { name: 'pegu', id: 69696, authorize: true }
pegu = { userName: 'pegu777', id: 777 }

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase()
  } else {
    id.toFixed
  }
}

// Array

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']

const data3: (string | number | boolean)[] = [1, '77', 77, true]
