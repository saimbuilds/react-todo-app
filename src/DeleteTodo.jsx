import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";

const DeleteTodo = () => {
    // const todo = props.todo
    // const settodo = props.settodo
     const [todo, settodo ]= useContext(todocontext)
    const deleteTodo = (id) =>{
    const filterTodo = todo.filter(task => task.id != id)
    settodo(filterTodo)
    toast.error("Todo deleted !")
  }
  const renderTodos = todo.map((task)=>{
    return <li className="bg-slate-800 p-5 text-2xl flex justify-between items-center rounded-lg mb-4" key={task.id}>{task.title} <span className="bg-cyan-400 rounded-lg px-4 py-2 hover:cursor-pointer" onClick={()=> deleteTodo(task.id)}>Delete</span></li>
  })
  return (
    <div className="w-[35%]  p-10">
      <h1 className="text-7xl mb-10 "><span className="text-cyan-400">Pending</span> Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default DeleteTodo;
