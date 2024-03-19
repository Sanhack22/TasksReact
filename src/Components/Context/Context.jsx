import { createContext,useState } from "react";
export const taskContext = createContext();


export const TaskProvider =({children}) =>{
    const [tasks,setTasks] = useState([ ]);
    const [count, setCount] = useState(0)

    return(
       <taskContext.Provider value={{tasks,setTasks,count,setCount}}>
        {children}
       </taskContext.Provider>
    )
}