import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FeedbackService from '../../services/FeedbackService';

function AllFeedBacks() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
                await FeedbackService.getAllFeedBack()
              .then((result) => {
                setData(result.data);
                console.log(data); // Log the updated data
              })
          } catch (error) {
            console.error( error);
          }
        };
      
        fetchData();
      }, []);
      
    return (
        <div>
            <h2>FeedBacks
            </h2>
            {
                data?
                    data.map((item)=>{
                        return(
                            <div>
                                <p key={item._id}>{item.stars}</p>
                                <h2>{item.name}</h2>
                                </div>
                        )
                    })
                :<h2>Loading..</h2>
            }
        </div>
    )
}

export default AllFeedBacks