import React from 'react';
import logo from './logo.svg';
import './App.css';
import SS from './main.module.scss'
import Data from './components/data'
import Selection from './selection'
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      tops: false,
      selection: 'top',
      subName: '/webdev'
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }


  changeSelect(e) {
    const name = e.target.className;
    this.setState({ selection: name})
    
    this.setState({loading: true})
    console.log(this.state.tops.data)
    const url = (`https://www.reddit.com/r${this.state.subName}/${name}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false, selection: name})
    })
   
  }

   handleClick(e) {
     this.setState({loading: true})
    const subName = e.target.className
    const url = (`https://www.reddit.com/r${e.target.className}/${this.state.selection}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false, subName: subName})
    })
    
    
    
  }

  componentDidMount() {
    const url = (`https://www.reddit.com/r/webdev/${this.state.selection}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false})
    })
  }


  render() {

  
  return (
    <div className={SS.main}>
      <h1>Reddit Reader</h1>
      <h3>Pick Your /subreddit:</h3>

      <div className={SS.subName}>
        <button onClick={this.handleClick} className='/webdev'>/webdev</button>
        <button onClick={this.handleClick} className={'/web_design'}>/web_design</button>
        <button onClick={this.handleClick} className={'/programming'}>/programming</button>
        <button onClick={this.handleClick} className={'/javascript'}>/javascript</button>
        <button>Name</button>
      </div>
      <h3>Sort By:</h3>
     < Selection changeSelect={this.changeSelect}/>

     {this.state.loading ? <div className={SS.load}><img src={logo} alt="loading"></img></div> : < Data tops={this.state.tops} sort={this.state.selection} /> }
    </div>


  );
}
}

export default App;
