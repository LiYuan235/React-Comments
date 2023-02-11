/*
 * @Descripption: 
 * @version: 
 * @Author: LiYuan
 * @Date: 2023-02-11 14:38:49
 * @LastEditors: LiYuan
 * @LastEditTime: 2023-02-11 20:46:00
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import Add from './components/Add/Add';

class App extends React.Component {
  state = {
    comments: [{
      id: '12344',
      name: 'xxx',
      content: '挺好的'
    }, {
      id: '12222',
      name: 'yyyy',
      content: '不错'
    }]
  }
  delete=(items)=>{
    this.setState({comments:items})
  }
  add=(item)=>{
    let addcomment=[...this.state.comments]
    addcomment.unshift(item)
    this.setState({comments:addcomment})
  }
  render() {
    return (
      <div>
        <header>
          <div className='header1'>
            <h1>请发表对React的评论</h1>
          </div>
        </header>
        <main>
          <Add method={this.add}/>
          <List comments={this.state.comments} method={this.delete}/>
        </main>
      </div>
    );

  }
}

export default App;
