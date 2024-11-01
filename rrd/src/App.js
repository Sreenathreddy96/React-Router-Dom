
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      <Route path="/leaves" element={<Leaves/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
