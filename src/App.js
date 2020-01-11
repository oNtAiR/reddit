import React from 'react';
import logo from './logo.svg';
import './App.css';
import SS from './main.module.scss'
import Data from './components/data'
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      loading: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(e) {
    console.log(e.target.className)
    const url = (`https://www.reddit.com/r${e.target.className}/top/.json?count=20`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  }

  componentDidMount() {
      
  }


  render() {

  
  return (
    <div className={SS.main}>
      <h1>Top Posts From Reddit Development SubReddis</h1>

      <div className={SS.subName}>
        <button onClick={this.handleClick} className='/webdev'>/webdev</button>
        <button>/web_design</button>
        <button>Name</button>
        <button>Name</button>
        <button>Name</button>
      </div>

     {this.state.loading ? <div>loading</div> : < Data/>}
    </div>

    
  );
}
}

export default App;
