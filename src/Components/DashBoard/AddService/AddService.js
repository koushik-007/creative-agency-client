import React, { useState } from 'react';

const AddService = ({loggedInUser}) => {

    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newService = { ...addService };
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddService = (e) => {
        const formData = new FormData()
        console.log(addService);
        formData.append('file', file);
        formData.append('serviceTitle', addService.serviceTitle);
        formData.append('description', addService.description);

        fetch('https://calm-wave-24035.herokuapp.com/addService', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
                <h4>Add Services</h4>
                <h4> {loggedInUser.name} </h4>
            </div>
            <div className="col-md-12" style={{backgroundColor: "rgb(215, 240, 243)"}}>
                <div className="col-md-10 py-2 px-2 my-5 mx-4">
                    <form onSubmit={handleAddService}>
                    <div className="px-4 py-4 row" style={{backgroundColor: "white", borderRadius: "10px"}}>
                            <div className="col-6">
                            <div className="form-group">
                            <h6>Service Title</h6>
                            <input onBlur={handleBlur} name="serviceTitle" type="text" className="form-control" placeholder="Enter title"/>
                            </div>
                            
                            <div className="form-group">
                                <h6>Description</h6>
                                <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="5" rows="2" placeholder="Enter description"></textarea>
                            </div>
                            </div>
                            <div className="col-6 mt-1">
                                    <h6>Icon</h6>
                                    <input onChange={handleFileChange} name="file" type="file" required/>
                            </div>
                    </div>
                        <div className="form-group mt-2 d-flex justify-content-end">
                            <button type="submit" className="btn btn-style">Submit </button>
                        </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AddService;