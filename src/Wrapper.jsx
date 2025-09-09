import { createContext, useState } from "react";

export const todocontext = createContext(null)
const Wrapper = (props) => {
    // // props.app = app
    // console.log(props);
     const [todo, settodo ]= useState([])
    
  return (<todocontext.Provider value={[todo, settodo]}>{props.children}</todocontext.Provider>)
}

export default Wrapper