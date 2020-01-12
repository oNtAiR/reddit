import React from 'react'
import SS from './subred.module.scss'
import close from '../IMG/close.svg'

class Subred extends React.Component {

    constructor() {
        super()

        // this.state ={
        //     newSub:'',
        //     list:['/webdev', '/web_design', '/programming', '/javascript']
        // }

        // this.addButton = this.addButton.bind(this);
    }

    // updateV(e) {
    //     console.log(e.target.value)
    //     const rr = e.target.value
    //     this.setState({newSub: rr})
    // }


    // addButton() {
    //     const newSub = this.state.newSub.slice()
        

    //     const list = [...this.state.list];

    //     list.push(newSub);

    //     this.setState({ list: list, newSub: ""})

    // }

    render(props) {
        return (
            <div className={SS.subName}>
                {this.props.list.map((n, k) => {
                   return <div className={SS.list} key={k} id={n} >
                       <button onClick={(e) => this.props.handleClick(e)}  >{n}</button>
                       <img src={close} alt='Remove Item' onClick={(e) => this.props.removeSub(e)}></img>
                       </div>
                })}
            {/* <button onClick={(e) => this.props.handleClick(e)} className='/webdev'>/webdev</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/web_design'}>/web_design</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/programming'}>/programming</button>
            <button onClick={(e) => this.props.handleClick(e)} className={'/javascript'}>/javascript</button> */}
            
          </div>
        )
    }
}

export default Subred;