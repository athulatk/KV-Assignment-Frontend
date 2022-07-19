import Sidebar from "../components/Sidebar";
import '../styles/styles.css'
import { useNavigate, useParams } from "react-router-dom";
import Pencil from '../imgs/Pencil.svg'
import { useGetEmployeeByIdQuery } from "../services/EmployeeAPI";
const EmployeeDetails = () => {

    const navigate = useNavigate()
    let {id}=useParams()
    const {data}=useGetEmployeeByIdQuery(id);
    
    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="banner"></div>
                <div className="main-header employeelist-header">
                    <h3>Employee Details</h3>
                    <div className="createemployee-btn" onClick={() => { navigate(`/edit/${id}`) }}>
                        <div className="pencil-icon"><img src={Pencil} alt="" /></div>
                        <div>Edit</div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="employeedetails-box">
                        <div>
                            <p>Employee Name</p>
                            <p>{data?.data.name}</p>
                        </div>
                        <div>
                            <p>Employee ID</p>
                            <p>{data?.data.id}</p>
                        </div>
                        <div>
                            <p>Joining Date</p>
                            <p>{data?.data?.joiningDate?.slice(0,10)}</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>{data?.data.email}</p>
                        </div>
                        <div>
                            <p>Role</p>
                            <p>{data?.data.role}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <span className='status-style'
                                        style={{
                                            padding:"0.3em 0.7em",
                                            backgroundColor: data?.data.status === 'Active' ? '#D3F4BE' : (data?.data.status === 'Inactive' ? '#FFBFBF' : '#F5ECB8')
                                        }}>{data?.data.status}</span>
                        </div>
                        <div>
                            <p>Experience</p>
                            <p>{data?.data.experience}</p>
                        </div>
                        <div>
                            <p>Address</p>
                            <p>{data?.data.eaddress}</p>
                        </div>
                        <div>
                            <p>Employee ID Proof</p>
                            <p>{data?.data.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeDetails;
