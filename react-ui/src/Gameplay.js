import React, { Component } from 'react';
import './styles/style.css';

class Gameplay extends Component {
    render() {
        return (
            <section className="gameplay-section">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w0BdAydfm0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        )
    }
}

export default Gameplay;