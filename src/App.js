import React, {useEffect, useState} from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=LvwG1jc3nFK9WIDbWDNxU7Be4zoWvso7&q=marvel&limit=10&offset=0&rating=g&lang=en';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
     console.log('Efecto ejecutado');
     fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        const {data} = response;
        const gifs = data.map(image => image.images.downsized_medium.url);
        setGifs(gifs);
      })
    //  setGifs(DIFFERENT_GIFS)
  }, []) 

  return (
    <div className="App">
      <section className="App-header">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
