import React from 'react'
import './item.css'
export default class Item extends React.Component {
    
    deletComment=()=>{
        let delete1=this.props.method;
        console.log(delete1)
        let comments=this.props.commentsAll;
        let comment=comments.filter(
            (item)=>{return item.id!==this.props.id})
        console.log(comment)
        delete1(comment) 
    }
    render() {
        return (
            <div className='Item'>
                <p className="userword">{this.props.name}</p>
                <a href="#1" onClick={this.deletComment}>删除</a>
                <p className="words">{this.props.comments}</p>
            </div>
        )
    }
}
