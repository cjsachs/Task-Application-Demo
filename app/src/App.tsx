import { BrowserRouter } from 'react-router';
import { Route, Routes } from 'react-router';
import TaskContextProvider from './context/TaskContext';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import AuthPage from './components/AuthPage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <TaskContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<TaskDashboard />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/task/new" element={<TaskForm />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </>
  );
};
export default App;
