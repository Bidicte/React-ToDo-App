import { useState, useEffect } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []); // Convert our state in an object
  const [task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList)) // convert our data into text
  }, [taskList])

  return (
    <>
     <div className="App">
        <Header />
        <AddTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTask 
          taskList={taskList} 
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
     </div>
    </>
  )
}

export default App
