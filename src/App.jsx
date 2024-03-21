import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Layouts/Header/Header'
import { Title } from './Components/Title/Title'
import { Logo } from './Components/Logo/Logo'
import { Main } from './Components/Layouts/Main/Main'
import { Form } from './Components/Form/Form'
import { TitleInformation } from './Components/TitleInformation/TitleInformation'
import { Filter } from './Components/Filter/Filter'
import { Tasks } from './Components/Tasks/Tasks'
import { Footer } from './Components/Layouts/Footer/Footer'
import { ItemTask } from './Components/ItemTask/ItemTask'
import { taskContext } from './Components/Context/Context'








function App() {
  const otherContext = useContext(taskContext);

  const CheckboxChange = (event, id) => {
    const { checked } = event.target;
    otherContext.setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, status: checked };
        }
        return task;
      });
    });
    console.log(otherContext.tasks);
  };

  


  return (
    <>
      <Header>
      <div className='clean'></div>
        <Title title="Lista De Tareas" />
        <Logo/>
      </Header>
      <Main>
          <Form/>
          <TitleInformation text={`Usted Tiene ${otherContext.countOK} tareas completadas y ${otherContext.countFALSE} tareas pendientes`}/>
          <hr />
      <Filter />
      <Tasks>
        {
          otherContext.tasks.map( (task,index) =>(
             <ItemTask onChange={(event) => CheckboxChange(event, task.id)} checked={task.status} key={task.name + index} name={task.name} description={task.description} />
          ))
          
        }
        
      </Tasks>
      </Main>
      <Footer>
        <Title title="Santiago Peña" />
        </Footer>
    </>
  )
} 

export default App
