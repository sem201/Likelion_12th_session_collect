import React from "react";
import { useParams } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";

import styled from "styled-components";
import TopBar from "../components/TopBar";

const Wrapper = styled.div`
    width: 80vw;
    height: 100%;
    background-color: #f5f5f5;
  * {
    border: 0;
}
`;

const Content = styled.div`
    display:flex;
    flex-direction: column;
    width: 55vw;
    margin-top:100px;
`

const Img = styled.img`
    width:300px;
    height:300px;
`

const Post = () => {
    const postID = useParams().postID;
    const FindPost = dummy_data.find(postcard =>
    postcard.postID === Number(postID)
    );

    return (
    <>
        <TopBar/>
        <div style={{display:'flex', justifyContent:'center'}}>
            <Content>
                <h1>{FindPost.title}</h1>
                <small>sungjae {FindPost.createdAt}</small>
                <Img style={{marginTop:'100px'}} src={FindPost.thumbnail} alt={FindPost.title}></Img>
                <p style={{marginTop:'100px'}}>{FindPost.content}</p>
            </Content>
        </div>
    </>
    );
};

function PostDetailPage() {
    const postID = useParams().postID;
    const FindPost = dummy_data.find(postcard =>
    postcard.postID === Number(postID)
);

return (
    <Wrapper>
        <Post />
    </Wrapper>
    )
}

export default PostDetailPage;