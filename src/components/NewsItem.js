/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    // eslint-disable-next-line no-unused-vars
    let {title, description, imageurl, newsurl, author, date, source} = this.props;
    return (
      <div>
                <div className="my-3">
                    <div  className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}  </span>
                        <img src={!imageurl?"https://cdn.siasat.com/wp-content/uploads/2023/08/xfbbsrbrs.jpg":imageurl}  className="card-img-top" alt="..."/>
                        <div  className="card-body">
                            <h5  className="card-title">{title}</h5>
                            <p  className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsurl} target="_blank" className="btn btn-dark" rel="noreferrer">Read More</a>
                        </div>
                    </div>
                    </div>
      </div>
    )
  }
}

export default NewsItem
