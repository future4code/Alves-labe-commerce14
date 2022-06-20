import React from 'react';
import styled from 'styled-components'

const Produto = styled.div`
  border: 2px solid gray;
  width: 300px;
  margin-bottom: 10px;
  align-items: center;
  margin: 20px;
  border-radius: 5px;

`
const ProdutoFooter = styled.footer`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Botao = styled.button`
      border-radius: 20px;
      background-color: blue;
`
const Foto = styled.img`
    width: 100%;
    height: 200px;
`

class Cardproduto extends React.Component {
  render() {
    return (
      <div>
           <Produto>
            <Foto src={this.props.fotoproduto} alt="foto.produto"></Foto>
            <ProdutoFooter>
            <h3>{this.props.nomeproduto}</h3>
            <h2>R$ {this.props.valorproduto}</h2>
            <Botao onClick={()=> this.props.onAdd(this.props.produto)}>Adicionar ao carrinho</Botao>
            </ProdutoFooter>
          </Produto> 
      </div>
    )
  }
}

export default Cardproduto;

