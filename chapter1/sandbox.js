let radius = 10;

const pi= 3.14;

//let results = radius % 3;
//let results = pi * radius**2
//console.log(results);

let likes =11;
//likes =likes+1;
//likes ++;
//likes --;
//likes += 10
//likes -= 5
//likes *= 2
//console.log(likes);
// NaN Not a number

console.log(5/'hello');



const title='best reads of 2019';
const author='Mark';
const like= 30;

//concatenation
//let result ='the blog ' + title + 'by'+author + 'has'+ like + 'likes';

//console.log(result);
//Template strings
let result =`The blog called ${title} by ${author} has ${like} likes`;
console.log(result);
//html templete

let html =`
  <h2>${title} </h2>
  <p>By ${author}</p>
  <span> This blog has ${like} likes</span>;


`
console.log(html);

let ninjas = ['shaun','boniface'];
//ninjas[1]='shaun';
//console.log(ninjas);

//let ages =[20,29,31,23];
//console.log(ages[2]);


//length of an array
//console.log(ninjas.length);

//array methods

//let resulte = ninjas.join(',');
//let resulte=ninjas.indexOf('shaun');
//let resulte=ninjas.concat(['ahadi','madowo']);

let resulte=ninjas.push('moris');
 result =ninjas.pop()
console.log(ninjas);

//let age =null;
//console.log(age,age+3, `the age is ${age}`);
//comparison operators
let time=25;
console.log(time == 25);//true
console.log(time == 30);//false
console.log(time != 30);//true
console.log(time > 30);//false
//loose comparison
let age = 25;
console.log(age == 25);
console.log(age == '25')
//strict comparison
console.log(age === 25);
console.log(age ==='25');
console.log(age !== 25);
//type conversion
let score = '100';
score=Number(score);
console.log(score+1);
console.log(typeof score);
