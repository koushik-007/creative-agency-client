import React, { useState } from 'react';


const Order = ({loggedInUser}) => {

    const [orderInfo, setOrderInfo] = useState({});
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMesaage] = useState(false);
    const handleBlur = e => {
        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleOrder = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', orderInfo.name);
        formData.append('email', orderInfo.email);
        formData.append('projectName', orderInfo.projectName);
        formData.append('projectDetails', orderInfo.projectDetails);
        formData.append('price', orderInfo.price);
        formData.append('projectStatus', orderInfo.projectStatus= "Pending");

        fetch('https://calm-wave-24035.herokuapp.com/addOrders', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setSuccessMesaage(data);
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }

    return (
        <div className="mt-4">
            <div className="row" style={{margin: "0 0"}}>
                <div className="col-md-12 d-flex justify-content-between mb-3">
                    <h4>Order</h4>
                    <h4> {loggedInUser.name} </h4>
                </div>
                <div className="col-md-12" style={{backgroundColor: "rgb(215, 240, 243)"}}>
                    <div className="text-center text-success">
                        {
                            successMessage && <h4>Your Order Have Been Submitted , Please Click Service List To See Your Order Info  </h4>
                        }
                    </div>
                    <div className="col-md-6 py-5">
                        <form onSubmit={handleOrder}>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="name" type="text" className="form-control" placeholder="Your name / comany's name" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="email" type="text" className="form-control" placeholder="Your email address" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="projectName" type="text" className="form-control" placeholder="Project name" required/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="projectDetails" className="form-control" id="" cols="5" rows="2" placeholder="Project details" required></textarea>
                        </div>

                        <div className="form-group row">
                            <div className="col-6">
                                <input onBlur={handleBlur} name="price" type="text" className="form-control" placeholder="Price" required/>
                            </div>
                            <div className="col-6">
                               <input onChange={handleFileChange} name="file" type="file" required/>
                            </div>
                        </div> 
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-style">Submit </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Order;