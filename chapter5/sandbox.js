
let user = {
   name: 'christine',
   age: 30,
   email: 'maloo@gmail.com',
   location: 'berlin',
   blogs: ['why cheese and mark rules','10things to make with marmite'],
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
      console.log(blog);
   })
  }

   };

   user.logBlogs();
 //creating objects using object literal notations





