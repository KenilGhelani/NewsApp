import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, Url, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <h6>Example heading <span class="badge bg-dark">{source}</span></h6>
        <p className="card-text">{description}...</p>
        <p class="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={Url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
