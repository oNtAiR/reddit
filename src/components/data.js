import React from 'react';
import SS from './data.module.scss'

class Data extends React.Component {
    

    componentDidMount() {

    }
   

    render() {
        return (
            
       

      <div className={SS.data}>
          {console.log(this.props.tops.data.children)}
        <article>
          <h3>{this.props.tops.data ? this.props.tops.data.children[0].data.title : 'no'}</h3>
        </article>

        <article>
          <h3>Post Title</h3>
        </article>

        <article>
          <h3>Post Title</h3>
        </article>

        <article>
          <h3>Post Title</h3>
        </article>

        <article>
          <h3>Post Title</h3>
        </article>
            </div>
      
       
    
        )
    }

}

export default Data