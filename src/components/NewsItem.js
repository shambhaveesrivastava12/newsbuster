/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    // eslint-disable-next-line no-unused-vars
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div>
                <div className="my-3">
                    <div  className="card">
                        <img src={!imageurl?"https://cdn.siasat.com/wp-content/uploads/2023/08/xfbbsrbrs.jpg":imageurl}  className="card-img-top" alt="..."/>
                        <div  className="card-body">
                            <h5  className="card-title">{title}</h5>
                            <p  className="card-text">{description}</p>
                            <a href={newsurl} target="_blank" className="btn btn-dark" rel="noreferrer">Read More</a>
                        </div>
                    </div>
                    </div>
      </div>
    )
  }
}

export default NewsItem
