import { useState } from "react";
function ButtonTwo(){

    const [name,setName] =useState("")

    function handleNameChange(event){
        setName(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
        </div>
    );
}
export default ButtonTwo