import { useState } from 'react';
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaTumblr} from "react-icons/fa"
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`
}

const transition = "all 1s"

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())

  const changeQuote = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor())
  }

  return (
    <div className='background' style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor}}>
          
          <h2 id="text">
            <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
            {quote.quote}
          </h2>
          <h4 id="author">{quote.author}</h4>
        </div>
        <div className="buttons">
          <div>
            <a 
              href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}"}
              id='tweet-quote'
              target='_blank'
              style={{
                backgroundColor: randomColor,
                marginRight: "10px",
                transition
              }}>
                <FaTwitter color='#fff'/>
            </a>
            <a 
              id="tumblr-quote"
              target="_blank"
              style={{
                backgroundColor: randomColor,
                marginRight: "10px",
                transition,
              }}
              href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Gloria%20Steinem&amp;content=Dreaming%2C%20after%20all%2C%20is%20a%20form%20of%20planning.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"}>
              <FaTumblr color="white"/>
            </a>
          </div>
          <button id="new-quote" onClick={changeQuote}  
            style={{
              backgroundColor: randomColor,
              transition
            }}>
            New quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
