import React from 'react';

const FeedBackDetails = (props) => {
    const {name, designation, description, pic} = props.review;
    return (
        <div className="card shadow-sm mt-5 mb-5">
            <div className="card-header d-flex  align-items-center">
                {
                    pic ? <img className="mx-3" src={require(`../../../creative-agency/images/${pic}.png`)} alt="" width="60"/> :
                    <img src="" alt=""/>
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
    );
};

export default FeedBackDetails;