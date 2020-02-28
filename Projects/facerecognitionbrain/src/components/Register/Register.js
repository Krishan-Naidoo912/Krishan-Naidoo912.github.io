//Javascript component that receives no properties from App.js.
//Returns Register form.
//Component with no state, so pure function is used instead of a class.
//tachyons css styles used.

import React from 'react';

const Register = ({onPageChange}) => {
	//Return signIn form used from https://tachyons.io/components/forms/sign-in/index.html/
	return (
		<article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">{/*Border around signIn Card (https://tachyons.io/components/cards/product-card/index.html)*/}
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
			      </div>
			      <div class="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			       	 //onClick Event handler to change page from SignIn card to home page. you need to use arrow function so that onRouteChange only runs when onClick happens, instead of when the component is rendered
			       	onClick={() => onPageChange('home')} //arrow function to pass 'home' into route state when click is triggered. without arrow function, this will run when the app is rendered
			       	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
			        type="submit"
			        value="Register"
			      />
			    </div>
			   </div>
			</main>
		</article>
	);
}

export default Register;