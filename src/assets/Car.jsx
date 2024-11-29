import { useState } from "react";
function Car(){
    const[car,setCar]= useState({year:2022,model:"Tata",Make:"Mustang"})
    function handleYear(event){
        setCar(c=>({...c, year:event.target.value}));
    }
    function handleModel(event){
        setCar(c=>({...c, model:event.target.value}));
    }
    function handleMake(event){
        setCar(c=>({...c, Make:event.target.value}));
    }
    return(
        <>
        <p>`your car  manufacture year is {car.year} and model is {car.model} and maker is {car.Make}`</p>
        <input value={car.year} type="number" onChange={handleYear}/><br/>
        <p>caryear:{car.year}</p>
        <input value={car.model} type="text" onChange={handleModel}/><br/>
        <p>CarModel:{car.model}</p>
        <input value={car.Make} type="text" onChange={handleMake}/><br/>
        <p>CarMake:{car.Make}</p>
        </>
    )
}
export default Car;
