//SignIn

import React, {Component} from 'react';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signinEmail:'',
			signinPassword:''
		}
	}

	onEmailChange = (event) => {
		this.setState({signinEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signinPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: {'Content-Type':'application/JSON'},
			body: JSON.stringify(
			{
				email :this.state.signinEmail,
				password :this.state.signinPassword
			})
		})
			.then(response => response.json())
			.then(data => {
				if(data.id) {
					this.props.onPageChange('home');
					this.props.loadUser(data);
					alert(`Success, Welcome! ${data.name}`)
				}
				else {
					alert('Try again');
				}}
	)}


	render() {
		//Return signIn form used from https://tachyons.io/components/forms/sign-in/index.html/
		return (
			<article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">{/*Border around signIn Card (https://tachyons.io/components/cards/product-card/index.html)*/}
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
				        onChange={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
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
		);
	} 
}

export default SignIn;