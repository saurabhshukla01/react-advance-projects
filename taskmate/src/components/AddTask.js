const AddTask = ({ tasks, setTask, newTask, setNewTask }) => {
    const handlesubmit = (e) => {
        e.preventDefault();
        //editing an task by task id
        if (newTask.id) {
            const date = new Date()
            const updateTask = tasks.map((task) => {
                return task.id === newTask.id
                    ? {
                        id: newTask.id,
                        name: e.target.task.value,
                        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                    }
                    : task;
            });
            setTask(updateTask)
            setNewTask({})
        }
        // adding an new task 
        else {
            const date = new Date();
            const newTasks = {
                id: Math.floor(Math.random() * 10000),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTask([...tasks, newTasks])
            setNewTask({})
        }
    }

    return (
        <section className="addTask">
            <form onSubmit={handlesubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} value={newTask.name || ""} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                <button type="submit">{newTask.id ? "Update" : "Add"}</button>

            </form>

        </section>
    )
}

export default AddTask