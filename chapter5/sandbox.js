
let user = {
   name: 'christine',
   age: 30,
   email: 'maloo@gmail.com',
   location: 'berlin',
   blogs: ['why cheese and mark rules','10things to make with marmite']
   };

console.log(user);
console.log(user.name); 

user.age= 35;

console.log(user.age);

console.log(user['name']);
user['name']='mathew';

console.log(user.name);
console.log(typeof user);