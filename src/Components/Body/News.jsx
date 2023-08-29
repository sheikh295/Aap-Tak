import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import Loader from '../Loader'

function News(props) {
  
  const [articles, setArticles] = useState(['']);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    axios
    .get(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=f95d94d8d93847c9805d41cd926525a7&page=${page}&pagesize=6&category=${props.category}`)
    .then((response) => {
      setArticles(response.data.articles)
      setTotalArticles(response.data.totalResults)
    })
    .catch((error) => {
      setError(error.message)
    })
  },[page, props.country, props.category]);
  
  const prevClick = () => {
    setPage(page - 1)
  };
  const nextClick = () => {
    setPage(page + 1)
  };
  
  const totalPages = Math.ceil(totalArticles / 6)

  return (
    <>
      <div className='container my-3'>
        <h1 className='text-center'>Aap Tak - Top {props.category} Headlines</h1>
        <h3 className='text-danger'> {error} </h3>
        <div className='row mt-5'>
          {
          articles == '' || loading == true ? <Loader /> : 
          articles.map((article) => {
              return <div className='col-md-4' key={article.url}>
                  <NewsItem title={article.title} description={article.description} img={article.urlToImage?article.urlToImage:'https://i.insider.com/64e9c9eab413420019a3f4de?width=1200&format=jpeg'} newsSrc={article.url} />
                </div>
            })
          }
        </div>
        <div className="container d-flex justify-content-between mt-5">
          <button disabled={page <= 1 ? true : false} onClick={prevClick} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={page == totalPages ? true : false} onClick={nextClick} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    </>
  )
}

export default News