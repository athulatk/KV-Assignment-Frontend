import Button from "../components/Button";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Sidebar from "../components/Sidebar";
import UploadInput from "../components/UploadInput"
import {useEffect, useState} from 'react'
import '../styles/styles.css'
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from "../services/EmployeeAPI";
const EditEmployee = () => {
    
    const {id} =useParams()
    const {data} = useGetEmployeeByIdQuery(id)
    const [details,setDetails]=useState({})

    useEffect(() => {
      data && setDetails(data.data)
    }, [data])

    const [updateEmployee]=useUpdateEmployeeMutation()
    

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
            value:details.id,
            disabled:true
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
            onChange:(e)=>{setDetails({...details,address:e.target.value})},
            value:details.eaddress
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
            onChange:(e)=>{setDetails({...details,role:e.target.value})},
            value:details.role
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
            onChange:(e)=>{setDetails({...details,status:e.target.value})},
            value:details.status
        },

    ]

    const navigate=useNavigate()

    const submitDetails = (e)=>{
        e.preventDefault()
        updateEmployee({id,...details})
        alert("Data Updated")
        navigate("/employees")
    }

    return (
        <>
            <Sidebar/>
            <div className="main">
                <div className="banner"></div>
                <div className="main-header">
                    <h3>Edit Employee</h3>
                </div>
                <form onSubmit={submitDetails}>
                    <section className="form-section">
                        <div className="input-fields" id="input-fields">
                            {InputFields.map((item,index) => (<InputField key={index} label={item.label} type={item.type} onChange={item.onChange} value={item.value} disabled={item.disabled}/>))}
                            {InputSelects.map((item,index) => (<InputSelect key={index} label={item.label} options={item.options} onChange={item.onChange} value={item.value}/>))}
                            <UploadInput label="Upload ID Proof" />
                        </div>
                        <div className="buttons">
                            <Button type="submit" label="Update" className="btn primary-btn"/>
                            <Button label="Cancel" className="btn secondary-btn" onClick={()=>navigate('/employees')} />
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};

export default EditEmployee;
