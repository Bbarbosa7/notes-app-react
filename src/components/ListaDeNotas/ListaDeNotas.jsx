import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.novaNota.map((novaNota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={novaNota.titulo} descricao={novaNota.descricao}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
