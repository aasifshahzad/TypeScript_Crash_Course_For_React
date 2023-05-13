// Function

function fireUser(firstName: string, age: number, isNice: boolean) {
    // ...
    //
}

  // alternatively as an arrow function
const Userr = (firstName: string, age: number, isNice: boolean) => {
    // ...
}

function fire({ firstName, age, isNice }: {
    firstName: string;
    age: number;
    isNice: boolean;
}) {
    // ...
}

enum UserRole {
    CEO = "ceo",
    CTO = "cto",
    SUBORDINATE = "inferior-person",
}
type User = {
    firstName: string;
    age: number;
    role: UserRole;
}

function foUser({ firstName, age, role }: User) {
    // ...
}

  // alternatively as arrow function
const fUser = ({ firstName, age, role }: User) => {
    // ...
}

function fooUser(user: User){
    //console.log(user);
    return user
}

/*----------------------------------------------------------------------- */
// Challenge 1: type the function parameters

function updateProduct1(name:string, price:number, images: string[]) {
    // update logic here ...
    //console.log({ name, price, images });
}

//console.log(updateProduct1("Shampoo", 2.99, ["image-1.png", "image-2.png"]));


/*----------------------------------------------------------------------- */
// Challenge 2: type the function parameters and the return type

type User1 = {
    name : string;
    price: number;
    images: string[];
};

function updateProduct2(name:string, price: number, images: string[]) : User1 {
    // update logic here ...
    return { name, price, images };
}

  // product should be of type Product (to be implemented)
const product = updateProduct2("Shampoo", 2.99, ["image-1.png", "image-2.png"]);
console.log(product);

/*----------------------------------------------------------------------- */
// Challenge3: type the function parameter and the return type


type Product = {
    name: string;
    price: number;
    images: string[];
};

function updateProduct3({ name, price, images }:Product):Product {
    // update logic here ...
    return { name, price, images };
}

const product2 = updateProduct3({
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
});


function updateProduct4(product:Product) {
    // any logic
    return product;
}