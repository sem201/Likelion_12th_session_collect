import React from "react";
import {styled} from "styled-components"

const Button = styled.button`
    background-color:transparent;
`

const Img = styled.img`
    width:24px;
    height:24px;
`
function TopBar(){
    return(
        <div style={{ display: 'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <Button style={{fontSize:'40px'}}>velog</Button>
            <div style={{display:'flex', gap:'10px', width:'200px',alignItems:'center'}}>
                <Button><Img src='/assets/notification.png'></Img></Button>
                <Button><Img src='/assets/loupe.png'></Img></Button>
                <Button style={{ backgroundColor:'black', color:'white',borderRadius:'30px', width:'80px',height:'30px', fontSize:'15px',fontWeight:'bolder'}}>로그인</Button>
            </div>
        </div>
    )
}

export default TopBar;