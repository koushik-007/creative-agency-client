import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [serviceList, setService ] = useState([]);
    useEffect(()=>{
        fetch('https://calm-wave-24035.herokuapp.com/clientData')
        .then(res=> res.json())
        .then(data => setService(data));
    },[])
    return (
        <div className="mt-4">
            <div className="row" style={{margin: "0 0"}}>
                <div className="col-md-12 d-flex justify-content-between mb-3">
                    <h4>Services list</h4>
                    <h4> {loggedInUser.name} </h4>
                </div>
                <div className="col-md-12 d-flex justify-content-center" style={{backgroundColor: "rgb(215, 240, 243)", height: "25rem"}}>
                    <div className="col-md-11 col-12 py-5 mt-5" style={{backgroundColor: "white", borderRadius: "10px"}}>
                    <table class="table">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceList.length > 0 ? 
                                
                                serviceList.map(list => <AdminServiceListDetails list={list}></AdminServiceListDetails>)
                                
                                : 
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            }
                        </tbody>
                        </table>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;