import React, { useState } from "react";

function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      {/*Botão para abrir/Fechar o menu*/}
      <button className="botao-toggle" onClick={alternarMenu}>
        {menuAberto ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      {/* Condicionalmente renderizar o menu com base no estado */}

      <div className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <h1>Bem-Vindo!</h1>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLateral;
