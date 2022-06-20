import React, { Component } from 'react';

import CardProduto from './components/CardProduto';
import styled from 'styled-components';
import { Filter } from './components/Filter';
import { Cart } from './components/Cart';


const SecaoPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    
`
const SecaoProdutos = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
    
`


export default class App extends React.Component {

  state = {
    produtos: [
      {
        fotoproduto: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao Planeta Saturno.",
        valorproduto: 50000,
        id: 1
      },
      {
        fotoproduto: "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-v%C3%AAnus_60584053.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Vênus!",
        valorproduto: 130000,
        id: 2
      },
      {
        fotoproduto: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/planeta-urano.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Urano!",
        valorproduto: 90000,
        id: 3
      },
      {
        fotoproduto: "https://img.olhardigital.com.br/wp-content/uploads/2021/09/Ilustracao-de-Jupiter.jpg",
        nomeproduto: "Viagem de IDA/VOLTA ao planeta Jupiter!",
        valorproduto: 70000,
        id: 4
      }

    ],
    minValue: -Infinity,
    maxValue: +Infinity,
    search: '',
    sortBy: '',
    cartItems: [],
    totalValue: 0,
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
      sortBy: '',
    })
  }
  onChangeSelectSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  onAdd = (product) => {
    const newCartItem = [...this.state.cartItems, product]
    this.setState({
      cartItems: newCartItem,
      totalValue: this.state.totalValue + product.valorproduto
    })
  }

  removeItem = (product) => {
    const newCartItem = [...this.state.cartItems.filter((item) => {
      return item.id === product.id ? false : true
    })]
    this.setState({
      cartItems: newCartItem,
      totalValue: this.state.totalValue - product.valorproduto
    })}




    render() {
      console.log(this.state.cartItems)


      const listaDeProdutos = this.state.produtos.filter((product) => {
        return product.valorproduto >= this.state.minValue || this.state.minValue === "" ? true : false
      }).filter((product) => {
        return product.valorproduto <= this.state.maxValue || this.state.maxValue === "" ? true : false
      }).filter((product) => {
        return product.nomeproduto.toLowerCase().includes(this.state.search.toLowerCase())
      }).sort((a, b) => {
        switch (this.state.sortBy) {
          case "asc value":
            return a.valorproduto - b.valorproduto
          case "desc value":
            return b.valorproduto - a.valorproduto
          case "alf a-z":
            return a.nomeproduto.localeCompare(b.nomeproduto)
          case "alf z-a":
            return b.nomeproduto.localeCompare(a.nomeproduto)
          default:
            return a, b
        }
      }).map((produto) => {
        return (
          <CardProduto
            produto={produto}
            fotoproduto={produto.fotoproduto}
            nomeproduto={produto.nomeproduto}
            valorproduto={produto.valorproduto}
            onAdd={this.onAdd}
          />
        );
      })

      return (
        <div>
          <SecaoPrincipal>

            <Filter
              getMinValue={this.getMinValue}
              getMaxValue={this.getMaxValue}
              onChangeSearchProduct={this.onChangeSearchProduct}
              onClickCleanFilters={this.onClickCleanFilters}
              onChangeSelectSort={this.onChangeSelectSort}
              minValue={this.state.minValue}
              maxValue={this.state.maxValue}
              searchProduct={this.state.search}
            />
            <SecaoProdutos>
              {listaDeProdutos}
            </SecaoProdutos>

            <Cart
              cartItems={this.state.cartItems}
              totalValue={this.state.totalValue}
              removeItem={this.removeItem}
            />

          </SecaoPrincipal>
        </div>
      )
    }}