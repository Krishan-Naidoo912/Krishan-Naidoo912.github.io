//Javascript component that receives no properties from App.js.
//Returns SignIn form.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';
import Logo from '../../components/Logo/Logo.js';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail:'',
			signInPassword:''
		}
	}

	//save user email to push to express server
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	//save user password to push to express server
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	//use the state to fetch username and password and send to express server
	onSubmitSignIn = () => {
		//use the below only when you are not linking to heroku hosted server
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		//if user enter wrong user name and password
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					this.props.loadUser(data)		
					this.props.onPageChange('home');
					alert(`Success, Welcome! ${data.name}`);
				} else if (data === 'Error Logging in') {
					alert('Wrong Password');
				}
			})
	}

	render() {
		//Return signIn form used from https://tachyons.io/components/forms/sign-in/index.html/
		return (
			<div>
				<div className="pageHeading center w-50-m w-60-l shadow-5">
					<div className="pageHeading">
						<Logo />
					</div>
					<div className ="left w-35-m w-70-l">
						<div className="pageHeading1">
							<p className="f4 fw6 ph0 mh0">Welcome to Krishans Face Recognition web application</p>
						</div>
						<div className="pageHeading2">
							<p className="f4 fw5 ph0 mh0">Register as a user to enjoy detecting faces on images</p>
						</div>
					</div>
				</div>
				<div>
					<article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">{/*Border around signIn Card (https://tachyons.io/components/cards/product-card/index.html)*/}
						<main className="pa1 black-80">
							<div className="measure">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						    	<legend className="f1 fw6 ph0 mh0">Sign In</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						        <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
						        onChange={this.onEmailChange}/>
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
						        onChange = {this.onPasswordChange} />
						      </div>
						    </fieldset>
						    <div className="">
						      <input
						       	 //onClick Event handler to change page from SignIn card to home page. you need to use arrow function so that onRouteChange only runs when onClick happens, instead of when the component is rendered
						       	onClick={this.onSubmitSignIn} //arrow function to pass 'home' into route state when click is triggered. without arrow function, this will run when the app is rendered
						       	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
						        type="submit"
						        value="Sign in"
						      />
						    </div>
						    <div className="lh-copy mt3">
						      <p className="f6 link dim black db pointer"
						      	onClick={() => this.props.onPageChange('register')}>Register</p>
						    </div>
						  </div>
						</main>
					</article>
				</div>
			</div>
		);
	}
}

export default SignIn;