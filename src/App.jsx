import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';

function App() {
  const [employees,setEmployees]=useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/employeelist" element={<EmployeeList employees={employees} setEmployees={setEmployees}/>}/>
        <Route path="/create" element={<CreateEmployee employees={employees} setEmployees={setEmployees}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
