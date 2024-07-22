import React from "react";
import { styled } from "styled-components";
import { dummy_data } from "../data/dummy_data";
import { Link } from "react-router-dom";

const Img = styled.img`
width: 300px;
height: 167px;
`;

const Information = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '50px', marginTop: '50px' }}> 
        {dummy_data.map((item) => (
            <Link key={item.postID} to={`detail/${item.postID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '300px', height: '380px', backgroundColor: 'white', boxShadow: '0 4px 16px 0 rgba(0,0,0,.04)' }}>
                <Img src={item.thumbnail} alt={item.title} />
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', height: '180px' }}>
                <h5 style={{ margin: '10px 0px' }}>{item.title}</h5>
                <p>{item.content}</p>
                <small style={{ marginTop: 'auto' }}>{item.createdAt}</small>
                </div>
            </div>
            </Link>
        ))}
    </div>
);
};

export default Information;
