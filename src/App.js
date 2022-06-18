import React, { Component } from 'react';

import CardProduto from './components/CardProduto';
import styled from 'styled-components';
import { Filter } from './components/Filter';


const SecaoPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    
`
const SecaoProdutos = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
    
`


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
tMaxValue = (e) => {

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


    const listaDeProdutos = this.state.produtos.map((produto)=> {
    return (
     <CardProduto
        fotoproduto={produto.fotoproduto }
        nomeproduto={produto.nomeproduto}
        valorproduto={produto.valorproduto}
        />
    );
} )

  return (
      <div> 
          <SecaoPrincipal>

          <Filter
            getMinValue={this.getMinValue}
            getMaxValue={this.getMaxValue}
            onChangeSearchProduct={this.onChangeSearchProduct}
            onClickCleanFilters={this.onClickCleanFilters}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            searchProduct={this.state.search}
          />
            <SecaoProdutos>
                 {listaDeProdutos}
            </SecaoProdutos>


          </SecaoPrincipal>
     </div>
    )
  }
}


   </div>
)
}}
export default App;


