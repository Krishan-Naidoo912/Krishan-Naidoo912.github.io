import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import Rank from './Components/Rank/Rank.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import 'tachyons';

//variable to hold properties of the animated Particles background
const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }  
  }
};

const app = new Clarifai.App(
  {
    apiKey:'8152c775f0214f55a31d6e06a10f1762'
  }
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputImageUrl:'',
      clarifaiImageUrl:'',
      activePage:'signin',
      isUserSignedIn:false,
      boundingBox:{}
    }
  }

  onChangeInputUrl = (event) => {
    this.setState({inputImageUrl:event.target.value})
  }
  

  calculateBox = (response) => {
    const box = response.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(response);
    const imageOnScreen = document.getElementById('image');
    const imageWidth = Number(imageOnScreen.width);
    const imageHeight = Number(imageOnScreen.height);
    return ({
        leftCol: box.left_col * imageWidth,
        topRow: box.top_row *imageHeight,
        rightCol: imageWidth - (box.right_col * imageWidth),
        bottomRow: imageHeight - (box.bottom_row * imageHeight),  
    });
  }

  saveBox = (box) => {
    console.log(box);
    this.setState({boundingBox:box})
  }

  onButtomSubmit = () => {
    this.setState({clarifaiImageUrl:this.state.inputImageUrl});
    console.log(this.state.clarifaiImageUrl)
    app.models.predict(
      //use Clairifai Face detect model
      Clarifai.FACE_DETECT_MODEL,
      //now send the user entered image url that is saved in state 'input' to clarifai API to detect face
      this.state.inputImageUrl)
    .then(response => this.saveBox(this.calculateBox(response)))
    .catch(err => console.log(err))
    }
  

  onPageChange = (activePage) => {
    if (activePage === 'signout') {
      this.setState({isUserSignedIn: false});
    } else if (activePage === 'home') {
      this.setState({isUserSignedIn: true});
    }
    this.setState({activePage: activePage});
  }

 render() {
    return (
      <div className="App"> {/*center align all text*/}
        <Particles className='particles' 
          params={particlesOptions} //get properties from variable above
        />
        <Navigation 
          isUserSignedIn={this.state.isUserSignedIn}
          onPageChange={this.onPageChange}
        />
        {this.state.activePage==='home'
         ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onChangeInputUrl={this.onChangeInputUrl}
                onButtomSubmit={this.onButtomSubmit}
              />
              <FaceRecognition
                clarifaiImageUrl={this.state.clarifaiImageUrl}
                boundingBox={this.state.boundingBox}
              />
           </div>
          : this.state.activePage==='signin'
          ? <SignIn 
              onPageChange={this.onPageChange}
            />
          : <Register 
              onPageChange={this.onPageChange}
            />
        }   
      </div>
   );
  }
}

export default App;