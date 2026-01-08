import { useState } from "react";
function ButtonTwo(){

    const [name,setName] =useState("");
    const [quantity, setQuantity]= useState();
    const [comment, setComment] =useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(){
        setQuantity(event.target.value);
    }

    function handleCommentChange(){
        setComment(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name:{name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
             placeholder="Enter delivery options" />
             <p>comment: {comment}</p>
        </div>
    );
}
export default ButtonTwo