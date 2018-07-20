import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom'
export class Section extends Component {
	constructor(props){
		super(props)
		this.state={
			page:1,
			list:[]
		}
	}
	render(){
		return (
			<div>
				<em className='iconfont icon-fanhuidingbu se' onClick={()=>{this.top()}}></em>
			{
        		this.state.list.map((item,index)=>{
        			return <div key={index}  className='odiv'>
        						<Link to={`/review/${item.id}`}>{item.content}</Link>
        						<br/>
        						<span onClick={()=>{
        							this.hart(index)
        							
        						}}  className={item.typeid==0?'qu iconfont icon-aixin':'iconfont icon-aixin'} ></span>
        					</div>
        		})
        	}
			</div>)
	}
	_getData(e){
  		axios.get(`http://guoxiao158.top/joke/getjoke.php?page=${e}`).then((res)=>{
  		this.setState({
  			list:res.data.dataList
  		})
  		console.log(this.state.list)
  	})
 }
	top(){
		document.documentElement.scrollTop=0
	}
	hart(id){
		if(this.state.list[id].typeid==0){
			var list=this.state.list
			list[id].typeid++
			this.setState({
			list:list
			})
		}else{
			var lists=this.state.list
			lists[id].typeid--
			this.setState({
			list:lists
			})
		}
		
		
	}
  componentDidMount(){
  	this._getData(this.state.page)
  }
  componentWillMount() {
	  window.addEventListener('scroll', () =>{
		  	if(document.documentElement.scrollTop+document.documentElement.clientHeight+100>document.body.scrollHeight){
		  		var num=this.state.page
				 num++;
		  		var pas=this.state.list;
		  		axios.get(`http://guoxiao158.top/joke/getjoke.php?page=${num}`).then((res)=>{
		  			pas.push(res.data.dataList[0])
			  		this.setState({
			  			list:pas,
			  			page:num
			  		})
	 	 })
	}
	 })}
}