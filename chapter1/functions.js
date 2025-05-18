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