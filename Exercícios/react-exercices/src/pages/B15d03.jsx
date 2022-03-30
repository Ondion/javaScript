import React, { Component } from 'react';
import SideMenu from './SideMenu';

class B15d03 extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };
  }

  render() {
    // const { nome, email, cpf, endereco, cidade, estado } = this.state;

    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

    return (
      <>
        <SideMenu />
        <div>
          <form>
            <label>
              Nome:
              <input
                type="text"
              />
            </label>
            <label>
            email:
              <input
                type="text"
              />
            </label>
            <label>
            cpf:
              <input
                type="text"
              />
            </label>
            <label>
            endereco:
              <input
                type="text"
              />
            </label>
            <label>
            cidade:
              <input
                type="text"
              />
            </label>
            <label
              for='estado'
            >
            estado:
              <select
                id="estado"
                name="estado"
              >
                { states.map((e) => <option>{ e }</option>) }
              </select>
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default B15d03;
