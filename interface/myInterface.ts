

interface User2 {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponName: string, value: number): number
}

const pegu: User2 = {
  dbId: 6969,
  email: 'himanshu@pegu.com',
  userId: 777,
  startTrail: () => {
    return 'trail started'
  },
  getCoupon: (name: 'pegu7', off: 17) => {
    return 1
  },
}

pegu.email = 'himanshupegu21@gmail.com'
export {}
