var sum = function (a: number, b: number) {
    return a + b;
}
var answer = sum(5, 5);
console.log(answer)

var AddNumbers = function (a: number, b: number, c: number) {
    return a + b + c;
}
console.log(AddNumbers(20, 10, 20));

var AddName = (fName: string | number, lName: string | number) => {
    return `My name is ${fName} ${lName}`;
}
console.log(AddName("Samuel", "JAJA"));

//Tuple 
//Any
//Union
//Boolean
//String
//Number

//Interface
interface Person {
    firstName: string,
    lastName: string,
    phone: string | number,
    hasVisa: boolean,
    age: number
    mail: string
}

let person1 = {} as Person
person1.firstName = 'Samuel',
    person1.lastName = 'Jaja',
    person1.phone = '0706072922',
    person1.hasVisa = true,
    person1.age = 30
console.log(person1);

let person2 = {} as Person
person2.firstName = 'Catherine',
    person2.lastName = 'Umesi-JAJA',
    person2.phone = '04550404044',
    person2.hasVisa = true,
    person2.age = 23

console.log(person2);

//Never

//ENum



//>>>>>>>>Functions in TypeScript<<<<<<<<
//Shortened Arrow Function:
let Calc1 = (x: number, y: number): number => x + y;

//Function Expression:
let Calc2 = function(x: number, y: number): number {
    return x + y;
};

//Method in an Object Literal:
let calc3 = {
    add(x: number, y: number): number {
      return x + y;
    }
};

//Class with a Static Method:
class Calc {
    static add(x: number, y: number): number {
      return x + y;
    }
};
  

//Classes
class Product {
    public id: number | string
    public name: string
    public cost: number
    public producer?: string
    public isRegistered: boolean

    constructor(name: string) {
        this.name = name
    }

    DisplayProduct(): string {
        return `This is ${this.name} and it cost ${this.cost}, its ${this.isRegistered}`
    }
}

let product1 = new Product('Envy HP')
product1.id = '234',
    product1.name = 'HP_g50',
    product1.cost = 2000,
    product1.isRegistered = true,
    //product1.producer = "CypherCrescent",
    console.log(product1.DisplayProduct());





