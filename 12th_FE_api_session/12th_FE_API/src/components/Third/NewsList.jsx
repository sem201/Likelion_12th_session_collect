import {
  MainCotainer,
  NewsContainer,
  NewsHeader,
  ButtonContainer,
  ButtonContent,
} from "./Styled";

import NewsApi from "./NewsApi";

const NewsList = () => {
  return (
    <MainCotainer>
      <NewsContainer>
        <NewsHeader>멋사 NEWS</NewsHeader>
        <ButtonContainer>
          <ButtonContent>전체</ButtonContent>
          <ButtonContent>스포츠</ButtonContent>
          <ButtonContent>연예</ButtonContent>
          <ButtonContent>경제</ButtonContent>
        </ButtonContainer>
        <NewsApi/>
      </NewsContainer>
    </MainCotainer>
  )
};

export default NewsList;
