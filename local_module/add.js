const add = (a,b) => {
    return a+b;
};
// const sum = add(1,2);
// console.log(sum);

module.exports = add;


var relationshio1 = {
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends:function(){
        //var that = this;
        this.friends.forEach(friend => {
            console.log(this.name,friend);
        });
    },
};
relationshio1.logFriends();


const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach((fruit,index) => console.log(fruit,index))
fruits.push('딸기');
fruits.pop('사과');

