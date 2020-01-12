import React from 'react'
import SS from './subred.module.scss'
import { Match } from '@reach/router';

class Subred extends React.Component {

    constructor() {
        super()

        this.state ={
            newSub:'',
            list:['/webdev', '/web_design', '/programming', '/javascript']
        }

        this.addButton = this.addButton.bind(this);
    }


    addButton() {
        const newSub ={
            id: 1 + Match.random,
            value: this.state.newSub.slice()
        }

        const list = [...this.state.list];

        list.push(newSub);

        this.setState({ list: list, newSub: ""})

    }

    render() {
        return (
            <div className={SS.subName}>
                {this.state.list.map(n => {
                   return <button onClick={(e) => this.props.handleClick(e)} className={n}>{n}</button>
                })}
            {/* <button onClick={(e) => this.props.handleClick(e)} className='/webdev'>/webdev</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/web_design'}>/web_design</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/programming'}>/programming</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/javascript'}>/javascript</button> */}
            <input type="text" placeholder="Add your own" value={this.state.newSub} onChange={e => this.updateV()}></input>
            <button onClick={() => this.addButton()}></button>
          </div>
        )
    }
}

export default Subred;