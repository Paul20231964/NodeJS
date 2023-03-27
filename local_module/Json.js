//1. Object to JSON
//stringify
let json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol:Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`); //함수,심볼등는 JSON에 포함되지 않는다.
    },
};

//json2 = JSON.stringify(rabbit,['name', 'color']);//원하는 데이타만 포함시킬려면
json2 = JSON.stringify(rabbit,(key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    //return value;
    return key === 'name' ? 'ellie'  : value;
});

console.log(json2);

//2. JSON to Object
// parse(json)
let json4 = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    //return value;
    return key === 'birthDate' ? new Date(value) : value;
});
//const obj = JSON.parse(json4);
const obj = JSON.parse(json4);

console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

