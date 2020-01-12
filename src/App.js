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
      tops: false,
      selection: 'top'
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }


  handleSelect(e) {
    const name = e.target.name;
    console.log(name)
  }

   handleClick(e) {
     this.setState({loading: true})
    
    const url = (`https://www.reddit.com/r${e.target.className}/${this.state.selection}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false})
    })
    
    
    
    //console.log(this.state.tops.data.children[0].data)
    console.log(this.state.loading)
  }

  componentDidMount() {
    const url = (`https://www.reddit.com/r/webdev/top/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false})
    })
  }


  render() {

  
  return (
    <div className={SS.main}>
      <h1>Top Posts From Reddit Development SubReddis</h1>

      <div className={SS.subName}>
        <button onClick={this.handleClick} className='/webdev'>/webdev</button>
        <button onClick={this.handleClick} className={'/web_design'}>/web_design</button>
        <button onClick={this.handleClick} className={'/programming'}>/programming</button>
        <button onClick={this.handleClick} className={'/javascript'}>/javascript</button>
        <button>Name</button>
      </div>
      <div className={SS.select}>
        <button onClick={this.changeSelect}>Top</button>
        <button>Top</button>
        <button>Top</button>
        <button>Top</button>
      </div>

     {this.state.loading ? <div className={SS.load}><img src={logo} alt="loading"></img></div> : < Data tops={this.state.tops} /> }
    </div>


  );
}
}

export default App;
