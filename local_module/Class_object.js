'use strict';

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


//Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this,lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // } 
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//Fields(Public,Private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


//Static
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//상속
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}


class Rectangle extends Shape {

}

class Triangle extends Shape {
    draw() {
        super.draw();//super를 사용해서 부모의 draw 메서드를 호출
        console.log("PPPP");
    }

    getArea() {
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle(20, 20,'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.getArea();
triangle.draw();


// instanceof
console.log(rectangle instanceof Rectangle);
