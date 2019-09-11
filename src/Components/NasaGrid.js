import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from "./Image";
import styled from "styled-components";


function NasaGrid() {

    const [title, setTitle] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);
    const [explain, setExplain] = useState([]);
    const [copyright, setCopyright] = useState([]);


    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ICLzHW9yb3MGATQd9zYxOun8OmsxIJVxyejtDhQE`)
            .then(response => {

                setTitle(response.data.title);
                setDate(response.data.date);
                setPhoto(response.data.hdurl);
                setExplain(response.data.explanation);
                setCopyright(response.data.copyright);

                console.log(response.data);

            })


            .catch(
                error => console.log(error)
            )
    }, [])


    return (

      <ContainerDiv>

                <Title>{title}</Title>
                <Date>{date}</Date>
                <div>

                   <Image imgURL={photo} />

                </div>



                <Explain>{explain}</Explain>

                <div>

                    <Copyright>{copyright}</Copyright>

                </div>


      </ContainerDiv>
    )


};




export default NasaGrid;
