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

console.log(Direction1.Left)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction2.Left)

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