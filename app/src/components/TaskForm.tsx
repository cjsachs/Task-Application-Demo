import { useNavigate, useSearchParams } from 'react-router';
import { useTaskContext } from '../context/TaskContext';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm: React.FC = () => {
  const { addTask, updateTask, tasks } = useTaskContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get('id');
  const existingTask = tasks.find((t) => t.id === id);

  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(
    existingTask?.description || ''
  );
  const [completed, setCompleted] = useState(existingTask?.completed || false);

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setCompleted(existingTask.completed);
    }
  }, [existingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      id: id || Date.now().toString(),
      title,
      description,
      completed,
    };

    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    navigate('/');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1>{existingTask ? 'Edit Task' : 'New Task'}</h1>
      <div>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as={'textarea'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          <Form.Check
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            inline
          />
          Completed
        </label>
      </div>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};
export default TaskForm;
