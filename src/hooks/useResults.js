import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp'

export default (()=>{
    const [restaurants, setRestaurants] = useState([]);
    const [errm, setErrM] = useState('')


    //Helper function
    const searchAPI = async(searchTerm)=>{
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    //term,
                    location: 'san jose'
                }
            });
            setRestaurants(response.data.businesses);
        } catch (err) {
            setErrM('Something went wrong')

         }
    };
//run searchAPI just once
useEffect(()=>{
    searchAPI('pasta')
},[]);

return [searchAPI, restaurants, errm]
})