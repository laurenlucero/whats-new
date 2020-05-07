import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = ({news}) => {
    const newsArticles = news.map(data => {
        return (
            <NewsArticle 
                img={data.img}
                headline={data.headline}
                description={data.description}
                url={data.url}
                key={data.id}
            />
        )
    })
    return (
    <section className="news-container">
    {newsArticles}
    </section>
    )
}

export default NewsContainer;