import React from 'react';
import SS from './data.module.scss'
import talking from '../IMG/talking.svg'
import thumbs from '../IMG/thumbs.svg'
import down from '../IMG/down.svg'
class Data extends React.Component {
    

    componentDidMount() {

    }
   

    render() {
        return (
            
       

      <div className={SS.data}>
          {this.props.tops.data.children.map((n, k) => {
             
              return (
                  <article key={k}>
                      <div className={SS.score}><img src={thumbs} alt="Thumbs Up"></img> <p>{n.data.score}</p></div>
                   
                      <div className={SS.test}><img src={talking} alt='comment bubble'></img><p>{n.data.num_comments}</p></div>
                     
                      <h3>{n.data.title}</h3>
                      <div className={SS.text}>{n.data.selftext.substring(0, 200)}</div>

                      <div className={SS.read}>
                          <a href={n.data.permalink}>View</a>
                      </div>
                      </article>
              )
          })}
          
            </div>
      
       
    
        )
    }

}

export default Data