/*
 * @Descripption: 
 * @version: 
 * @Author: LiYuan
 * @Date: 2023-02-11 15:58:14
 * @LastEditors: LiYuan
 * @LastEditTime: 2023-02-11 20:07:12
 */
import React from 'react'
import './list.css'
import Item from '../Item/Item.jsx'
export default class List extends React.Component {
    render() {
        return (
            <div className='List-big'>
                <span>评论回复</span>
                <ul className='list'>
                    {this.props.comments.map((item,index)=>{
                        return <Item key={item.id} name={item.name} comments={item.content} id={item.id} method={this.props.method} commentsAll={this.props.comments}></Item>
                    })}
                    <h2 style={{display:this.props.comments.length==0?'block':'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                </ul>
            </div>
        )
    }
}
