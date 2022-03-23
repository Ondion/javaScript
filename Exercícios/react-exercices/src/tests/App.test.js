import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Exemplo de uso de describe', () => {
  
  it("test: teste inicial", () => {
    render(<App />);
    const element = screen.getByText('Editar!');
    expect(element).toBeInTheDocument();
  });

  test('test: Testa o input tipo email', () => {
    render(<App />); // Acessar os elementos,
    const valorHTML = screen.getByLabelText('Editar!!!'); // Interagir com os elementos,
    expect(valorHTML).toBeInTheDocument(); // Realizar o teste.
  })

  test('test: Testa os seletores de input', () => {
    render(<App />); // Acessar os elementos,
    const valorHTML = screen.getByLabelText('Editar!!!'); // Interagir com os elementos,
    expect(valorHTML).toBeInTheDocument(); // Realizar o teste.
    expect(valorHTML.type).toBe('email') // Testa se o tipo do input é email.
  })

  test('test: Testa os seletores de input MODO: 2', () => {
    render(<App />); // Acessar os elementos,
    const valorHTML = screen.getByLabelText('Editar!!!'); // Interagir com os elementos,
    expect(valorHTML).toBeInTheDocument(); // Realizar o teste.
    expect(valorHTML).toHaveProperty('type', 'email') // Testa se o tipo do input é email de uma forma diferente.
  })

  it.skip('test: testa o seletor para botões pelo getByRole', () => {
    render (<App /> );
    const pegaBotao = screen.getByTestId('button-test');
    expect(pegaBotao).toBeInTheDocument();
  })

  it('test: testa o seletor para botões pelo getByRole e dataTestId para evitar erro de botões multiplos', () => {
    render (<App /> );
    const pegaBotao = screen.getByTestId('button-test');
    expect(pegaBotao).toBeInTheDocument();
    expect(pegaBotao).toHaveProperty('type', 'button')
    expect(pegaBotao).toHaveValue('Enviar')
  })

  it('test: testa o seletor para botões pelo getAllByRole', () => {
    render (<App /> );
    const pegaBotao = screen.getAllByRole('button');
    expect(pegaBotao).toHaveLength(2);
  })

  test('Testa o envio de informações ao clicar no botão de enviar', () => {
    render (<App />);
    const inputMail = screen.getByTestId('input-test');
    const inputButton = screen.getByTestId('button-test');
    const printE = screen.getByTestId('value-test')

    userEvent.type(inputMail, 'teste de digitação');
    userEvent.click(inputButton);

    expect(inputMail).toHaveValue('');
    expect(printE).toHaveTextContent('teste de digitação');
  })

});