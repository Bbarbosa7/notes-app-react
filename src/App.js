import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      novaNota: []
    };
  }

  criarNovaNota(titulo, descricao) {
    const nota = {titulo, descricao};
    const novoArrayNotas = [...this.state.novaNota, nota];
    const novoEstado = {
      novaNota: novoArrayNotas
    };
    
    this.setState(novoEstado);
    
    // this.novaNota.push(nota);

    // console.log(this.novaNota.length);

    // this.setState({
      // novaNota: this.novaNota
    // });
  }
  
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNovaNota={this.criarNovaNota.bind(this)}/>
        <ListaDeNotas novaNota={this.state.novaNota}/>
      </section>
    );
  }
}
