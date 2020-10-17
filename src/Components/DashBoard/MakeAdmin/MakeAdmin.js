import React, { useState } from 'react';

const MakeAdmin = ({loggedInUser}) => {

    const [makeAdmin, setMakeAdmin] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const handleBlur = e => {
        const newAdmin = { ...makeAdmin };
        newAdmin[e.target.name] = e.target.value;
        setMakeAdmin(newAdmin);
    }

    const handleAdminMake =(e)=> {
        fetch('https://calm-wave-24035.herokuapp.com/makeAdmin', {
         method: "POST",
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(makeAdmin)
    })
            .then(response => response.json())
            .then(data => {
                setSuccessMessage(data);           
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
                    <h4>Make Admin</h4>
                    <h4> {loggedInUser.name} </h4>
                </div>
                <div className="col-md-12" style={{backgroundColor: "rgb(215, 240, 243)"}}>
                <div className="text-center text-success">
                        {
                            successMessage && <h4>Your Have Been make New Admin SuccessFully </h4>
                        }
                    </div>
                    <div className="col-md-6 py-5">
                        <form onSubmit={handleAdminMake}>
                        
                        <div className="form-group">
                            <h6>Email</h6>
                            <input onBlur={handleBlur} name="email" type="text" className="form-control" placeholder="Your email address" required/>
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

export default MakeAdmin;