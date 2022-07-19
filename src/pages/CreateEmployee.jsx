import Button from "../components/Button";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Sidebar from "../components/Sidebar";
import UploadInput from "../components/UploadInput"
import {useState} from 'react'
import '../styles/styles.css'
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation } from "../services/EmployeeAPI";
const CreateEmployee = () => {
    
    const [addEmployee]=useCreateEmployeeMutation()

    const [details,setDetails]=useState({
        name:'',
        id:'',
        email:'',
        joiningDate:'',
        experience:'',
        eaddress:'',
        role:'',
        status:''

    })

    const InputFields = [
        {
            label: "Employee Name",
            type: "text",
            onChange:(e)=>{setDetails({...details,name:e.target.value})},
            value:details.name
        },
        {
            label: "Employee ID",
            type: "text",
            onChange:(e)=>{setDetails({...details,id:e.target.value})},
            value:details.id
        },
        {
            label: "Email",
            type: "email",
            onChange:(e)=>{setDetails({...details,email:e.target.value})},
            value:details.email
        },
        {
            label: "Joining Date",
            type: "date",
            onChange:(e)=>{setDetails({...details,joiningDate:e.target.value})},
            value:details.joiningDate
        },
        {
            label: "Experience",
            type: "number",
            onChange:(e)=>{setDetails({...details,experience:e.target.value})},
            value:details.experience
        },
        {
            label: "Address",
            type: "text",
            onChange:(e)=>{setDetails({...details,eaddress:e.target.value})},
            value:details.eaddress
        }
    ]

    const InputSelects = [
        {
            label: "Role",
            options: [
                {
                    key:'SELECT',
                    value:'',
                    label:'Select an option'
                },
                {
                    key:'FRONTEND',
                    value:'Frontend Engineer',
                    label:'Frontend Engineer'
                },
                {
                    key:'BACKEND',
                    value:'Backend Engineer',
                    label:'Backend Engineer'
                },
                {
                    key: 'FULL',
                    value:'Full Stack',
                    label: 'Full Stack'
                },
                {
                    key: 'UI',
                    value:'UI Engineer',
                    label: 'UI Engineer'
                },
                {
                    key: 'QA',
                    value:'QA',
                    label: 'QA'
                },
                {
                    key: 'DEVOPS',
                    value:'Devops',
                    label: 'Devops'
                }],
            onChange:(e)=>{setDetails({...details,role:e.target.value})},
            value:details.role
        },
        {
            label: "Status",
            options: [
                {
                    key:'SELECT',
                    value:'',
                    label:'Select an option'
                },
                {
                    key:'ACTIVE',
                    value:'Active',
                    label: 'Active'
                },
                {
                    key: 'INACTIVE',
                    value:'Inactive',
                    label: 'Inactive'
                },
                {
                    key: 'PROBATION',
                    value:'Probation',
                    label: 'Probation'
                }
                ],
            onChange:(e)=>{setDetails({...details,status:e.target.value})},
            value:details.status
        },

    ]

    const navigate=useNavigate()



    const submitDetails = (e)=>{
        e.preventDefault()
        addEmployee(details)
        alert("Employee Created")
        navigate("/employees")
    }

    return (
        <>
            <Sidebar/>
            <div className="main">
                <div className="banner"></div>
                <div className="main-header">
                    <h3>Create Employee</h3>
                </div>
                <form onSubmit={submitDetails}>
                    <section className="form-section">
                        <div className="input-fields" id="input-fields">
                            {InputFields.map((item,index) => (<InputField key={index} label={item.label} type={item.type} onChange={item.onChange} value={item.value}/>))}
                            {InputSelects.map((item,index) => (<InputSelect key={index} label={item.label} options={item.options} onChange={item.onChange} value={item.value}/>))}
                            <UploadInput label="Upload ID Proof" />
                        </div>
                        <div className="buttons">
                            <Button type="submit" label="Create" className="btn primary-btn"/>
                            <Button label="Cancel" className="btn secondary-btn" onClick={()=>navigate('/employees')} />
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};

export default CreateEmployee;
