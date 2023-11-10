// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

interface User2 {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponName: string, value: number): number
}

interface User2{ // Reopening of the interface
  githubToken: string 
}

interface Admin extends User2 {
  role: 'admin' | 'ta' | 'learner'
}

const pegu: User2 = {
  dbId: 6969,
  email: 'himanshu@pegu.com',
  userId: 777,
  githubToken: "212durjfff",
  startTrail: () => {
    return 'trail started'
  },
  getCoupon: (name: 'pegu7', off: 17) => {
    return 1
  },
}
const pegu2: Admin = {
  dbId: 6969,
  role: 'admin',
  email: 'himanshu@pegu.com',
  userId: 777,
  githubToken: "212durjfff",
  startTrail: () => {
    return 'trail started'
  },
  getCoupon: (name: 'pegu7', off: 17) => {
    return 1
  },
}


pegu.email = 'himanshupegu21@gmail.com'

export {}
