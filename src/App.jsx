import React, {useContext, useState} from "react"

import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";
import Wrapper, { todocontext } from "./Wrapper";


function App() {
  
 const [todo, settodo ]= useContext(todocontext)
 
  

  return (
   <div className="w-screen h-screen bg-black text-white p-10 flex ">
     <CreateTodo todo={todo} settodo = {settodo}/>
    <DeleteTodo todo = {todo} settodo = {settodo}/>
   </div>
   
  )
}

export default App
