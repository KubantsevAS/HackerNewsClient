import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
});

const getStory = async (id) => {
    try {
        const story = await instance.get(`item/${id}.json`);
        return story;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};

export const getStories = async (type) => {
    try {
        const { data: storyIds } = await instance.get(
            `${type}stories.json`
        );
        const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
};