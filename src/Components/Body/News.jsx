import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'


function News(props) {
  
  const [articles, setArticles] = useState([''])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  
  useEffect(() => {
    axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f95d94d8d93847c9805d41cd926525a7&page=${page}`)
    .then((response) => {
      setArticles(response.data.articles)
    })
    .catch((error) => {
      setError(error.message)
    })
  },[page]);

  const prevClick = () => {
    setPage(page - 1)
  };
  const nextClick = () => {
    setPage(page + 1)
  };
  
  return (
    <>
      <div className='container my-3'>
        <h2>Aap Tak Top Headlines</h2>
        {/* <h4 className='text-danger'> {error} </h4> */}
        <div className='row'>
          {articles == null/undefined ? articles.map((article) => {
          return <div className='col-md-4' key={article.url}>
              <NewsItem title={article.title.slice(0, 40)+'...'} description={article.description.slice(0, 85)+'...'} img={article.urlToImage?article.urlToImage:'https://i.insider.com/64e9c9eab413420019a3f4de?width=1200&format=jpeg'} newsSrc={article.url} />
            </div>
          }) : <h1 className='text-danger'> {error} </h1>}
        </div>
        <div className="container d-flex justify-content-between mt-5">
          <button disabled={page <= 1 ? true : false} onClick={prevClick} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={articles == null/undefined ? true : false} onClick={nextClick} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    </>
  )
}

export default News