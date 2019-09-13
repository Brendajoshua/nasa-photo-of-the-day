import React, { useState, useEffect }from "react";
import axios from "axios";
import Calender from "./Calender"
import ApodCard from "./ApodCard";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ApodList= () => {
    const api_key = 'DEMO_KEY'
    const [apod, setApod] = useState([]);
    const [imgDate, setDate] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
        .then(res => {
            console.log(res.data);
            setApod(res.data);
        });
    }, [imgDate]);

    if (!apod) return <h3>Loading...</h3>;

    return (
        <MainContainer>
            <Calender 
                imgDate={imgDate}
                setDate={setDate}
            />
            <ApodCard 
                key={apod.key}
                title={apod.title}
                date={apod.date}
                explain={apod.explanation}
                imgUrl={apod.url}
            />
        </MainContainer>    
    )
}

export default ApodList;