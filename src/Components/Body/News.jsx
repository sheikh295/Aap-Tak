import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import Loader from '../Loader'

function News(props) {
  
  const [articles, setArticles] = useState(['']);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(0);
  const [page3, setPage3] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    if (page == 1) {
      axios
      .get(`https://newsdata.io/api/1/news?apikey=pub_28530c92e33699f07e69a91449011eac73fea&language=en&image=1&country=${props.country}&category=${props.category}`)
      .then((response) => {
        setArticles(response.data.results)
        setPage2(response.data.nextPage)
      })
      .catch((error) => {
        setError(error.message)
      })
    }
    else if (page == 2) {
      axios
      .get(`https://newsdata.io/api/1/news?apikey=pub_28530c92e33699f07e69a91449011eac73fea&language=en&image=1&country=${props.country}&category=${props.category}&page=${page2}`)
      .then((response) => {
        setArticles(response.data.results)
        setPage3(response.data.nextPage)
      })
      .catch((error) => {
        setError(error.message)
      })
    }
    else if (page == 3) {
      axios
      .get(`https://newsdata.io/api/1/news?apikey=pub_28530c92e33699f07e69a91449011eac73fea&language=en&image=1&country=${props.country}&category=${props.category}&page=${page3}`)
      .then((response) => {
        setArticles(response.data.results)
      })
      .catch((error) => {
        setError(error.message)
      })
    }
  },[page, props.country, props.category]);
  
  const prevClick = () => {
    setPage(page - 1)
  };
  const nextClick = () => {
    setPage(page + 1)
  };

  if (articles == '') {
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center'>Aap Tak - Todays {props.category} Headlines</h1>
          <div className='row mt-5'>
            <Loader />
          </div>
          <div className="container d-flex justify-content-between mt-5">
            <button disabled={page <= 1 ? true : false} onClick={prevClick} type="button" className="btn btn-dark">&larr; Previous</button>
            <button disabled={page == 3 ? true : false} onClick={nextClick} type="button" className="btn btn-dark">Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center'>Aap Tak - Todays {props.category} Headlines</h1>
          <h3 className='text-danger'> {error} </h3>
          <div className='row mt-5'>
            {
            articles == '' || loading == true ? <Loader /> : 
            articles.map((article) => {
                return <div className='col-md-4' key={article.article_id}>
                    <NewsItem title={article.title.slice(0, 40)+'...'} description={article.description.slice(0, 80)+'...'} img={article.image_url?article.image_url:'https://media.istockphoto.com/id/1183338499/vector/0547.jpg?s=612x612&w=0&k=20&c=yNkIf4DxCEkOb0EXoq5kQ0XX1k5T53QYQLgL_j2Rg5M='} newsSrc={article.link} pubDate={article.pubDate} />
                  </div>
              })
            }
          </div>
          <div className="container d-flex justify-content-between mt-5">
            <button disabled={page <= 1 ? true : false} onClick={prevClick} type="button" className="btn btn-dark">&larr; Previous</button>
            <button disabled={page == 3 ? true : false} onClick={nextClick} type="button" className="btn btn-dark">Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News