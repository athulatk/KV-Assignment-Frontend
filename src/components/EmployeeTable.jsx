import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteEmployeeMutation } from '../services/EmployeeAPI'
import DeleteIcon from './DeleteIcon'
import PencilIcon from './PencilIcon'
import Popup from './Popup'
function EmployeeTable({ data }) {
    const navigate = useNavigate()
    const [deleteEmployee,result] = useDeleteEmployeeMutation()
    const [deleteId,setDeleteId]=useState('')
    const [open,setOpen]=useState(false)
    console.log(result)
    return (
        <>
        <table className='employee-table'>
            <thead>
                <tr className='table-row'>
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Joining Date</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Experience</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {
                    data?.data.map((item) => {
                        return (
                            <tr className='table-row entry-row'>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>{item.name}</td>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>{item.id}</td>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>{item?.joiningDate?.slice(0,10)}</td>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>{item.role}</td>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>
                                    <div className='status-style'
                                        style={{
                                            backgroundColor: item.status === 'Active' ? '#D3F4BE' : (item.status === 'Inactive' ? '#FFBFBF' : '#F5ECB8')
                                        }}>{item.status}</div></td>
                                <td onClick={() => navigate(`/employees/${item.id}`)}>{item.experience} Years</td>
                                <td>
                                   <button className='icon-btn' onClick={(e)=>{
                                    e.preventDefault();
                                    setDeleteId(item.id)
                                    setOpen(true)
                                    // deleteEmployee(item.id)
                                    }}>
                                        <DeleteIcon/>
                                   </button>
                                   <button className='icon-btn' onClick={()=>{navigate(`/edit/${item.id}`)}}>
                                        <PencilIcon/>
                                   </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>


        </table>
        {open&&<Popup mainHeading="Are you sure?" subHeading="Do you really want to delete the employee?" func={deleteEmployee} setOpen={setOpen} deleteId={deleteId} setDeleteId={setDeleteId}/>}
        </>
    )
}

export default EmployeeTable