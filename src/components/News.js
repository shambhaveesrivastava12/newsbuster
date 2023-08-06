import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "'What a competitor. What a cricketer. What a bowler.'",
            "description": "Few England cricketers have created memorable moments, fed off the crowd or enjoyed the battle like the retiring Stuart Broad, writes Stephan Shemilt.",
            "url": "http://www.bbc.co.uk/sport/cricket/66351643",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17CA8/production/_130584479_broad.jpg",
            "publishedAt": "2023-07-29T23:52:19.7182254Z",
            "content": "Broad wanted to retire 'at the top'\r\nAlways a man for the big moment, Stuart Broad has seized another.\r\nIn announcing his decision to retire from all cricket, the consummate performer created a littl… [+7319 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Jake Lambourne, Alex Crook",
            "title": "England star Stuart Broad announces retirement from all forms of cricket after fifth Ashes Test...",
            "description": "Stuart Broad has revealed he will retire from all forms of cricket following the fifth Ashes Test. The England star announced the decision after Day Three of the fifth Test at The Oval on Saturday.…",
            "url": "https://talksport.com/sport/cricket/1515412/england-stuart-broad-retirement-cricket-ashes/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/07/OQ-TALKSPORT-BROAD.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-07-29T18:07:11Z",
            "content": "Stuart Broad has revealed he will retire from all forms of cricket following the fifth Ashes Test.\r\nThe England star announced the decision after Day Three of the fifth Test at The Oval on Saturday.\r… [+3408 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("Hello i m from news component");
        this.state={
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0ae63f7d82a94e22ac5fd9f27e7c9eac";
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
     </div>
    )
  }
}

export default News;
