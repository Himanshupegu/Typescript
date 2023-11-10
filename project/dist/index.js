"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = 'guwahati';
    }
    deleteToken() {
        console.log('Token Deleted');
    }
    get getAppleId() {
        return `apple@${this.userId}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUer extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const pegu = new User('himanshu@pegu.com', 'pegu', 'id11212');
// pegu.city = 'dibrugarh'
