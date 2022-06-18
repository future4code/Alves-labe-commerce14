import React, { Component } from "react";
import styled from "styled-components";

const SectionFiltros = styled.section`
    border: 1px solid #000;
    display: block;
    width: 200px;
    height: 400px;
    margin: 20px;
`;

const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;



export class Filter extends Component {

    render() {

        return(
            <SectionFiltros>
                <h1>Filtros</h1>
                <DivInputs>
                    <label htmlFor="">Valor Mínimo</label>
                    <input type="number" value={this.props.minValue} onChange={this.props.getMinValue}/>
                    <label htmlFor="">Valor Máximo</label>
                    <input type="number" value={this.props.maxValue} onChange={this.props.getMaxValue}/>
                    <label htmlFor="">Busca</label>
                    <input type="text" value={this.props.searchProduct} onChange={this.props.onChangeSearchProduct}/>
                    <button onClick={this.props.onClickCleanFilters}>Limpar Filtros</button>
                </DivInputs>
            </SectionFiltros>
        )
    }
}