import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ img, headline, description, url, id }) => {
    return (
        <article className='news-article'>
            <img className='article-image' src={img} alt={headline} />
                <h2>{headline}</h2>
                <p>{description}</p>
            <a href={url} target='_blank' rel='noreferrer noopener'>
            <button className='read-article-btn'>Read Article</button>
            </a>
        </article>
        )
    }

export default NewsArticle;