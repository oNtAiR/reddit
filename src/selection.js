import React from 'react'
import SS from './selection.module.scss'



class Selection extends React.Component {




render(props) {
    return (
        <div className={SS.select}>
        
        <button onClick={(e) => this.props.changeSelect(e)} className='top'>Top</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='new'>New</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='hot'>Hot</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='controversial'>Controversial</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='rising'>Rising</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='best'>Best</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='comments'>Comments</button>
        
      </div>
    )
    
}
   
}

export default Selection