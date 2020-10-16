import React from 'react';

const AdminServiceListDetails = ({list}) => {
    console.log(list);
    const { name, email, projectName, projectDetails, projectStatus } = list;
    return (
        <tr>
            <th scope="row"> {name} </th>
            <td> {email} </td>
            <td> {projectName} </td>
            <td>{projectDetails}</td>
            <td> {projectStatus} </td>
        </tr>
    );
};

export default AdminServiceListDetails;