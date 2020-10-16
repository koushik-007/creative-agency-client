import React, { useEffect, useState } from 'react';
import FeedBackDetails from '../FeedBackDetails/FeedBackDetails'
import './FeedBacks.css'


const FeedBacks = () => {

    const [feedBacks, setFeedBacks] = useState([])
    useEffect(()=>{
        fetch('https://calm-wave-24035.herokuapp.com/showReviews',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setFeedBacks(data));
    },[])

    return (
       <section className="feedBacks my-5 mt-5 mb-5">
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h3>Clients <span style={{color: "#7AB259"}}>Feedback</span></h3>
               </div>
               <div className="card-deck mt-5 mb-5">
                    {
                        feedBacks.map(review => <FeedBackDetails review={review} key={review._id}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default FeedBacks;