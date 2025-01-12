import { useNavigate, useParams } from "react-router"
import { useTaskContext } from "./TaskContext"

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()
    const { tasks, deleteTask } = useTaskContext();
    const navigate = useNavigate()

    const task = tasks.find((t) => t.id === id)

    if (!task) {
        return <div>Task not found</div>
    }

    const handleDelete = () => {
        deleteTask(task.id)
        navigate('/')
    }

  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        <button onClick={handleDelete}>Delete Task</button>
        <button onClick={() => navigate(`/task/new?id=${task.id}`)}>Edit Task</button>
    </div>
  )
}
export default TaskDetails