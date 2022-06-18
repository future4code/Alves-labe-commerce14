import React, { Component } from 'react';
import Cardproduto from './components/CardProduto';
import styled from 'styled-components';
import { Filter } from './components/Filter';




class App extends React.Component {

  state = {
    produtos: [
      {
        fotoproduto: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao Planeta Saturno.",
        valorproduto: "50.000"
      },

      {
        fotoproduto: "https://img.olhardigital.com.br/wp-content/uploads/2021/09/Ilustracao-de-Jupiter.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Jupiter!",
        valorproduto: "70.000"
      },
      {
        fotoproduto: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/planeta-urano.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Urano!",
        valorproduto: "90.000"
      },
      {
        fotoproduto: "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-v%C3%AAnus_60584053.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Vênus!",
        valorproduto: "130.000"
      }

    ],
    minValue: -Infinity,
    maxValue: +Infinity,
    search: '',
  }

  getMinValue = (e) => {
    this.setState({
      minValue: e.target.value
    })
  }

  getMaxValue = (e) => {
    this.setState({
      maxValue: e.target.value
    })
  }

  onChangeSearchProduct = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  onClickCleanFilters = () => {
    this.setState({
      minValue: -Infinity,
      maxValue: +Infinity,
      search: '',
      order: '',
    })
  }


  render() {

    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <Cardproduto
          fotoproduto={produto.fotoproduto}
          nomeproduto={produto.nomeproduto}
          valorproduto={produto.valorproduto}
        />
      );
    })

    return (

      <div>
        <div className="App">
          <Filter
            getMinValue={this.getMinValue}
            getMaxValue={this.getMaxValue}
            onChangeSearchProduct={this.onChangeSearchProduct}
            onClickCleanFilters={this.onClickCleanFilters}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            searchProduct={this.state.search}
          />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </header>
        </div>

=======
      <div>
          <div>{listaDeProdutos}</div>
     </div>


   </div>
)
}}
export default App;


