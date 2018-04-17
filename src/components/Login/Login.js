import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

var apiBaseUrl = "http://localhost:4000/api/";
const style = {
  margin: 15,
};

class Login extends Component {
	constructor(props){
		super(props);
		var localloginComponent = [];
		localloginComponent.push(
			<MuiThemeProvider>
				<div>
					<TextField
						hintText="Enter your Email Address"
						floatingLabelText = "Email Address"
						onChange={(event,newValue) => this.setState({email:newValue})}/>
					<br/>
					<TextField
						type="password"
						hintText="Enter your Password"
						floatingLabelText="Password"
						onChange={(event,newValue) => this.setState({password:newValue})}/>
					<br/>
					<RaisedButton label="Submit"
						primary={true}
						style={style}
						onClick={(event) => this.handleClick(event)}/>
				</div>
			</MuiThemeProvider>
		)
		this.state = {
			email:'',
			password:'',
			loginComponent:localloginComponent,
		}
	}

	componentWillMount(){
		// console.log("willmount prop values",this.props);
		console.log("in componentWillMount");
		var localloginComponent = [];
		localloginComponent.push(
			<MuiThemeProvider>
				<div>
					<TextField
						hintText="Enter your Email Address"
						floatingLabelText="Email Address"
						onChange={(event,newValue) => this.setState({email:newValue})}/>
					<br/>
					<TextField
						type="password"
						hintText="Enter your Password"
						floatingLabelText="Password"
						onChange={(event,newValue) => this.setState({password:newValue})}/>
					<br/>
					<RaisedButton
						label="Submit"
						primary={true}
						style={style}
						onClick={(event) => this.handleClick(event)}/>
				</div>
			</MuiThemeProvider>
		)
		this.setState({loginComponent:localloginComponent})
	}

	handleClick(event){
		var payload = {
			"email":this.state.email,
			"password":this.state.password
		}
		axios.post(apiBaseUrl+'login', payload)
			.then(function (response) {
				console.log(response);
				if (response.data.code === 200) {
					console.log("Login successful");
					alert(response.data.success)
					var loggedIn = [];
					loggedIn.push(
						<MuiThemeProvider>
							Successfully Logged In
						</MuiThemeProvider>
					)
					this.setState({loginComponent:loggedIn})
				} else if (response.data.code === 204) {
					console.log("email password do not match");
					alert(response.data.success)
				} else {
					console.log("email does not exists");
					alert("email does not exist");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<MuiThemeProvider>
					{this.state.loginComponent}
				</MuiThemeProvider>
			</div>
		);
	}
}

export default Login;
