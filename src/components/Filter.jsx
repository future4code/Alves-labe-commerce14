import React, { Component } from "react";
import styled from "styled-components";

const SectionFiltros = styled.section`
    border: 1px solid #000;
    display: block;
    width: 200px;
    height: 400px;
    margin: 20px;
`;

const Title = styled.h1`
    margin-left: 10px;
    margin-right: 10px;
`;

const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    gap: 10px;
`;

const ButtonCleanFilter = styled.button`
    margin: 20px 0;
`;



export class Filter extends Component {

    render() {

        return(
            <SectionFiltros>
                <Title>Filtros</Title>
                <DivInputs>
                    <label htmlFor="">Valor Mínimo</label>
                    <input type="number" value={this.props.minValue} onChange={this.props.getMinValue}/>
                    <label htmlFor="">Valor Máximo</label>
                    <input type="number" value={this.props.maxValue} onChange={this.props.getMaxValue}/>
                    <label htmlFor="">Busca</label>
                    <input type="text" value={this.props.searchProduct} onChange={this.props.onChangeSearchProduct}/>
                    <label htmlFor="">Ordenar por:</label>
                    <select name="" id="" onChange={this.props.onChangeSelectSort}>
                        <option value="">Padrão</option>
                        <option value="asc value">Preço ↑</option>
                        <option value="desc value">Preço ↓</option>
                        <option value="alf a-z">Nome ↑</option>
                        <option value="alf z-a">Nome ↓</option>
                    </select>
                    <ButtonCleanFilter onClick={this.props.onClickCleanFilters}>Limpar Filtros</ButtonCleanFilter>
                </DivInputs>
            </SectionFiltros>
        )
    }
}