import React from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth'
import {useQuery} from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Browse = props => {
    const {loading, data} = useQuery(QUERY_POSTS)


if (loading) {
    return <div>Loading...</div>
}

return(
    <div>
        Posts will go here
    </div>
)
};

export default Browse;