import React from 'react'
import { Link } from 'react-router-dom'
const Detailview = (props) => {
    const renderTopic = ({detail})=> {
        if(detail){
            // console.log(detail)
            return detail.map((e)=> {
                
                 return(
                    <div key={e.id}>
                        <h2>{e.name}</h2>
                        <Link className="btn btn-primary" to={`/posts/${e.id}`} >Details</Link>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            {renderTopic(props)}
        </div>
    )
}
 export default Detailview
