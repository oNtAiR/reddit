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
      subName: 'webdev',
      newSub:'',
      list:[],
      isactive: '',
      realSub: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.addButton = this.addButton.bind(this);
    this.removeSub = this.removeSub.bind(this);
    this.updateV = this.updateV.bind(this);
  }

  

  updateV(e) {
   
    const rr = e.target.value
    this.setState({newSub: rr})
}

 removeSub(e) {
  const newName = e.target.parentNode.id;
  
 
 
  // const newItem = [...myItem];
  // console.log(newItem)
   this.setState(prev => ({
     list: prev.list.filter(item => item !== newName)
   }))
   
 }

 componentDidUpdate() {
  const whatt = JSON.stringify(this.state.list)
   console.log(whatt)
   const currentSub = JSON.stringify(this.state.isactive)
   localStorage.setItem('list', whatt);
   localStorage.setItem( 'currentSub', currentSub);

 }

 addButton() {

    fetch(`https://www.reddit.com/r/${this.state.newSub}/top/.json?count=20`)
    .then((response) => {
      if(response.ok) {
        return response.json()
        .then(data => {
          const newSub = this.state.newSub.slice()
          const list = [...this.state.list];
          list.push(newSub);
          this.setState({ list: list, newSub: ""})
          const  vv  = list;
          const mm = JSON.stringify(vv)
          localStorage.setItem('list', mm)
          
        })
      } else {
        throw new Error('fuckkkk');
        
      }
      
    })
      .catch(error => {
        this.setState({ realSub: true})
        setTimeout(() => {
          this.setState({ realSub: false, newSub:''})

        }, 4000);
        

      })
  }




  changeSelect(e) {
    const name = e.target.className;
    this.setState({ selection: name})
    
    this.setState({loading: true})

    const url = (`https://www.reddit.com/r/${this.state.subName}/${name}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false, selection: name})
    })
   
  }

   handleClick(e) {
     this.setState({loading: true})
    const subName = e.target.parentNode.id
    
    
    const url = (`https://www.reddit.com/r/${subName}/${this.state.selection}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false, subName: subName, isactive: subName })
    })

  
   
   
    
  }

  componentDidMount() {
    const defaultList = ['webdev', 'web_design', 'programming', 'javascript'];
    let vv = JSON.parse(localStorage.getItem('list'));
    console.log(vv.length)
    let activeOr = JSON.parse(localStorage.getItem('currentSub'));
    if(this.state.tops === false) {
      const url = (`https://www.reddit.com/r/${activeOr}/${this.state.selection}/.json?count=20`);
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({tops: data, loading: false, list: vv.length === 0 ? defaultList : vv, isactive: activeOr})
    })
    }
  }


  render() {
    
    
  return (
    <div className={SS.main}>
      <h1>React Reddit Reader</h1>
      <div className={SS.pick}>
      <h3>Pick a SubReddit or add your own:</h3>
      <div className={SS.addyourown}>
      <input type="text" placeholder="Add your own" value={this.state.newSub} onChange={e => this.updateV(e)}></input>
            <button className={SS.addbutton} onClick={() => this.addButton()}>Add</button>
            </div>
      </div>
      <div className={SS.error}>
        {this.state.realSub ? <p className={SS.grow}>"{this.state.newSub}" does not exit</p> : <p></p>}
      </div>
      

      < Subred handleClick={this.handleClick} list={this.state.list} isactive={this.state.isactive} removeSub={this.removeSub} active={this.state.isactive}/>
      <h3>Sort By:</h3>
     < Selection changeSelect={this.changeSelect}/>

     {this.state.loading ? <div className={SS.load}><img src={logo} alt="loading"></img></div> : < Data tops={this.state.tops} sort={this.state.selection} /> }
    </div>


  );
}
}

export default App;
