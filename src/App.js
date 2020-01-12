import React from 'react';
import logo from './logo.svg';
import './App.css';
import SS from './main.module.scss'
import Data from './components/data'
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      tops: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(e) {
    console.log(e.target.className)
    const url = (`https://www.reddit.com/r${e.target.className}/top/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data})
    })
    
    
    
    //console.log(this.state.tops.data.children[0].data)
    console.log(this.state.loading)
  }

  componentDidMount() {
    const url = (`https://www.reddit.com/r/webdev/top/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data})
    })
  }


  render() {

  
  return (
    <div className={SS.main}>
      <h1>Top Posts From Reddit Development SubReddis</h1>

      <div className={SS.subName}>
        <button onClick={this.handleClick} className='/webdev'>/webdev</button>
        <button onClick={this.handleClick} className={'/web_design'}>/web_design</button>
        <button>Name</button>
        <button>Name</button>
        <button>Name</button>
      </div>

     {this.state.tops.data ? < Data tops={this.state.tops} /> : <div className={SS.load}><img src={logo} alt="loading"></img></div>}
    </div>

    
  );
}
}

export default App;
