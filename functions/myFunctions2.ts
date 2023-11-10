// function getVa1ue(myVa1: number): boolean {
//   if (myVa1 > 5) {
//     return true
//   }
//   return '200 0K'
// }

const getHello = (): string => {
  return ''
}

const heros = ['thro', 'spiderman', 'ironman']

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errMsg: string): void {
  console.log(errMsg)
}
function handelError(errMsg: string): never {
  throw new Error(errMsg)
}
export {}
