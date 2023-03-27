'use strick';

//자바스크립트 오브젝트 - 비동기식 
//상태 : pending -> fulfilled or rejected
//producer vs Consumer

//1. Producer
const promise = new Promise((resolve,reject) => {
    //doing some heavy work(network, files)
    console.log("doing something...");
    setTimeout(() => {
        resolve("ellie");//ellie라는 것을 전달
        //reject(new Error('no network'));
    }, 2000);
});

//2.Consumers : then,catch, finally
promise
    .then((value) => {
    console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });