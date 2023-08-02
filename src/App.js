
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = () => {
    const apiKey = 'c54f859c78ed4a6cbc183f50cb43e286'; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`; 

    axios.get(apiUrl)
      .then(function (response) {
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className='screen'>
        <h1>WELCOME TO THE NEWS PORTAL</h1>
        <div className='left'></div>

          {newsData.map((item, index) => (

          <div key = {index} className='all'>
      
            <div className='title'>
              {item.title}
            </div>

            <div className='photo'>
              <img src={item.urlToImage} alt={item.title} />
            </div>

            <div className='author'>
              <p>
                <i>
                  <b>{item.author}</b>
                </i>{' '}
                | {item.publishedAt}
              </p>
            </div>

            <div className='description'>
              {item.description}
            </div>

            <div className='read'>
              <Button variant='contained' href={item.url} target="_blank">
                Read full article
              </Button>
            </div>

          </div>
        ))}
        <div className='right'></div>
      </div>
    </div>
  );
}

export default App;
