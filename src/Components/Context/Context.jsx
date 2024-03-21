import { createContext,useState } from "react";
export const taskContext = createContext();



export const TaskProvider =({children}) =>{
    const [tasks,setTasks] = useState([ ]);
    const [count, setCount] = useState(0);
    const countOK = tasks.filter(task => task.status === true).length;
    const countFALSE = tasks.filter(task => task.status === false).length;


    return(
       <taskContext.Provider value={{tasks,setTasks,count,setCount,countOK,countFALSE}}>
        {children}
       </taskContext.Provider>
    )
}