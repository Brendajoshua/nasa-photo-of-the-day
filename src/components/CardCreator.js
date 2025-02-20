import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.js';
import styled from 'styled-components';

let apiKey = 'RP2C4x40YT5dHBWemEdiGdjG1VXlqzNF75t8NUH9';

const StyledDiv = styled.div`
    background-image: url(${props => props.url});
    background-position: center center;
    width: 50%;
    height: 15vh;
`;

const CardCreator = props => {
    const [data, setData] = useState({});
    const [title, setTitle] = useState({});

    let url = `https://api.nasa.gov/planetary/apod?date=${props.date}&api_key=${apiKey}`;

    const [loading, fetchedData] = useHttp(url, props.date);

    useEffect(() => {
        if (fetchedData === null) {
            return;
        } else {
            setData({
                media_type: fetchedData.media_type,
                copyright: fetchedData.copyright,
                date: fetchedData.date,
                explanation: fetchedData.explanation,
                url: fetchedData.url,
                title: fetchedData.title,
            });
        }
    }, [fetchedData]);

    return (
        <StyledDiv
            url={
                data.media_type !== 'video'
                    ? data.url
                    : 'https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png'
            }
            onClick={() => props.updateCurrentImage(data)}
        />
    );
};

export default CardCreator;