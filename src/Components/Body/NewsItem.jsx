import React, { useState, useEffect } from 'react'

function NewsItem(props) {

    const title = props.title;
    const description = props.description;
    const img = props.img;
    const newsSrc = props.newsSrc;
    const publishedAt = props.publishedAt;

  return (
    <>
      <div className='my-3'>
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">{new Date(publishedAt).toGMTString()}</small></p>
                <a href={newsSrc} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem