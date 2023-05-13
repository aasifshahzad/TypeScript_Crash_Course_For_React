// Function
function fireUser(firstName, age, isNice) {
    // ...
    //
}
// alternatively as an arrow function
const Userr = (firstName, age, isNice) => {
    // ...
};
function fire({ firstName, age, isNice }) {
    // ...
}
var UserRole;
(function (UserRole) {
    UserRole["CEO"] = "ceo";
    UserRole["CTO"] = "cto";
    UserRole["SUBORDINATE"] = "inferior-person";
})(UserRole || (UserRole = {}));
function foUser({ firstName, age, role }) {
    // ...
}
// alternatively as arrow function
const fUser = ({ firstName, age, role }) => {
    // ...
};
function fooUser(user) {
    //console.log(user);
    return user;
}
/*----------------------------------------------------------------------- */
// Challenge 1: type the function parameters
function updateProduct1(name, price, images) {
    // update logic here ...
    //console.log({ name, price, images });
}
function updateProduct2(name, price, images) {
    // update logic here ...
    return { name, price, images };
}
// product should be of type Product (to be implemented)
const product = updateProduct2("Shampoo", 2.99, ["image-1.png", "image-2.png"]);
console.log(product);
function updateProduct3({ name, price, images }) {
    // update logic here ...
    return { name, price, images };
}
const product2 = updateProduct3({
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
});
function updateProduct4(product) {
    // any logic
    return product;
}
export {};
