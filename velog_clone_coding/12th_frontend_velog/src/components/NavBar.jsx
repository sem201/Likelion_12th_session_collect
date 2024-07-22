import React from 'react';
import {styled} from "styled-components"

const Button=styled.button`
    background-color: transparent;
    font-size: 20px;
`

const Img = styled.img`
    width:20px;
    height:20px;
    margin-right:10px;
`
function NavBar(){
    return(
        <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:'40px'}}>
            <div style={{display:'flex',gap:'10px'}}>
                <Button><Img src='/assets/trend.png'></Img>트렌딩</Button>
                <Button><Img src='/assets/clock.png'></Img>최신</Button>
                <Button><Img src='/assets/wifi-signal.png'></Img>피드</Button>
            </div>
            <div>
                <select name="when" style={{boxShadow:'0 0 4px rgba(0,0,0,.05)', fontSize:"18px", borderRadius:'5px',height:'27px'}}>
                    <option value="today">오늘</option>
                    <option value="week">이번주</option>
                    <option value="month">이번달</option>
                    <option value="year">올해</option>
                </select>
                <Button><Img src='/assets/dots.png'></Img></Button>
            </div>
        </div>
    )
}

export default NavBar;