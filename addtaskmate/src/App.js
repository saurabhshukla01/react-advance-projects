import React, { useEffect, useState } from "react";
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import './App.css'

function App() {
    const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
    const [newTask, setNewTask] = useState({})
    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(tasklist))
    }, [tasklist])
    return (
        <div>
            <Header />
            <AddTask tasks={tasklist} setTask={setTasklist} newTask={newTask} setNewTask={setNewTask} />
            <ShowTask tasks={tasklist} setTask={setTasklist} newTask={newTask} setNewTask={setNewTask} />
        </div>
    )
}

export default App