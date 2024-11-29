import { useState } from "react";

function Form(){
    
    const[name, setName]= useState("Guest");
    const[quantity,setQuantity] = useState(1);
    const[comment, setComment] =useState();
    const[payment, setPayment]=useState();
    const[shipping,setShipping] = useState();
    function handleName(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }
    function handleSubmit(){
            alert("data saved Sucessfully in database");
    }
return(
    <>
    <input value={name} onChange={handleName}/>
    <p>Name:{name}</p>
    <input value={quantity} type="number" onChange={handleQuantity}/>
    <p>Quantity:{quantity}</p>
    <textarea value={comment} onChange={handleComment} placeholder="Enter details"/>
    <p>Comment : {comment}</p>
    <div>
        <select value={payment} onChange={handlePayment}>
        <option value=" ">Select An Option</option>
        <option value="visa">Visa</option>
        <option value="mastecard">MasterCard</option>
        </select>
        <p>Payment;{payment}</p>
    </div>
    <div>
        <p>Select Delivery or PickUp</p>
        <label >
            <input type="radio" value="pickUp" checked={shipping==="pickUp"} onChange={handleShipping}/>pickUp
        </label> <br/>
        <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShipping}/>Delivery
        </label>
        <p>Delivery:{shipping}</p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>

Details of delivery is here:

    <p>name;{name}</p>
    <p>Quantity:{quantity}</p>
    <p>Comment : {comment}</p>
    <p>Payment;{payment}</p>
    <p>Delivery:{shipping}</p>
    </>
)
}
export default Form;