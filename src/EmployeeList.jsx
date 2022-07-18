import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import './styles/styles.css'
import './components/EmployeeTable'
import EmployeeTable from "./components/EmployeeTable";
const EmployeeList = ({employees}) => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="banner"></div>
                <div className="main-header employeelist-header">
                    <h3>Employee List</h3>
                    <div className="employeelist-header-right">
                        <div className="filterby">
                            <p>Filter By</p>
                            <select name="" id="" className="filter-select">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="createemployee-btn" onClick={() => { navigate("/create") }}>
                            <div><p className="plus-icon">+</p></div>
                            <div>Create Employee</div>
                        </div>
                    </div>
                </div>
                <EmployeeTable employees={employees}/>   
            </div>
        </>
    );
};

export default EmployeeList;
