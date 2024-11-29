import React, { useState } from 'react'

const ListEmployeecomponent = () => {
    const[employee, setEmployee]=useState([]);
  return (
    <div className="container">
        <h1 className="center">List Employee</h1>
        <table className="table table-bordered table-striped">
        <thead>
            <th>Employee Id</th>
            <th>Employee First-Name</th>
            <th>Employee Last-Name</th>
            <th>Employee Email-Id</th>
        </thead>
        <tbody>
            {
                employee.map(
                    employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}

export default ListEmployeecomponent