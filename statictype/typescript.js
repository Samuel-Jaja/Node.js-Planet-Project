var sum = function (a, b) {
    return a + b;
};
var answer = sum(5, 5);
console.log(answer);
var AddNumbers = function (a, b, c) {
    return a + b + c;
};
console.log(AddNumbers(20, 10, 20));
var AddName = function (fName, lName) {
    return "My name is ".concat(fName, " ").concat(lName);
};
console.log(AddName("Samuel", "JAJA"));
var person1 = {};
person1.firstName = 'Samuel',
    person1.lastName = 'Jaja',
    person1.phone = '0706072922',
    person1.hasVisa = true,
    person1.age = 30;
console.log(person1);
var person2 = {};
person2.firstName = 'Catherine',
    person2.lastName = 'Umesi-JAJA',
    person2.phone = '04550404044',
    person2.hasVisa = true,
    person2.age = 23;
console.log(person2);
//Never
//ENum
//Function
//Classes
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    Product.prototype.DisplayProduct = function () {
        return "This is ".concat(this.name, " and it cost ").concat(this.cost, ", its ").concat(this.isRegistered);
    };
    return Product;
}());
var product1 = new Product('Envy HP');
product1.id = '234',
    product1.name = 'HP_g50';
product1.cost = 2000,
    product1.isRegistered = true,
    product1.producer = "CypherCrescent",
    console.log(product1);
console.log(product1.DisplayProduct());
