// https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members

abstract class TakePhoto {
  constructor(
    public cameraMode: boolean,
    public filter: boolean
  ) {}

  abstract createStory(): void
  getReelTime(): number {
    return 8
  }
}

class tiktok extends TakePhoto {
  constructor(
    public cameraMode: boolean,
    public filter: boolean,
    public burst: number
  ) {
    super(cameraMode, filter)
  }

  createStory(): void {
    console.log('Story Created')
  }
}

const tiktokClone = new tiktok(true, true, 3)
tiktokClone.getReelTime()
