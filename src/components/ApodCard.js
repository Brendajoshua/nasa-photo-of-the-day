import React from "react";
import styled from "styled-components";
// import {Card, Image} from "semantic-ui-react";

const Card = styled.div`
    color: #F7F7F2;
    width: 60%;
    // height: 30%;
    border: 2px solid #DEF4C6;
    margin: 0 auto;
`;

const Image = styled.img`
    width: 100%;
    margin: 0;
`;

const Content = styled.div`
    background: #F7F7F2;
    margin: 0;
`;

const CardHeader = styled.h3`
    font-size: 2rem;
    color: black;
    margin: 0;
    padding-top: 5px;
`;

const CardDate = styled.span`
    color: black;
`;

const CardDesp = styled.p`
    font-size: 1rem;
    color: black;
    margin: 0;
`;

const ApodCard = (props) => {
    return (
        <Card>
            <Image src={props.imgUrl} alt="NASA APOD" />
            <Content>
                <CardHeader>{props.title}</CardHeader>
                    <CardDate>{props.date}</CardDate>                
                <CardDesp>{props.explain}</CardDesp>
            </Content>
        </Card>

    )
}

export default ApodCard;