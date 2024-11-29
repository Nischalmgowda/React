// import { useState } from "react";

//--------- Array in state --------------------------->
import { useState } from "react";

// function MyComponent(){
//     const[food,setFood]=useState(["apple","Mango","Orange"]);
//     function handleAddFood(){
//             const foodItems = document.getElementById("food-items").value;
//             document.getElementById("food-items").value="";
//             setFood(f=>[...f,foodItems]);
//     }
//     function handleRemoveFood(index){
//             setFood(food.filter((_,i)=> i !== index));
//     }
//     return(<>
//     <p>List of Food Items</p>
//     <ul>
//         {food.map((food,index)=><li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
//     </ul>
//     <input id="food-items" type="text" placeholder="Enter food "/>
//     <button onClick={handleAddFood}>Add Food</button>
//     </>)
// }
// export default MyComponent;

//-------------------------------------------  Array of Objects in State  --------------------------->
function MyComponent(){
    const[car,setCar]=useState([]);
    const[year,setYear]=useState();
    const[model,setModel]=useState();
    const[make,setMake]=useState();
    function handleAddCar(){
        const newCar={year: year,
            make:make,
            model:model
        };
        setCar(c=>[...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function handleRemoveCar(index){
        setCar(c=>c.filter((_,i)=> i!==index));        
    }
    function handleYear(event){
        setYear(event.target.value);
    }
    function handleModel(event){
        setModel(event.target.value);
    }
    function handleMake(event){
        setMake(event.target.value);
    }
    return(<>
        <p>List of elements</p>
        <ul>
            {
                car.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)
            }
        </ul>
        <input type="number" value={year} onChange={handleYear}/><br/>
        <input type="text" value={model} onChange={handleModel} placeholder="enter model"/><br/>
        <input type="text" value={make} onChange={handleMake} placeholder="enter make"/><br/>
        <button onClick={handleAddCar}>add Items</button>
    </>)
}
export default MyComponent;