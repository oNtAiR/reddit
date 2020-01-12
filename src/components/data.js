import React from 'react';
import SS from './data.module.scss'

class Data extends React.Component {
    

    componentDidMount() {

    }
   

    render() {
        return (
            
       

      <div className={SS.data}>
          {this.props.tops.data.children.map((n, k) => {
             
              return (
                  <article key={k}>
                      <div className={SS.score}>{n.data.score}</div>
                      <div className={SS.score}>{n.data.num_comments}</div>
                      <h3>{n.data.title}</h3>
                      <div className={SS.text}>{n.data.selftext.substring(0, 200)}</div>

                      <div className={SS.read}>
                          <a href={n.data.permalink}>{this.props.sort}</a>
                      </div>
                      </article>
              )
          })}
          
            </div>
      
       
    
        )
    }

}

export default Data