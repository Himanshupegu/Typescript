function addTwo(num: number): number {
  return num + 2
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, email: string, isPaid: boolean = true) {}

addTwo(5)
getUpper('pegu')

signUpUser('pegu', 'pegu@gmail.com', true)
loginUser('pegu', 'pegu@gmail')

export {}
