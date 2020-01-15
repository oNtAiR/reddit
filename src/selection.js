import React from 'react'
import SS from './selection.module.scss'



class Selection extends React.Component {




render() {
  const butons = ['top']
    return (
        <div className={SS.select}>
        
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'top' ? SS.active : 'false'}`} id='top'>Topsss</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'new' ? SS.active : 'false'}`} id='new'>new</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'hot' ? SS.active : 'false'}`} id='hot'>Hot</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'controversial' ? SS.active : 'false'}`} id='controversial'>Controversial</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'rising' ? SS.active : 'false'}`} id='rising'>Rising</button>
        <button onClick={(e) => this.props.changeSelect(e)} className={`${this.props.selection == 'best' ? SS.active : 'false'}`} id='best'>Best</button>
      
        
        
      </div>
    )
    
}
   
}

export default Selection