const ShowTask = ({ tasks, setTask, setNewTask, newTask }) => {
    const hancleClearAll = (e) => {
        e.preventDefault()
        setTask([])

    }
    const handleEdit = (id) => {
        const selectedTask = tasks.find(tasks => tasks.id === id);
        setNewTask(selectedTask)
    }
    const handleDelete = (id) => {
        const updateTaskList = tasks.filter(tasks => tasks.id !== id);
        setTask(updateTaskList)
    }
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasks.length || 0}</span>
                </div>
                <button className="clearAll" onClick={hancleClearAll}>clearAll</button>
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <p>
                                <span className="name">{task.name || ''}</span>
                                <span className="time">{task.time || ''}</span>
                            </p>
                            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                        </li>
                    )
                })}

            </ul>
        </section>
    )
}

export default ShowTask