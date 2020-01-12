import React from 'react';
import logo from './logo.svg';
import './App.css';
import SS from './main.module.scss'
import Data from './components/data'
import Selection from './selection'
import Subred from './components/subred'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      tops: false,
      selection: 'top',
      subName: '/webdev',
      newSub:'',
      list:['/webdev', '/web_design', '/programming', '/javascript']
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.addButton = this.addButton.bind(this);
  }

  updateV(e) {
    console.log(e.target.value)
    const rr = e.target.value
    this.setState({newSub: rr})
}


addButton() {
    const newSub = this.state.newSub.slice()
    

    const list = [...this.state.list];

    list.push(newSub);

    this.setState({ list: list, newSub: ""})

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
    console.log(e.target.className)
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
      <div className={SS.pick}>
      <h3>Pick a SubReddit or add your own:</h3>
      <div className={SS.addyourown}>
      <input type="text" placeholder="Add your own" value={this.state.newSub} onChange={e => this.updateV(e)}></input>
            <button className={SS.addbutton} onClick={() => this.addButton()}>Add</button>
            </div>
      </div>
      

      < Subred handleClick={this.handleClick} list={this.state.list}/>
      <h3>Sort By:</h3>
     < Selection changeSelect={this.changeSelect}/>

     {this.state.loading ? <div className={SS.load}><img src={logo} alt="loading"></img></div> : < Data tops={this.state.tops} sort={this.state.selection} /> }
    </div>


  );
}
}

export default App;
