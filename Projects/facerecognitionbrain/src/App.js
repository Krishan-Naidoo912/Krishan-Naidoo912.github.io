//React App to detect faces on an image a user supplies via an url.
//by Krishan Naidoo.
//App.js imports components from javascript files.

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';

//variable to hold properties of the Particles animated background
const particlesOptions = {
  particles: {
    number: {
      value:120,
      density: {
        enable: true,
        value_area: 800
      }
    }  
  }
};

//To use Face Recognition API,
//Save Clarifai API Key for Krishan.Naidoo912 to const app
const app = new Clarifai.App(
  {
    apiKey:'8152c775f0214f55a31d6e06a10f1762'
  }
);

class App extends Component {
  /*Create Listener to read picture url the user paste*/
  constructor() {
    super();
    this.state = {
      //URL entered by user in text box
      userInputImage:'',
      ////Retrieve URL entered by user when Detect button is clicked
      imageUrlToClarifai:'',
      //location of face on image (use funtion calculateFaceLocation)  
      //create box variable to contain value of box for face (topRow + BottomRow + leftCol + rightCol.
      //once boundingBox state has been updated by calculateFaceLocaion, pass to FaceRegcognition.js as prop
      imageBoundingBoxFromClarifai:{},
      //State to keep track of where user is on page. Start at SignIn Card.
      activePage:'signIn',
      isSignedIn: false,
      //user details when registering
      user: {
          id:'',
          name:'',
          email:'',
          entries: 0,
          joined: new Date(),
        }
      }
    }

  //now link the App.js (running on port 3000) to the Express Server.js (running on port 3001)
  //install npm package cors to tell google chrome to trust the express server you creating
  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(console.log);
  }

  /*Pass this function as a prop to the ImageLinkForm Component*/
  /*save user url image to class state 'input'*/
  onInputChange = (event) => {
    this.setState({userInputImage:event.target.value})
  }

  /*Now set the detect button to read the url value from onInputChange*/
  /*then call the clarifai api and pass Krishan Naidoo key and url image to the clarifai api service*/
  /*then pass this url to FaceRecognitaion.js*/
  /*clarifai api will validate key and respond with location of face on image in % numbers and not actuals*/
  /*pass % numbers to calculateFaceLocation*/
  onButtonSubmit = () => {
    this.setState({imageUrlToClarifai:this.state.userInputImage});
    //pass Krishan Naidoo clarifai key
    app.models.predict(
      //use Clairifai Face detect model
      Clarifai.FACE_DETECT_MODEL,
      //now send the user entered image url that is saved in state 'input' to clarifai API to detect face
      this.state.userInputImage)
      .then(response => {
        //you'll receive a response of face location in % on the image
        //https://filmfare.wwmindia.com/content/2020/feb/priyanka-chopra-thumb-600-x-4501582292965.jpg
        //use response from clarifai and call funtion to calculate face location
        //then return this calculateFaceLocation value to the this.bounding box object
        //by calling the function updateBoundingBoxAndDisplayFace
        this.updateBoundingBoxToHighlightFace(this.calculateFaceLocation(response))
      //log error if something fails
      .catch(err => console.log('There is an error ', err))
      }
    );
  }

  //Call and Calculate Face location based on response from Clarifai API for face bounding Boxes
  calculateFaceLocation = (clarifaiResponse) => {
    //https://filmfare.wwmindia.com/content/2020/feb/priyanka-chopra-thumb-600-x-4501582292965.jpg
    //1st save the clarifaiResponse to a variable in terms of the face bounding box in the image
    const clarifaiFace = clarifaiResponse.outputs[0].data.regions[0].region_info.bounding_box;
    //2nd Get the image that is displayed in the web page from FaceRecongnition.js
    const imageOnScreen = document.getElementById('displayedImage');
    //3rd Work out the face bounding box in the Image
    const imageWidth = Number(imageOnScreen.width);
    const imageHeight = Number(imageOnScreen.height);
    console.log(imageWidth,imageHeight);
    //Return object that fills the this.boundingBox state
    return {
      //To get left column and top row, get response position from clarifaiFace which is a percentage
      //of the image. then muliply received value by width\heigth to get actual width\height of the
      //displayed image as well as were the left and top should be.*/}
      leftCol: clarifaiFace.left_col * imageWidth,//lefCol=percentageOfWidth * actual width
      topRow: clarifaiFace.top_row * imageHeight, //topRow=percentageOfHeight * actual height
      //to get the righ column and bottom row, get response position from clarifaiFace which is a
      //percentage of the image. then subtract the image width from the received clarifaiFace reponse, then
      //multiply by width\height*/}
      rightCol: imageWidth - (clarifaiFace.right_col * imageWidth), //minus clarifaiWidth from actual width
      bottomRow: imageHeight - (clarifaiFace.bottom_row * imageHeight) //minus clarifaiHeigh from acutal height
    }
  }

  //function to update this.boundingBox and display box around a face in the clarifai image using location from calculateFaceLocation function.
  updateBoundingBoxToHighlightFace = (boundingBoxLocation) => {
    console.log('location:',boundingBoxLocation);
    this.setState({imageBoundingBoxFromClarifai: boundingBoxLocation});
  }

  //when called from SignInCard, change signIn page to home page, When called by SignOut button on home page, change to signIn Card.
  onPageChange = (activePage) => {
    if (activePage === 'signOut') {
      this.setState({isSignedIn: false});
    } else if (activePage === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({activePage: activePage});
  }

  //update user state from info received in the Register.js component
  loadUser = (data) => {
    this.setState({user:{
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    }
    );
  }

  render() {
    return (
      <div className="App"> {/*center align all text*/}
        <Particles className='particles' 
          params={particlesOptions} //get properties from variable above
        />
        {/*Create if then else statement to determine if the SignCard must show, or the face recognition page.
        Wrap statement in {} as it is jsx requirement for javascript code.*/}
        <Navigation 
            onPageChange={this.onPageChange}
            isSignedIn={this.state.isSignedIn}
        /> 
        {this.state.activePage === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition
                imageUrlToClarifai={this.state.imageUrlToClarifai}
                imageBoundingBoxFromClarifai={this.state.imageBoundingBoxFromClarifai}
              />
            </div>
          : (
            this.state.activePage === 'signIn'
              //call function to change page from SignIn form to Home Page when user signs in
              ? <SignIn onPageChange={this.onPageChange}/> 
              : <Register onPageChange={this.onPageChange} loadUser={this.loadUser}/>
            )
        }
      </div>
    );
  }
}

export default App;
