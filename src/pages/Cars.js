import React, { Component } from "react";
import io from "socket.io-client";
import { BlipChat } from "blip-chat-widget";
import api from "../services/api";

import './Cars.css';

require('dotenv').config();

class Cars extends Component {
  state = {
    car: [],
  };

  async componentDidMount() {
    this.registerToSocket();
    this.loadRequest();
  }

  loadRequest = async () => {
    const response = await api.get('cars');

    this.setState({ car: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    const { state } = this;

    socket.on('car', newCar => {
      this.setState({ car: [newCar, ...this.state.car]});
    })

    socket.on('delete', deletedPostID => {
      this.setState({
        car: state.car.filter(post => post._id !== deletedPostID),
      });
    });
  }

  render(){
    return (
      <section id="car-list">
        { this.state.car.map(post => (
          <article key={post._id}>

          <img src={`http://localhost:3333/files/${post.image}`} alt=''/>
          
          <header>
            <div className="car-model">
              <span className='model'>{post.brand} {post.model}</span>
              <span className='version'>{post.version}</span>
            </div>
          </header>

          <footer>
            <div className="car-info">
              <label>Loja: <span className='dealership'>{post.dealership}</span></label>
              <label>Combustível: <span className='fuel'>{post.fuel}</span></label>
              <label>Ano: <span className='year'>{post.year}</span></label>
              <label>KM: <span className='km'>{post.km}</span></label>
              <br></br>
              <br></br>
              <span className='value'>Preço: R$ {post.value}</span>
            </div>
          </footer>
        </article>
        )) }

        <script src="https://unpkg.com/blip-chat-widget@1.5.*" type="text/javascript"></script>
        <script>
          (function () {
            window.onload = function () {
              localStorage.removeItem('blipSdkUAccount'); 
              new BlipChat()
                .withAppKey('Y2FyYWR2aXNvcjo0NzBjNmEyNi04YWRhLTQ5N2QtODE2NS1iYjgxMDgyMTM3NDg=')
                .withButton({"color":"#424a60","icon":""})
              .build();
            }
          })();
        </script>
        </section> 
    );
  }
}

export default Cars;


