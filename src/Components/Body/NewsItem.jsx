import React from 'react'

function NewsItem(props) {
    const title = props.title;
    const description = props.description;
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere out in the field</a>
            </div>
        </div>
    </>
  )
}

export default NewsItem