import { BrowserRouter, Navigate } from 'react-router';
import { Route, Routes } from 'react-router';
import TaskContextProvider from './context/TaskContext';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import AuthPage from './components/AuthPage';
import Navigation from './components/Navigation';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// Route Guard Component
const ProtectedRoute = ({ component }: { component: React.ComponentType}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>
  })
  return <Component/>
}

const App = () => {
  return (
    <>
      <TaskContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<ProtectedRoute component={TaskDashboard}/>} />
            <Route path="/task/:id" element={<ProtectedRoute component={TaskDetails}/>} />
            <Route path="/task/new" element={<ProtectedRoute component={TaskForm}/>} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path='*' element={<Navigate to={'/'}/>}/>
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </>
  );
};
export default App;
