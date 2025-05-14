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

 const age= 20;

 if (age >20){
  console.log('you are over 20years old'); 
 }

 const ninjas =['mike','amri','tobiah','tamba']
 if (ninjas.length >3){
  console.log("those are a lot of ninjas");
 }

 const password='pass';


 if (password.length>=12 && password.includes('@')){
  console.log('password is strong enough')
 }
 if(password.length >=8){
  console.log('password is long enough');
 } else{
  console.log('password is not long enough')
 }