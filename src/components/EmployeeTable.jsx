import React from 'react'

function EmployeeTable({ employees }) {
    return (
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
                    employees.map((item) => {
                        return (
                            <tr className='table-row'>
                                <td >{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.date}</td>
                                <td>{item.role}</td>
                                <td>
                                    <div className='status-style' 
                                         style={{ 
                                            backgroundColor:item.status==='Active'?'#D3F4BE':(item.status==='Inactive'?'#FFBFBF':'#F5ECB8')}}>{item.status}</div></td>
                                <td>{item.experience} Years</td>
                                <td>Delete Edit</td>
                            </tr>
                        )
                    })
                }
            </tbody>


        </table>
    )
}

export default EmployeeTable