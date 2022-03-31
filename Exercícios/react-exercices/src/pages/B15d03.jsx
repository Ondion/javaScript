import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import { sendForm } from '../redux/actions';

class B15d03 extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      curriculo: '',
      cargo: '',
      descricao: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { history, newForm } = this.props;
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
     } = this.state;

    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

    return (
      <>
        <SideMenu />
        <div>
          <form>
            <label
              for="nome"
            >
              Nome:
              <input
                type="text"
                label="nome"
                id="nome"
                onChange={ this.handleChange }
                value={ nome }
                name="nome"
              />
            </label>
            <label
              id="email"
            >
            email:
              <input
                type="text"
                label="email"
                id="email"
                onChange={ this.handleChange }
                value={ email }
                name="email"
              />
            </label>
            <label
              id="cpf"
            >
            cpf:
              <input
                  type="text"
                  label="cpf"
                  id="cpf"
                  onChange={ this.handleChange }
                  value={ cpf }
                  name="cpf"
              />
            </label>
            <label
              id="endereco"
            >
            endereco:
              <input
                type="text"
                label="endereco"
                id="endereco"
                onChange={ this.handleChange }
                value={ endereco }
                name="endereco"
              />
            </label>
            <label
              id="cidade"
            >
            cidade:
              <input
                 type="text"
                 label="cidade"
                 id="cidade"
                 onChange={ this.handleChange }
                 value={ cidade }
                 name="cidade"
              />
            </label>
            <label
              for='estado'
            >
            estado:
              <select
                id="estado"
                name="estado"
                value={ estado }
                onChange={ this.handleChange }
              >
                { states.map((e) => <option>{ e }</option>) }
              </select>
            </label>
            <label
              id="curriculo"
            >
            curriculo:
              <input
                 type="text"
                 label="curriculo"
                 id="curriculo"
                 onChange={ this.handleChange }
                 value={ curriculo }
                 name="curriculo"
              />
            </label>
            <label
              id="cargo"
            >
            cargo:
              <input
                 type="text"
                 label="cargo"
                 id="cargo"
                 onChange={ this.handleChange }
                 value={ cargo }
                 name="cargo"
              />
            </label>
            <label
              id="descricao"
            >
            descrição:
              <input
                 type="text"
                 label="descricao"
                 id="descricao"
                 onChange={ this.handleChange }
                 value={ descricao }
                 name="descricao"
              />
            </label>
            <label>
              <button
                type='button'
                onClick={ () => {
                  newForm(this.state)
                  history.push("/B15d03b")
                } }
              >
                Enviar
              </button>
            </label>
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    newForm: (state) => dispatch(sendForm(state)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(B15d03);
