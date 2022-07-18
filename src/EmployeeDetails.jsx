import Sidebar from "./components/Sidebar";
import { useState } from 'react'
import './styles/styles.css'
import { useNavigate } from "react-router-dom";
import Pencil from './imgs/Pencil.svg'
const EmployeeDetails = ({ employees }) => {

    const navigate = useNavigate()

    const [details, setDetails] = useState({
        name: 'Athul',
        id: '12345',
        email: 'nathulkumar@gmail.com',
        date: '1999-04-21',
        experience: 5,
        address: 'Payyanur,Kannur',
        role: 'Backend Engineer',
        status: 'Active'

    })

    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="banner"></div>
                <div className="main-header employeelist-header">
                    <h3>Employee Details</h3>
                    <div className="createemployee-btn" onClick={() => { navigate("/create") }}>
                        <div className="pencil-icon"><img src={Pencil} alt="" /></div>
                        <div>Edit</div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="employeedetails-box">
                        <div>
                            <p>Employee Name</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Employee ID</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Joining Date</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Role</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Experience</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Address</p>
                            <p>{details.name}</p>
                        </div>
                        <div>
                            <p>Employee ID Proof</p>
                            <p>{details.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeDetails;
