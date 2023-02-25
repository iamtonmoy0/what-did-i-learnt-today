import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Clock extends Component {
	state = { date: new Date() } 
	componentDidMount(){
		this.clockTimer = setInterval(()=> this.tick(),1000);
	}
	componentWillUnmount(){
		clearInterval(this.clockTimer);
	}
	tick(){
		this.setState({
			date:new Date(),
		})
	}
	render() { 
		const {date}= this.state;
		const {locale}= this.props
		return (

			<h1 className='heading'>
				<span className='text '> {date.toLocaleTimeString(locale)} </span>

			</h1>
		);
	}
}
 
export default Clock;