import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';
import EmployeeDetails from './EmployeeDetails';

function App() {
  const [employees,setEmployees]=useState([{
    name:'Athul',
    id:12345,
    date:'1999-04-21',
    role:'Backend Engineer',
    status:'Active',
    experience:5
  }])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/employeelist" element={<EmployeeList employees={employees} setEmployees={setEmployees}/>}/>
        <Route path="/create" element={<CreateEmployee employees={employees} setEmployees={setEmployees}/>}/>
        <Route path="/details" element={<EmployeeDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
