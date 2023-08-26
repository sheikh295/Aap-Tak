import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

function News(props) {

  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f95d94d8d93847c9805d41cd926525a7')
      .then((response) => {
        setArticles(response.data.articles)
      })
      .catch((error) => {
        console.log(error)
      })
  },[]);

  return (
    <>
      <div className='container my-3'>
        <h2>Aap Tak Top Headlines</h2>
        <div className='row'>
          {articles.map((article) => {
          return <div className='col-md-4'>
              <NewsItem title={article.title.slice(0, 40)} description={article.description.slice(0, 85)} img={article.urlToImage?article.urlToImage:'https://i.insider.com/64e9c9eab413420019a3f4de?width=1200&format=jpeg'} newsSrc={article.url} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default News