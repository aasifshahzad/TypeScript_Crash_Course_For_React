//TypeScript Basics Required For React


// Primitives
var a : string // e.g. "Pat"
var b : boolean // e.g. true
var c : number // e.g. 23 or 1.99

//Arrays
var d : number[] // e.g. [1, 2, 3]
var e : string[] // e.g. ["Lisa", "Pat"]
type User = {
    firstName: string;
    age: number;
    isNice: boolean;
    role: string;
    skills: string[];
    friends?: undefined // optional type

}
// Objects
let user: User = {
    firstName: "Pat",
    age: 23,
    isNice: false,
    role: "CTO",
    skills: ["CSS", "HTML", "jQuery"],
    friends: undefined
}

/*----------------------------------------------------------------------- */
// Challenge: create a type describing this object

type Product = {
    name : string,
    price : number,
    images : string[],
    status : string,
}


const product : Product = {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
    status: "published",
};


