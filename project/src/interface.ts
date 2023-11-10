// Why interface is important

// interface TakePhoto {
//   cameraMode: boolean
//   filter: boolean
//   burst: number
// }

// interface Story {
//   createStore(): boolean
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: boolean,
//     public filter: boolean,
//     public burst: number
//   ) {}
// }

// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: boolean,
//     public filter: boolean,
//     public burst: number,
//     public short: boolean
//   ) {}

//   createStore(): boolean {
//     console.log('Story was created')
//     return true
//   }
// }
