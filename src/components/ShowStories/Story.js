import React from 'react'


const Link = ({url, title}) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);

export default function Story({story: {id, by, title, kids, time, url}}) {
    return (
        <div>
            <h3>
                <Link url={url} title={title} />
            </h3>
            <div className='storyInfo'>
                <span>
                    by{' '}
                    <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
                </span>
                <span>
                    {new Date(time * 1000).toLocaleDateString('en-Us', {
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </span>
                <span>
                    <Link 
                        url={`https://news.ycombinator.com/item?id=${id}`}
                        title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
                    />
                </span>
            </div>
        </div>
    );
};