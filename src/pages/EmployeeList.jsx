import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css'
import '../components/EmployeeTable'
import EmployeeTable from "../components/EmployeeTable";
import { useGetAllEmployeesQuery } from "../services/EmployeeAPI";
import Popup from "../components/Popup";
const EmployeeList = () => {
    const navigate = useNavigate();
    const {data} = useGetAllEmployeesQuery()
    useEffect(() => {
        console.log(data)
    }, [data])
    console.log(data)
    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="banner"></div>
                <div className="main-header employeelist-header">
                    <h3>Employee List</h3>
                    <div className="employeelist-header-right">
                        {/* <div className="filterby">
                            <p>Filter By</p>
                            <select name="" id="" className="filter-select">
                                <option value="">Select</option>
                            </select>
                        </div> */}
                        <div className="createemployee-btn" onClick={() => { navigate("/create") }}>
                            <div><p className="plus-icon">+</p></div>
                            <div>Create Employee</div>
                        </div>
                    </div>
                </div>
                <EmployeeTable data={data}/>   
                
            </div>
        </>
    );
};

export default EmployeeList;
