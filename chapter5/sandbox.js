/*const blogs = [
   {title:'why cheese and mark rules',likes:30},
   {title:'10things to make with marmite',likes:50}
];


console.log(blogs); 
let user = {
   name: 'christine',
   age: 30,
   email: 'maloo@gmail.com',
   location: 'berlin',
   blogs: [
   {title:'why cheese and mark rules',likes:30},
   {title:'10things to make with marmite',likes:50}
   ],
   login(){
    console.log('the user logged in');
   },
   logout(){
   console.log('the user logged out');
  },
  logBlogs(){
   // console.log(this.blogs);
   console.log('this user has written several blogs');
   this.blogs.forEach(blog =>{
      console.log(blog.title, blog.likes);
   })
  }

   };

   user.logBlogs();
 //creating objects using object literal notations

*/
console.log(Math);
console.log(Math.PI);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random*100));

/*let scoreOne = 50;
let scoreTwo=scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo:${scoreTwo}`);

scoreOne=100;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo:${scoreTwo}`); */

const userOne ={name:'mark',age:30};
const userTwo=userOne
console.log(userOne,userTwo);

userOne.age=40;

console.log(userOne,userTwo);





