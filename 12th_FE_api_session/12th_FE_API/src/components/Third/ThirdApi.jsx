import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";
import {
  GetWrapper,
  GetTitle,
  GetBody,
  GetId,
} from "./Styled";

const ThirdApi = () => {
  //state 작성
  const [news, setNews] = useState([]);
  const fetchData = async()=>{
    try{
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
      setNews(response.data.articles);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  }
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}
  
  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
        
      </BtnWrapper>
      {news.map((get) => (
        <GetWrapper key={get.id}>
          <GetId>User ID: {get.userId}</GetId>
          <GetTitle>Title: {get.title}</GetTitle>
        </GetWrapper>
      ))}
    </>
  );
};

export default ThirdApi;
