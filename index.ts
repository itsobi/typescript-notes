// Basic Types
let id: number = 5;
let company: string = "Google";
let isPublished: boolean = true;
// "x" can be reassigned any type due to the "any" type
let x: any = "string";
x = 12;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Obi", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Obi"],
  [2, "John"],
  [3, "Bob"],
];

// Union
let newId: string | number;
newId = 23;

// Enum
enum direction1 {
  up,
  down,
  left,
  right,
}
console.log(direction1.right); // 3

enum direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
console.log(direction1.right); // right

// Objects
// types can be used with primitives & unions.
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Obi",
};

// Type Assertion
let cid: any = 12;
let customerId = cid as number;

// Functions
function addNumbers(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Obi",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const obi = new Person(1, "Obi");
const jim = new Person(2, "Jim");
console.log(obi.register()); // Obi is now registered!

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(4, "Joe", "Developer");
console.log(emp.position); // Developer
console.log(emp.register()); // Joe is now registered!

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let newArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["obi", "bill", "john"]);

strArray.push("logan");
