import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetcher from '../../hooks/dataFetcher';
import Story from './Story';


const ShowStories = (props) => {
    let params = useParams();
    const type = params.type;
    console.log(type)
    const {isLoading, stories} = useDataFetcher(type);
    
    return (
        <div>
            {isLoading 
                ? (<h1>Loading...</h1>)
                : (
                    <div>
                        {stories.map(({data: story}) => (
                            <Story key={story.id} story={story} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ShowStories;
