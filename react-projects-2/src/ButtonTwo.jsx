import { useState } from "react";
function ButtonTwo() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const [car, setCar] =useState({year:2024,make:"ford", model:"mustang"});
  const [food, setFood] =useState(["apple","orange"]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  function handleYearChange(event){
    setCar(c =>({...c, year: event.target.value}));
  }

   function handleMakeChange(event){
     setCar(c =>({...c, make:event.target.value}));
  }

   function handleModelChange(event){
     setCar(car =>({...car,model:event.target.value}));
  }

   function handleAddFood(event){
     setFood()
   }

    function handleRemoveFood(event){
     setFood()
   }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery options"
      />
      <p>comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <p>Shipping: {shipping}</p>

      <p>your favourite car is: {car.year} {car.make} {car.model} </p>

      <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br/>
      <input type="text" value={car.model} onChange={handleModelChange} /> 
    </div>


  );
}
export default ButtonTwo;
