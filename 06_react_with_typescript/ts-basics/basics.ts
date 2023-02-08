// Primitives

let age: number=25;
age = 28;

let userName: string;
userName = 'Vad';

let isInstructor: boolean;
isInstructor = false; 

// More complex types

let hobbies: string[];
hobbies = ['Sport', 'Piano', 'A'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Vlad',
    age: 28
};

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';
// course = 123141; NOT possible bcs its a string type


// Union types (more than one type allowed)
let courseU: string | number | boolean = 'Text';
courseU = true;

// Type Alias

type Person = {
    name: string;
    age: number;
}

let person3: Person;

let person2: Person[];

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 7);
const stringArray = insertAtBeginning(['b', 'c', 'd'], 'a');
console.log(updatedArray);