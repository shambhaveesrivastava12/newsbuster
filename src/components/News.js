import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        // console.log("Hello i m from news component");
        this.state={
            articles: [],
            loading: false,
            page:1
        }
    }
    handleNextClick= async() =>{
        console.log("next");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0ae63f7d82a94e22ac5fd9f27e7c9eac&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page+1,
          articles:parsedData.articles,
        })
        
    }
    handlePrevClick= async() =>{
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0ae63f7d82a94e22ac5fd9f27e7c9eac&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page-1,
          articles:parsedData.articles,
        })
    }


    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0ae63f7d82a94e22ac5fd9f27e7c9eac&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
      <h2>NewsBuster - Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,51):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
      })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
     </div>
    )
  }
}

export default News;
