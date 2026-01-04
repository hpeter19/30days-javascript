import { useState } from "react"

function MyComponent(){

   const [name, setName] =useState();
   const [age, setAge]= useState();

   const updateName = () =>{
     setName("sparrow");
   }

   const incrementAge = () => {
     setAge(age + 1);
   }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    );
}

export default MyComponent