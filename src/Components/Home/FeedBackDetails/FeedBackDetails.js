import React from 'react';

const FeedBackDetails = (props) => {
    const {name, designation, description, pic, image} = props.review;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card shadow-sm mt-5 mb-5">
            <div className="card-header d-flex  align-items-center">
                {
                    pic ? <img className="mx-3" src={require(`../../../creative-agency/images/${pic}.png`)} alt="" width="60"/> :
                    <img src={image} width="60" style={{borderRadius: "50%", margin: "10px"}} alt=""/>
                }
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{description}</p>
            </div>
       </div>
       </div>
    );
};

export default FeedBackDetails;