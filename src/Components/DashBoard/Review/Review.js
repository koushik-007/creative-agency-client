import React, { useState } from 'react';

const Review = ({loggedInUser}) => {

    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        newReview.image = loggedInUser.image;
        setReview(newReview);
    }

    const handleReview = (e) => {
        
        console.log(review);

        fetch('https://calm-wave-24035.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review),
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
                <h4>Review</h4>
                <h4> {loggedInUser.name} </h4>
            </div>
            <div className="col-md-12" style={{backgroundColor: "rgb(215, 240, 243)"}}>
                <div className="col-md-6 py-5">
                    <form onSubmit={handleReview}>
                    <div className="form-group">
                        <input onBlur={handleBlur} name="name" type="text" className="form-control" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} name="designation" type="text" className="form-control" placeholder="Comany's name, Designation"/>
                    </div>
                    
                    <div className="form-group">
                        <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="5" rows="2" placeholder="Description"></textarea>
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

export default Review;