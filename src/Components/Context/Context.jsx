import { createContext,useState } from "react";
export const taskContext = createContext();



export const TaskProvider =({children}) =>{
    const [tasks,setTasks] = useState([ ]);
    const [count, setCount] = useState(0);
    const countOK = tasks.filter(task => task.status === true);
    const countFALSE = tasks.filter(task => task.status === false);
    const countOkLength=countOK.length;
    const countFALSELength=countFALSE.length;
    const [valueFilter, setValueFilter] = useState('');

    function filterTask(valu) {
        setValueFilter(valu);
    }
    
      

    return(
       <taskContext.Provider value={{tasks,setTasks,count,setCount,countFALSE,countOK,countOkLength,countFALSELength,filterTask,valueFilter}}>
        {children}
       </taskContext.Provider>
    )
}