//Q1. 배열원소를 문자열로 변환하라
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(" ");
console.log(result);

//Q2 코마로 구분되어 있는 문자열을 배열로 변환하라
const fruits1 = 'apple, banana, orange';
const result1 = fruits1.split(',', 2);
console.log(result1);


//Q3 배열의 원소 역순으로 배열하라 원배열로 순서가 바뀐다
const fruits2 = ['apple', 'banana', 'orange'];
const result2 = fruits2.reverse();
console.log(result2);
console.log(fruits2);

//Q4 배열중 첫두개의 원소를 재외하고 새 배열을 만들라
//splice, slice
const array = [1,2,3,4,5,6];
//const res = array.splice(0,2);
const res = array.slice(2,5);

console.log(res);
console.log(array);

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, false, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]

//Q5 점수가 90인 학생을 찾아라
const resl = student.find( function(student,index) {
    return student.score === 90;
    //console.log(student, index);
})
console.log(resl);

//Q6 등록된 학생들만 배열을 만들라
const 결과 = student.filter((student) => student.enrolled);
console.log(결과);


//Q7 점수만 배열로 만들어라 map 배열의 원소들을 다른 배열로 만들어준다
const rst = student.map((student) => student.score);
console.log(rst);

//Q8 배열안에 점수가 50이하가 있는지 확인하라
const rst2 = student.some((student) => student.score < 50);
console.log(rst2);

const rst3 = student.every((student) => student.score < 50);
console.log(rst3);

//Q9 평균을 구하라
// const rst4 = student.reduce((prev, curr) => {
//     console.log('--------------------');
//     console.log(prev);
//     console.log(curr);
//     return prev + curr.score;
// }, 0);


//또는 이렇게 화살표 함수로 간단하게 표현
const rst4 = student.reduce((prev, curr) => prev + curr.score, 0);

console.log(rst4 / student.length);


//Q10 점수만 스트링으로 표현하라
const 결과2 = student
.map((student) => student.score)
.filter((score) => score >= 50)
.join();
console.log(결과2);


//Q11 어센딩으로 순서를 문자열로하라
const 결과3 = student
.map((student) => student.score)
.sort((a,b) => a - b)
.join();
console.log(결과3);

//Q12 디센딩으로 순서를 문자열로
const 결과4 = student
.map((student) => student.score)
.sort((a,b) => b - a)
.join();
console.log(결과4);

//Q13 디센딩 순서로 배열로
const 결과5 = student
.map((student) => student.score)
.sort((a,b) => b - a);
console.log(결과5);