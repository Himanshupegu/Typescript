// class User {
//   public email: string
//   private name: string
//   readonly city: string = 'guwahati'
//   constructor(email: string, name: string){
//     this.email = email
//     this.name = name
//   }
// }

class User {
  // private _courseCount = 1
  protected  _courseCount = 1

  readonly city: string = 'guwahati'
  constructor(public email: string, public name: string, private userId: string) {}

  private deleteToken() {
    console.log('Token Deleted')
  }

  get getAppleId(): string {
    return `apple@${this.userId}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1')
    }
    this._courseCount = courseNum
  }

}

class SubUer extends User {
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4 
  }
}

const pegu = new User('himanshu@pegu.com', 'pegu', 'id11212')
// pegu.city = 'dibrugarh'
