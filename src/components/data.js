import React from 'react';
import SS from './data.module.scss'

class Data extends React.Component {
    

    componentDidMount() {

    }
   

    render() {
        return (
            
       

      <div className={SS.data}>
          {this.props.tops.data.children.map((n, k) => {
              console.log(n.data.title)
              return (
                  <article key={k}>
                      <h3>{n.data.title}</h3>
                      </article>
              )
          })}
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