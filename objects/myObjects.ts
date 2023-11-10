const User = {
  name: 'pegu',
  email: 'pegu@gmail.com',
  isActive: true,
}

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: 'pegu', isPaid: false, email: 'Pegu@gmail.com' }

// createUser({name: 'pegu', isPaid: true})
createUser(newUser)

function createCourse(): { name: string; price: number } {
  return { name: 'reactjs', price: 199 }
}

export {}
