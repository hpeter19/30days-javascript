
let user = {
   name: 'christine',
   age: 30,
   email: 'maloo@gmail.com',
   location: 'berlin',
   blogs: ['why cheese and mark rules','10things to make with marmite'],
   login: function(){
    console.log('the user logged in');
   },
   logout : function(){
   console.log('the user logged out');
  },
  logBlogs: function(){
   // console.log(this.blogs);
   console.log('this user has written several blogs');
   this.blogs.forEach(blog =>{
      console.log(blog);
   })
  }

   };

   user.logBlogs();






