import React, { useContext,useEffect,useState } from 'react';
import { userContext } from '../../../App';
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList.js/ServiceList';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(null)
    useEffect(()=>{
        fetch('https://calm-wave-24035.herokuapp.com/isAdmin',{
            method: "POST",
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data=> setIsAdmin(data))
    },[])
    const [order, setOrder] = useState(true);
    const [serviceList, setServiceList] = useState(false);
    const [review, setReview] = useState(false);
    const handleClient = (e) => {
        if (e.target.innerText === "Order") {
            setOrder(true);
            setServiceList(false);
            setReview(false);
        }
        if (e.target.innerText === "Service List") {
            setOrder(false);
            setServiceList(true);
            setReview(false);
        }
        if (e.target.innerText === "Review") {
            setOrder(false);
            setServiceList(false);
            setReview(true);
        }
    }
        
        const [adminServiceList, setAdminServiceList] = useState(true);
        const [addService, setAddService] = useState(false);
        const [makeAdmin, setMakeAdmin] = useState(false);

        const handleAdmin = (e) => {
            if (e.target.innerText === "Service List") {
                setAdminServiceList(true);
                setAddService(false);
                setMakeAdmin(false);
            }
            if (e.target.innerText === "Add Service") {
                setAdminServiceList(false);
                setAddService(true);
                setMakeAdmin(false);
            }
            if (e.target.innerText === "Make Admin") {
                setAdminServiceList(false);
                setAddService(false);
                setMakeAdmin(true);
            }
        }
    
    return (
        <section>
            <div className="row" style={{margin: "0"}}>
                <div className="col-md-3 col-sm-4 col-12">
                    <Sidebar handleClient={handleClient} handleAdmin={handleAdmin} isAdmin={isAdmin}></Sidebar>
                </div>
                {
                    isAdmin ? 
                    <div className="col-md-9 col-sm-8">
                    {
                        adminServiceList && <AdminServiceList loggedInUser={loggedInUser}></AdminServiceList>
                    }
                    {
                        addService && <AddService loggedInUser={loggedInUser}></AddService>
                    }
                    {
                        makeAdmin && <MakeAdmin loggedInUser={loggedInUser}></MakeAdmin>
                    }
                    </div>
                    :
                <div className="col-md-9 col-sm-8">
                    {
                        order && <Order loggedInUser={loggedInUser}></Order>
                    }
                    {
                        serviceList && <ServiceList loggedInUser={loggedInUser}></ServiceList>
                    }
                    {
                        review && <Review loggedInUser={loggedInUser}></Review>
                    }
                </div>
                }
               
            </div>
        </section>
    );
};

export default Dashboard;