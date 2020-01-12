import React from 'react'
import SS from './selection.module.scss'



class Selection extends React.Component {




render(props) {
    return (
        <div className={SS.select}>
        <button onClick={this.changeSelect} className='top'>Top</button>
        <button onClick={(e) => this.props.changeSelect(e)} className='new'>Top</button>
        <button>Top</button>
        <button>Top</button>
        <button>Top</button>
      </div>
    )
    
}
   
}

export default Selection