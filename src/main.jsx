import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Card from './Card.jsx';

import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div>
      <App />
      <Card
       imgsrc="./images/gambit.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/80234304"
       sname= "The Queens Gambit"
       
       ></Card>
       <Card
        imgsrc="./images/moneyheist.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/80192098"
       sname= "Money Heist"
       
       ></Card>
       <Card
        imgsrc="./images/squidgame.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/81040344"
       sname= "Squid Games"
       
       ></Card>
        <Card
        imgsrc="./images/dark.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/80100172"
       sname= "DARK"
       
       ></Card>
        <Card
        imgsrc="./images/strangerthings.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/80057281"
       sname= "STRANGER THINGS"
       
       ></Card>
        <Card
        imgsrc="./images/bigbang.jpg"  title = "A netflix original series"
       link = "https://www.netflix.com/in/title/70143830"
       sname= "THE BIG BANG THEORY"
       
       ></Card>
    </div>
  </>
);
