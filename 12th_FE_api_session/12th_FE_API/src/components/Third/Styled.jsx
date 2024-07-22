import { styled } from "styled-components";

//GET
export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const BtnContainer = styled.div`
  padding: 20px;
  background-color: #eee;
  cursor: pointer;
  border: 1px solid #ccc;
  max-width: 200px;
  margin: 20px auto;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
`;

export const GetWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const GetTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const GetBody = styled.p`
  font-size: 16px;
  color: #555;
`;

export const GetId = styled.div`
  color: black;
  font-size: 10px;
  margin-bottom: 10px;
`;

//POST

export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 130px;
  margin-bottom: 50px;
`;

export const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: larger;

  input,
  textarea {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 10px;
  }

  input {
    height: 36px; /* 예시: input의 높이 조정 */
  }
`;

export const MainCotainer = styled.div `
  width:70%;
  margin: 0 auto;
`
export const NewsContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const NewsHeader = styled.div`
  font-size:30px;
  margin: 30px 0px 30px 0px;
`

export const ButtonContainer = styled.div`
  border:1px white solid;
  width:100%;
  margin-bottom:30px;
`

export const ButtonContent = styled.button`
  background-color: inherit;
  color : white;
`

export const  NewsItem = styled.div`
  display:flex;
  width:100%;
  justify-content:flex-start;
  flex-direction: row;
  height:100px;
`

export const Img = styled.img`
  height:80px;
  width:100px;
`

export const Title=styled.div`
  margin-left: 20px;
`