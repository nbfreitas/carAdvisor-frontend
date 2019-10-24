import React, { Component } from 'react';
import api from '../../services/api';

import '../New.css';

class New extends Component {
  state = {
    image: null,
    brand: '',
    model: '',
    version: '',
    dealership: '',
    year: '',
    km: '',
    fuel: '',
    value: '',
  }

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('brand', this.state.brand);
    data.append('model', this.state.model);
    data.append('version', this.state.version);
    data.append('dealership', this.state.dealership);
    data.append('year', this.state.year);
    data.append('km', this.state.km);
    data.append('fuel', this.state.fuel);
    data.append('value', this.state.value);

    await api.post('cars', data)

    this.props.history.push('/');
  }

  handleImage = e => {
    this.setState({ image: e.target.files[0] });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render(){
    return (
      <form id="new-car" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImage}/>

        <br></br><br></br>

        <input 
          type="text" 
          name='brand' 
          placeholder='Marca'
          onChange={this.handleChange}
          value={this.state.brand}/>

        <input 
          type="text" 
          name='model' 
          placeholder='Modelo'
          onChange={this.handleChange}
          value={this.state.model}/>

        <input 
          type="text" 
          name='version' 
          placeholder='Versão'
          onChange={this.handleChange}
          value={this.state.version}/>

        <input 
          type="text" 
          name='dealership' 
          placeholder='Nome da Loja'
          onChange={this.handleChange}
          value={this.state.dealership}/>

        <input 
          type="text" 
          name='year' 
          placeholder='Ano'
          onChange={this.handleChange}
          value={this.state.year}/>

        <input 
          type="text" 
          name='km' 
          placeholder='KM'
          onChange={this.handleChange}
          value={this.state.km}/>

        <input 
          type="text" 
          name='fuel' 
          placeholder='Combustível'
          onChange={this.handleChange}
          value={this.state.fuel}/>

        <input 
          type="text" 
          name='value' 
          placeholder='Preço'
          onChange={this.handleChange}
          value={this.state.value}/>

        <button type='submit'>Cadastrar</button>
      </form>
    );
  }
}

export default New;