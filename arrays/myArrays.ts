// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays:~:text=boolean%20for%20types.-,Arrays,-To%20specify%20the

const superHeros: string[] = []

const heroPower: Array<number> = []

type User = {
  name: string
  isActive: boolean
}
const allUser: User[] = []

superHeros.push("iman")
heroPower.push(7)

allUser.push({name: "pegu", isActive: false})

export {}