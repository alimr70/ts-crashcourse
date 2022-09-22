// Basic Types
let id: number = 5
let company: string = 'Company name'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'hi']

// Tuple
let person: [number, string, boolean] = [1, 'Ali', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Ali'],
  [2, 'Maher'],
  [3, 'Mohammed']
]

// Union
let pid: string | number

pid = 22
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

// console.log(Direction1.Left)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// console.log(Direction2.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Loli'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum (x: number, y: number): number {
  return x + y
}

// console.log(addNum(4, 2))

// Void
function log (message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Loli'
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y

interface PersonInterface {
  id: number,
  name: string,
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string
  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }
  register(){
    return `${this.name} is now registered`
  }
}

const ali = new Person(1, 'ali')
// console.log(ali.register())

// Subclasses
class Employee extends Person {
  postition: string

  constructor(id: number, name: string, position: string){
    super(id, name)
    this.postition = position
  }
}

// const emp = new Employee(3, 'Moazaf', 'Developer')
// console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(['ali', 'maher', 'mohammed'])

// numArr.push(5)