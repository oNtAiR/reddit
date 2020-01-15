import React from 'react'
import SS from './selection.module.scss'



class Selection extends React.Component {




render() {
  const buttons = ['top', 'new', 'hot', 'controversial', 'rising', 'best']


    return (
        <div className={SS.select}>

        {buttons.map(item => {
          return (
            <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection === item ? SS.active : 'false'}`} id={item}>{item}</button>
          )
        })}
        
        {/* <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'top' ? SS.active : 'false'}`} id='top'>Topsss</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'new' ? SS.active : 'false'}`} id='new'>new</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'hot' ? SS.active : 'false'}`} id='hot'>Hot</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'controversial' ? SS.active : 'false'}`} id='controversial'>Controversial</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'rising' ? SS.active : 'false'}`} id='rising'>Rising</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'best' ? SS.active : 'false'}`} id='best'>Best</button> */}
      
        
        
      </div>
    )
    
}
   
}

export default Selection