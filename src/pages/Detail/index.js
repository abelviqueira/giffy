import React from 'react';
// import GifsContext from 'context/GifsContext';
import Gif from 'components/Gif';
import useGlobalGifs from 'hooks/useGlobalGifs';

export default function Detail ({ params }) {
    const gifs = useGlobalGifs();
    // console.log(gifs);

    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    );
    console.log(gif);
    
    return <Gif {...gif} />
}