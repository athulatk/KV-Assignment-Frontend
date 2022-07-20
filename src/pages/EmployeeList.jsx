import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css'
import '../components/EmployeeTable'
import EmployeeTable from "../components/EmployeeTable";
import { useGetAllEmployeesQuery } from "../services/EmployeeAPI";
import Empty from '../imgs/Empty.svg'
const EmployeeList = () => {
    const navigate = useNavigate();
    const {data} = useGetAllEmployeesQuery()
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
                {data?.data?.length===0?<div className="no-employees">
                <div>
                <img src={Empty} alt="" /><p>Employee List Is Empty!</p>
                </div></div>:
                <EmployeeTable data={data}/> }  
                
            </div>
        </>
    );
};

export default EmployeeList;
