/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./assets/fire.png";
import "./App.css";

function App() {
  const [quote, setQuote] = useState([]);
  const [quotes, setQuotes] = useState(0);

  function getRandomQuote(quote) {
    return quote[Math.floor(Math.random() * quote.length)];
  }

  function getNewQuote() {
    setQuotes(getRandomQuote(quote));
  }

  useEffect(() => {
    async function generateQuote() {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        setQuote(response.data);
        setQuotes(response.data[0]);
      } catch (error) {
        console.log("Error", error);
      }
    }

    generateQuote();
  }, []);

  return (
    <main>
      <h1>
        <img src={logo}></img>Get Inspired
      </h1>
      <section className="Main-Section">
        <h3>
          <span>" </span>
          {quotes?.text}
          <span> "</span>
        </h3>
        <i>- {quotes?.author}</i>
        <button onClick={getNewQuote}>Show More</button>
      </section>
    </main>
  );
}

export default App;
