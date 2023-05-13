// Enums

enum UserRole {
    CEO = "ceo",
    CTO = "cto",
    SUBORDINATE = "inferior-person",
}

type User = {
    firstName: string;
    age: number;
    isNice: boolean;
    role: UserRole;
    skills: string[];
    friends?: User[];
}

const user: User = {
    firstName: "Pat",
    age: 23,
    isNice: false,
    role: UserRole.CTO, // equals "cto"
    skills: ["CSS", "HTML", "jQuery"]
}

/*----------------------------------------------------------------------- */
// Challenge: create a type describing this object
// this time use an enum for the "status" field

enum Status {
    published = "pub",
    draft = "drf"
}
type Product = {
    name : string,
    price: number,
    images: string[],
    status: Status
}
const product = {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
    status: Status.published
} as Product;
