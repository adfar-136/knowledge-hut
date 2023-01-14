import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
export default function Newss() {
    const [articles,setArticles] = useState([])
    let GetNews = async()=>{
     
        let data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-11-03&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        let parsedData=await data.json()
        console.log(parsedData)
        setArticles(parsedData.articles)
    }
   useEffect(()=>{
    GetNews()
   })
  return (
    
    <div className='container my-3'>
        <h2>Adfar Top News Headlines</h2>
        <div className="row my-3">
            
           {articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
            </div>
           })}
        </div>
        </div>
  )
}
