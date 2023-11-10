// const user: (string | number)[] = ['hp', 1]
let tUser: [string, number, boolean]
tUser = ['hp', 777, true]

let rgb: [number, number, number] = [232, 121, 125]

type User = [number, string]

const newUser: User = [11222, 'pegu@gmail.com']

newUser[1] = 'hp@gmail.com'
newUser.push('pegu')

export {}
