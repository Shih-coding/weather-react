import React from "react";
import Weather from "./Weather.js"
import "./Weather.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
        This project was coded by {""}
        <a href="https://tourmaline-croissant-4da783.netlify.app/" target="_blank" rel="noreferrer">
        Rebecca Shih</a> and is {""}
        <a href="https://github.com/Shih-coding/weather-react"
         target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
        </footer>
      </div>
    </div>
  );
}

