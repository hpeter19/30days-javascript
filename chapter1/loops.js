// for loops
/* for(let i=0; i<5; i++){
  console.log('in loop:',i);
}

console.log('loop finished'); */

const names = ["sam","Mike","olivia"];
 /*for (let i =0; i<names.length; i++){
  //console.log(names[i]);
  let html=` <div>${names[i]}</div>`;
   console.log(html);
 } 
let i =0;
 while (i<5){
     console.log('in loop:',i);
     i++;
 } */

/*let i =0;
while(i<names.length){
  console.log(names[i]);
  i++;
} 
*/

let i=5;
do{
  console.log('val of i is:',i);
  i++;
}
while(i<5);

 const ages= 20;

 if (ages >20){
  console.log('you are over 20years old'); 
 }

 const ninjass=['mike','amri','tobiah','tamba']
 if (ninjass.length >3){
  console.log("those are a lot of ninjas");
 }

 const password='pa@ss';


 if (password.length>=12 && password.includes('@')){
  console.log('password is strong enough')
 }
 if(password.length >=8 || password.includes('@') && password.length >=5){//second part evaluates from and
  console.log('password is long enough');
 } else{
  console.log('password is not long enough')
 }

 //LOGICAL NOT

 let user =false;

 let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

//break and continue

const scores = [10,14,15,23,0,4];
for(let i=0; i<scores.length;i++){

  if(scores [i] ===0){
    continue;
  }
  console.log('your score:',scores[i]);
  if(scores[i] ===100){
    console.log('congrats you got the top scores');
    break;
  }
}

//switch statements

const grade= 'D';

switch (grade){
  case 'A':
    console.log('you got an A');
    break;
  case 'B':
      console.log('you got an B');
      break;
  case 'C':
        console.log('you got an C');
        break;
  case 'D':
    console.log('you got an D');
    break;
  case 'E':
    console.log('you got an E');
    break;
  case 'F':
    console.log('you got an F');
    break; 
  default:
    console.log('Not a vslid grade');    
}