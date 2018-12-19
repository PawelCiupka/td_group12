import React, { Component } from 'react';
import './styles/App.css';

import photo1 from './images/5.png';
import photo2 from './images/4.png';
import photo3 from './images/6.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: 'TD_GROUP12'
    };
  }


  render() {
    return (
      <div className="App">

        <div className="row first"></div>

        <div className="row gameTitle">
          <h1>{this.state.gameTitle}</h1>
        </div>

        <div className="row second">          
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-8">

              <p className="text">
                Oto magiczny świat, w którym wspaniali bohaterowie biorą udział w wojnie, aby ocalić królestwo wraz z najwyższej jakości strategią. Walcz sam na sam pośród bezkresu przygody z bestiami chcącymi zniszczyć Królestwo.
              </p>
              
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>


        <div className="row third">
        
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={photo1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={photo2} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={photo3} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>

        <div className="row fourth">        
          
        </div>

      </div>
  
      
    )}
}

export default App;
