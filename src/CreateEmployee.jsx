import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import Sidebar from "./components/Sidebar";
import UploadInput from "./components/UploadInput"
import {useState} from 'react'
import './styles/styles.css'
import { useNavigate } from "react-router-dom";
const CreateEmployee = ({employees,setEmployees}) => {
    const InputFields = [
        {
            label: "Employee Name",
            type: "text",
            onChange:(e)=>{setDetails({...details,name:e.target.value})}
        },
        {
            label: "Employee ID",
            type: "text",
            onChange:(e)=>{setDetails({...details,id:e.target.value})}
        },
        {
            label: "Email",
            type: "email",
            onChange:(e)=>{setDetails({...details,email:e.target.value})}
        },
        {
            label: "Joining Date",
            type: "date",
            onChange:(e)=>{setDetails({...details,date:e.target.value})}
        },
        {
            label: "Experience",
            type: "number",
            onChange:(e)=>{setDetails({...details,experience:e.target.value})}
        },
        {
            label: "Address",
            type: "text",
            onChange:(e)=>{setDetails({...details,address:e.target.value})}
        }
    ]

    const InputSelects = [
        {
            label: "Role",
            options: [
                {
                    key:'',
                    label:'Select an option'
                },
                {
                    key: 'DEV',
                    label: 'Developer'
                },
                {
                    key: 'QA',
                    label: 'QA'
                }],
            onChange:(e)=>{setDetails({...details,role:e.target.value})}
        },
        {
            label: "Status",
            options: [
                {
                    key:'',
                    label:'Select an option'
                },
                {
                    key:'ACTIVE',
                    label: 'Active'
                },
                {
                    key: 'INACTIVE',
                    label: 'Inactive'
                },
                {
                    key: 'PROBATION',
                    label: 'Probation'
                }
                ],
            onChange:(e)=>{setDetails({...details,status:e.target.value})}
        },

    ]

    const navigate=useNavigate()

    const [details,setDetails]=useState({
        name:'',
        id:'',
        email:'',
        date:'',
        experience:'',
        address:'',
        role:'',
        status:''

    })

    const submitDetails = (e)=>{
        e.preventDefault()
        setEmployees([...employees,details])
        alert('Employee Created')
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
                            {InputFields.map(item => (<InputField label={item.label} type={item.type} onChange={item.onChange}/>))}
                            {InputSelects.map(item => (<InputSelect label={item.label} options={item.options} onChange={item.onChange}/>))}
                            <UploadInput label="Upload ID Proof" />
                        </div>
                        <div className="buttons">
                            <Button type="submit" label="Create" className="btn primary-btn"/>
                            <Button label="Cancel" className="btn secondary-btn" onClick={()=>navigate('/employeelist')} />
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};

export default CreateEmployee;
