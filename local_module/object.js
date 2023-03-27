//오브젝트 만드는 방법 2가지
const obj1 = {}; //object literal
const obj2 = new Object(); //생성자 문법
//object = {key: value,...};
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
function print(person) {
    console.log(person.name);
    console.log(person.age);
}



const ellie = { name:'ellie', age: 4};
print(ellie);
console.log(ellie.name);
console.log(ellie.['name']);
ellie['hasJob'] = true;
//ellie.hasJob = true;

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
// key should be always string
function printValue(obj, key){
    console.log(obj[key]);
}

printValue(ellie, 'name');

//3. Properety value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 5};
const person3 = {name: 'tony', age: 20};
//const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', age); // constructor function call
console.log(person4);
// function makePerson(name, age) {
//     return {
//         name,
//         age,
//     };
// }

//4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


//5. in operator: 속성이 존재여부 확인
console.log('name' in ellie);
console.log('age' in ellie);


//6. for .. in vs for .. of
// for (key in obj)
for(key in ellie) {
    console.log(key);
}

//for (value of iterable(array..))
const array = [1,3,5,9,6];
for(value of array) {
    console.log(value);
}

//7. Fun Cloning
//Object.assign(dest,[obj1, obj2, ....])
const user = { name: 'ellie', age:20};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.log(user3);


//Object.assign
const user4 = Object.assign({}, user);
console.log(user4);


//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

