import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = []
    constructor(props){
        super(props)
        this.state = {
            articles : this.articles
        }
    }
    async componentDidMount(){
       let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e"
       let data = await fetch(url)
       let parsedData=await data.json()
       console.log(parsedData)
       this.setState({articles:parsedData.articles})
    }
  render() {
    
    return (
      <div className='container my-3'>
        <h2>Adfar Top News Headlines</h2>
        <div className="row my-3">
            
           {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
            </div>
           })}
        </div>
        
       
        

      </div>
    )
  }
}
