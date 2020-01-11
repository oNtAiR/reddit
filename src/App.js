import React from 'react';
import logo from './logo.svg';
import './App.css';
import SS from './main.module.scss'

function App() {
  return (
    <div className={SS.main}>
      <h1>Top Posts From Reddit Development SubReddis</h1>

      <div className={SS.subName}>
        <button>/webdev</button>
        <button>/web_design</button>
        <button>Name</button>
        <button>Name</button>
        <button>Name</button>
      </div>

      <div className={SS.data}>
        <article>
          <h3>Post Title</h3>
        </article>
        <article>Data</article>
        <article>Data</article>
        <article>Data</article>
        <article>Data</article>
      </div>
    </div>
  );
}

export default App;
