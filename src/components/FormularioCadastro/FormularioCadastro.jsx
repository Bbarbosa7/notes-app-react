import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
  }

  _handlerMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handlerMudancaDescricao(evento) {
    this.descricao = evento.target.value;
  }

  _criaNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.props.criarNovaNota(this.titulo, this.descricao);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criaNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaDescricao.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
