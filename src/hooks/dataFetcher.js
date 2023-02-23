import { getStories } from "../api/api";
import { useState, useEffect } from "react";

const useDataFetcher = (type) => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        getStories(type)
            .then((stories) => {
                setStories(stories);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [type]);

    return {isLoading, stories};
}

export default useDataFetcher;