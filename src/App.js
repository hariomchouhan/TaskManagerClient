import './App.css';
import { NavigationBar } from './components/NavigationBar.js';
import { Dashboard } from './components/Dashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskForm } from './components/TaskForm.js';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/create-task' element={<TaskForm/>}></Route>
          <Route path='/tasks' element={<TaskList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
