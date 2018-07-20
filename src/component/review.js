import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs'
export class Review extends Component {
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
  render() {
    return (
      <div className="App">
       	<input type='text' ref='ipu'/><button onClick={()=>{this.btn()}}>发送</button>
       	<ul>
       		{
       			this.state.list.map((item,index)=>{
       				return <li key={index}>{item.content}</li>
       			})
       		}
       	</ul>
      </div>
    );
  }
  me(){
  	var id=this.props.match.params.id
  	axios.get(`http://guoxiao158.top/joke/getpl.php?id=${id}`).then((res)=>{
  		this.setState({
  			list:res.data.dataList
  		})
  		console.log(res)
  	})
  }
  componentDidMount(){
  	this.me()
  }
  btn(){
  	var va=this.refs.ipu.value
  	var id=this.props.match.params.id
	axios.post('http://guoxiao158.top/joke/addpl.php',qs.stringify({
		uid:id ,
		pinglun:va
	})).then((res)=>{
		console.log(res)
		axios.get(`http://guoxiao158.top/joke/getpl.php?id=${id}`).then((res)=>{
  		this.setState({
  			list:res.data.dataList
  		})
  		console.log(res)
  	})
	})
	this.refs.ipu.value=''
  	alert('请求成功')
  
  }
  
}
