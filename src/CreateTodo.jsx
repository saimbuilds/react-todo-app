import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid/non-secure';
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";

const CreateTodo = () => {
   const [todo, settodo ]= useContext(todocontext)
  // const [task, settask] = useState("");
  const {register, handleSubmit , reset,  formState : {errors}} = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    data.iscompleted = false;
    const newTodo = {
      id: nanoid(),
      // title: task,
      iscompleted: false,
    };
    // let copyTodo = [...todo];
    // copyTodo.push(newTodo);
    // settodo(copyTodo);
    // settask("");
    // console.log(newTodo);
    const copyTodo = [...todo]
    copyTodo.push(data)
    settodo(copyTodo)
    toast.success("Todo Created !")
    reset()
  };

  return (
    <div className="flex flex-col w-[60%] h-[80%]  p-10 ">
      <h1 className="text-8xl">Set <span className="text-cyan-400">Reminders</span> for Todos</h1>
      <br />
      <br />
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitHandler)}>
        <input 
          className="w-[100%] text-4xl border-b outline-0 p-2 mb-10"
          // onChange={(e) => settask(e.target.value)}
          // value={task}
          {...register("title", {required: "title can not be empty"})}
          type="text"
          placeholder="Enter the task"
        />
        {/* {errors && errors.title && errors.title.message &&<small >{errors.title.message}</small>} */}
        <small className=" text-red-400 w-[100%] text-xl">{errors?.title?.message}</small>

        <button className="text-sm border px-10 py-4 text-xl rounded-xl hover:cursor-pointer bg-cyan-400 text-black w-fit ">Submit</button>
      </form>
      <br />
    </div>
  );
};

export default CreateTodo;
