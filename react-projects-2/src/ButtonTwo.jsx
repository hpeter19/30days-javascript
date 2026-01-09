import { useState } from "react";
function ButtonTwo(){

    const [name,setName] =useState("");
    const [quantity, setQuantity]= useState();
    const [comment, setComment] =useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
         setPayment(event.target.value)
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

             <select value={payment} onChange={handlePaymentChange}>
               <option value="">select an option</option>
               <option value="Visa">Visa</option>
               <option value="Mastercard">MasterCard</option>
               <option value="GiftCard">GiftCard</option>
             </select>
              <p>Payment:{payment}</p>
        </div>
    );
}
export default ButtonTwo