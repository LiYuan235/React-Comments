/*
 * @Descripption: 
 * @version: 
 * @Author: LiYuan
 * @Date: 2023-02-11 16:02:43
 * @LastEditors: LiYuan
 * @LastEditTime: 2023-02-11 20:53:49
 */
import {nanoid} from 'nanoid';
import React from 'react'
import ReactDOM from 'react-dom/client';
import './add.css'
export default class Add extends React.Component {
    constructor(i){
        super(i);
        this.Name=(item)=>{
            this.Name=item
        }
        this.Words=(item)=>{
            this.Words=item
        }
    }
    Submit=()=>{
        if(this.Name.value==0||this.Words.value==0){
            alert('输入要完整哈~')
        }      
        let  idA = nanoid() //=> "V1SyGzR8_Z5jdHd8B-myT"
        // 也可以指定生成字符串的长度
        let  idB = nanoid(10)
        let userComment={
            id:idB,
            name:this.Name.value,
            content:this.Words.value
        }
        this.Name.value=''
        this.Words.value=''
        this.props.method(userComment)

    }
    render() {
        return (<div>
            <section className="left">
                <span>用户名</span>
                <input type="text" placeholder="用户名" className="username" ref={this.Name}/>
                <span>评论内容</span>
                <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.Words}></textarea>
                <button onClick={this.Submit}>提交</button>
            </section>
        </div>
            
        )
    }
}
