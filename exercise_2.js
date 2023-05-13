// Enums
var UserRole;
(function (UserRole) {
    UserRole["CEO"] = "ceo";
    UserRole["CTO"] = "cto";
    UserRole["SUBORDINATE"] = "inferior-person";
})(UserRole || (UserRole = {}));
const user = {
    firstName: "Pat",
    age: 23,
    isNice: false,
    role: UserRole.CTO,
    skills: ["CSS", "HTML", "jQuery"]
};
/*----------------------------------------------------------------------- */
// Challenge: create a type describing this object
// this time use an enum for the "status" field
var Status;
(function (Status) {
    Status["published"] = "pub";
    Status["draft"] = "drf";
})(Status || (Status = {}));
const product = {
    name: "Shampoo",
    price: 2.99,
    images: ["image-1.png", "image-2.png"],
    status: Status.published
};
export {};
