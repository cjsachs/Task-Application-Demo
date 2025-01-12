import { Link } from 'react-router';
import { useTaskContext } from '../context/TaskContext';

const TaskDashboard: React.FC = () => {
  const { tasks } = useTaskContext();
  return (
    <div>
      <h1>Task Dashboard</h1>
      <Link to="/task/new">Create New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
