import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeDetails from './pages/EmployeeDetails';
import EditEmployee from './pages/EditEmployee';
import LandingPage from './pages/LandingPage';

function App() {
  // const [employees,setEmployees]=useState([{
  //   name:'Athul',
  //   id:12345,
  //   date:'1999-04-21',
  //   role:'Backend Engineer',
  //   status:'Active',
  //   experience:5
  // }])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
        <Route path="/employees/:id" element={<EmployeeDetails/>}/>
        <Route path="/create" element={<CreateEmployee/>}/>
        <Route path="/edit/:id" element={<EditEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
