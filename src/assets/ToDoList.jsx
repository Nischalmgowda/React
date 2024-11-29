import { useState } from "react";

function ToDOList(){
    const[task,setTask]=useState(["Eat breakfast","take Shower", "take a bath"]);
    const[newtask,setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newtask.trim() !== "")
        setTask(t=>[...t, newtask]);
        setNewTask("")
    }
    function deleteTask(index){
        const updateTasks=task.filter((_,i)=> i !== index);
        setTask(updateTasks);

    }
    function moveTaskUP(index){
        if(index>0){
            const updateTasks= [...task];
            [updateTasks[index],updateTasks[index-1]]=
            [updateTasks[index-1],updateTasks[index]];
            setTask(updateTasks);
        }

    }
    function moveTaskDown(index){
        if(index < task.length-1){
            const updateTasks= [...task];
            [updateTasks[index],updateTasks[index+1]]=
            [updateTasks[index+1],updateTasks[index]];
            setTask(updateTasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
            <input
            type="text" placeholder="Enter a new task"
            value={newtask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {task.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>Task-Down</button>
                    <button className="move-button" onClick={()=>moveTaskUP(index)}>Task-Up</button>
                </li>
            )}
           
        </ol>
        
        </div>
    )
}
export default ToDOList;

