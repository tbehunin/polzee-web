import React from 'react';
import { API } from 'aws-amplify';

const FetchDataButton = () => {

    const fetchData = async () => {
        let result;
        try {
            result = await API.get('polzeeApi', 'generateToken');
            console.log('toddtest result', result);
        }
        catch(ex) {
            console.log('caught exception: ', ex);
        }
    }

    return (
        <div>
            <button onClick={fetchData}>click me</button>
        </div>
    )
}

export default FetchDataButton;
