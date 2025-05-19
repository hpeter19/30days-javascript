//function greet(){
  //  console.log('hello there');
//}

//FUNCTION EXPRESSION
const speak =function(){
  console.log('good day!');
};

greet();
speak();

function greet(){
    console.log('hello there');
} 
//arguments and parameters

const speaks = function(name,time){
    console.log(`good ${time} ${name}`);
};

speaks('mike','morning');

/*const calcArea =function(radius){
    let area=3.14 *radius**2;
    return area;
} */

//arrrow function
const calcArea =radius => 3.14*radius**2;


const area =calcArea(5);
console.log('area is :',area);

const greets =() => 'hello world'

const results =greets();
console.log(results);

const name ='shaun';
//functions
const greetse = () => 'hello';
let resultOne = (greetse);
console.log(resultOne);

//methods 
let resultTwo = name.toUpperCase();
console.log(resultTwo);
//callbacks and for each
let people = ['mike','shart','polo','nasta'];

const logperson =(person,index)=>{
console.log(`${index} -hello ${person}`);
};
/*people.forEach((person,index) =>{
     console.log(index,person);
});*/
people.forEach(logperson);

//arrays 

function isOdd(num) {
    return num % 2 !== 0;
  }
  const arr = [1, 2, 3, 4, 5];
  const oddNums = arr.filter(isOdd);
  console.log(oddNums); // Outputs [1, 3, 5];
  console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected

//reduce method
const arrs = [1, 2, 3, 4, 5];
const productOfAllNums = arrs.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
//So what .reduce() will do is go through every element in arr and
//  apply the callback function to it. It updates total without actually 
// changing the array itself. After it’s done, it returns total.

//map method

function addOne(num) {
    return num + 1;
  }
  const arre = [1, 2, 3, 4, 5];
  const mappedArr = arre.map(addOne);
  console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
  //returns a new array and does not change the original ones
  

  