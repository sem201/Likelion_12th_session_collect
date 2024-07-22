import {useEffect, useState} from "react";
import axios from "axios";
import { 
    NewsItem,
    Img,
    Title
} from "./Styled";

const NewsApi = () =>{
    const [news,setNews] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
            setNews(response.data.articles);
            console.log(response.data.articles)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]); 

    return(
        <>
            {news.map((get)=>(
            <NewsItem key={get.id}>
                <Img src={get.urlToImage} alt="NO IMAGE"></Img>
                <Title>{get.title}</Title>
            </NewsItem>
            ))}
        </>
    )
}

export default NewsApi;