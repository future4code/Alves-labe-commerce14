import React, {Component} from "react";

export class Cart extends Component {

    render() {

        return(
            <section>
                <h1>Carrinho:</h1>
                {this.props.cartItems.map((item) => <section><p>{item.nomeproduto}</p> <button onClick={()=> this.props.removeItem(item)}>Remover</button></section>)}
                <p>Valor total: {this.props.totalValue}</p>
            </section>
        )
    }
}