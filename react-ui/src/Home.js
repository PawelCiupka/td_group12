import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/style.css';
import './components/mail-form';

import photo1 from './images/5.png';
import photo2 from './images/4.png';
import photo3 from './images/6.png';
import MailForm from './components/mail-form';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: 'Barberion'
    };
  }

  render() {
    return (
      <div className="Home">

        <div className="row first"></div>

        <div className="row gameTitle">
          <h1><a href='Gameplay'>{this.state.gameTitle}</a></h1>
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
        
          <div className="see-gameplay">
            <a href="https://youtu.be/w0BdAydfm0I" target="_blank">Obejrzyj Gameplay</a>
          </div>

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={photo1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={photo2} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={photo3} alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>

        <div className="row fourth">

          <div className="col-sm-1"></div>

          <div className="col-sm-10">
          

            <p className="text">
              Masywne siły wrogów. Dlaczego i skąd przybywają? Tego nie wie nikt, a wizje proroków są zamglone. Ktokolwiek inny coś wie..? Przybywają. Królestwo prawie upada. Życie i jego cele nie mają żadnej wartości dla tych istot. Pola gniją. Lasy płoną. Lud cierpi. Dewastacja ma miejsce tu i teraz. Królestwo ma jedynie jedną możliwą opcję: bronić się, bronić i bronić. Jesteś gotów?
            </p>

            <p className="textBreak"></p>

            <p className="text">
              {this.state.gameTitle} to gra w stylu niestandardowego Tower Defence połączonego z elementami gry RPG, która rzuca wyzwanie weteranom tego gatunku. Uważaj, gdyż na swojej drodzę napotkasz całe hordy szkieletów, nieumarłych, bestii i wiele innych kreatur. Rozmieszczaj szybkostrzelnych łuczników! Pokonuj wrogów magicznymi laserami! Rozstaw obszarowe armatki! {this.state.gameTitle} oferuje różnorodność i wyzwania. Przezwyciężaj niestworzone dziwactwa ze strategią i siłą własnych mięśni! Pomóż bezbronnym mieszkańcom i nie pozwól by potwory splądrowały spichlerz.
            </p>

          </div>
          <div className="col-sm-1"></div>

        </div>

        <div className="row download-game">
            <a href="https://drive.google.com/open?id=1p7J3Vv3I6cubvx-oj14GKl-r1YlCb7iQ" target="_blank">Pobierz grę</a>
          </div>

        <div className="row fifth">
          <div className="col-sm-2"></div>

          <div className="col-sm-8">        
        

            <div className="row sectionTitle">
              <h3>Chcesz spróbować swoich sił i zmierzyć się z wrogami Królestwa? Przenieś się do fantastycznego świata {this.state.gameTitle}!</h3>
            </div>

            <p className="text">
              Wypełnij formularz, a my skontaktujemy się z Tobą!
            </p>
            
            <MailForm />

          </div>
          <div className="col-sm-2"></div>

        </div>

        <footer className="row">

          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <p className="footerText">
              Gra została stworzona na zajęciach "Podstawy gier komputerowych" na Politechnice Łódzkiej przez zespół 12.  </p>
            <p className="footerText">
              <strong>Członkowie:</strong>
              <ul>
                <li>Dawid Gierowski</li>
                <li>Marcin Kwapisz</li>
                <li>Mateusz Kubicki</li>
                <li>Bartłomiej Ciesielski</li>
                <li>Paweł Ciupka</li>
                <li>Damian Salata</li>
                <li>Michał Chmielewski</li>
              </ul>
            </p>
            <p className="textBreak"></p>
            <p className="footerText">
              Zapraszamy na naszego GitHuba! :) <br></br>
              <a href="https://github.com/CinU331/TD_Grupa12"><i className="fab fa-github"></i> TD_Grupa12</a>
            </p>
            <p className="loginLink"><Link to="/login">Zaloguj</Link></p>
          </div>
          <div className="col-sm-1"></div>

        </footer>

      </div>
    )
  }
}

export default Home;
