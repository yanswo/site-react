import React, { useState } from "react";

function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(
    () => localStorage.getItem("temaEscuro") === "true"
  );

  const AlternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const alternarTema = () => {
    setTemaEscuro((prevTemaEscuro) => {
      const novoTema = !prevTemaEscuro;
      localStorage.setItem("temaEscuro", novoTema);
      return novoTema;
    });
  };

  return (
    <div className={`App ${temaEscuro ? "tema-escuro" : "tema-claro"}`}>
      {/* Botão para abrir/fechar o menu lateral */}
      <button className="botao-toggle" onClick={AlternarMenu}>
        {menuAberto ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      {/* Menu lateral */}
      <div className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <h1>Bem-Vindo!</h1>

          {/* Botão de alternância de tema */}
          <li>
            <button onClick={alternarTema}>
              {temaEscuro ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </li>

          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      {/* Conteúdo do site */}
      <header className="App-header">
        <p>Este é um exemplo de tema claro e escuro.</p>
      </header>
    </div>
  );
}

export default MenuLateral;
