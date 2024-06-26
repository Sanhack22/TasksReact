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

 

  


  return (
    <>
      <Header>
      <div className='clean'></div>
        <Title title="Lista De Tareas" />
        <Logo/>
      </Header>
      <Main>
          <Form/>
          <TitleInformation text={`Usted Tiene ${otherContext.countOkLength} tareas completadas y ${otherContext.countFALSELength} tareas pendientes`}/>
          <hr />
      <Filter />
      <Tasks/>          
      
      </Main>
      <Footer>
        <Title title="Santiago Peña" />
        </Footer>
    </>
  )
} 

export default App
