// var x : number|string //union
// x= 5
// x ="marwa"

// function a (x:number, y:number, op:string):number|string {
//     let result:number|string
//     switch(op){
//         case "+": result = x+y; break
//         case "-": result = x-y; break
//         case "*": result = x*y; break
//         case "/": result = x/y; break
//         default: result="not available"
//     }
//     return result
// }
// a(5,3,'+')

//oop
// class Teacher{
//     name:string
//     age:number
//     readonly code:number = 5
//     constructor(userName:string, userAge:number=10){
//         this.name = userName
//         this.age = userAge
//     }
// }

// const t1 = new Teacher('mona')
// console.log(t1)

//overload
//override
//access modifiers => private public protected
// class User{
//     private name:string ="marwa"
//     protected age:number =50
//     show(){
//         console.log(`${this.name} - ${this.age}`)
//     }
// }

// class Teacher extends User{
//     show(){
//         console.log("show is here")
//         console.log(this.age)
//     }
// }

// const t1 = new Teacher()
// // console.log(t1.name)
// t1.show()

// t1.age





// class User=> name, age, address , Teacher=> +salary, Student +grades [{subject:"", value:50 }]
//setter getter
interface Subject{
    subjectName: string
    subjectGrade?: number
}

class User{
    protected name:string
    protected age:number
    protected address:string
    constructor( name:string, age:number, address:string ){
        this.name = name
        this.age = age
        this.address=address
    }
    set _name(val:string){this.name=val}
    get _name(){return this.name}
    static c(){
        console.log("hello")
    }
}
class Teacher extends User{
    private salary:number
    constructor(name:string, age:number, address:string, salary:number){
        super(name,age,address)
        this.salary=salary
    }
}
class Student extends User{
    private sub:Subject[] 
        constructor(name:string, age:number, address:string, sub:Subject[]=[]){
            super(name,age,address)
            this.sub=sub
        }
}
abstract class X{
    abstract a():void
}
const u1 = new User("marwa", 36, "home")
u1._name = "mona"
console.log(u1._name)
User.c()

class z extends User implements X{
    a(){
    }
}






















