import React, { useState, useEffect } from "react";
import "./App.css";

function MenuLateral() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(
    () => localStorage.getItem("temaEscuro") === "true"
  );
  const [authState, setAuthState] = useState("login");
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

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

  useEffect(() => {
    document.body.className = temaEscuro ? "tema-escuro" : "tema-claro";
  }, [temaEscuro]);

  return (
    <div>
      <button className="botao-toggle" onClick={AlternarMenu}>
        {menuAberto ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      <div className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <h1>Bem-Vindo!</h1>
          <li>
            <button onClick={alternarTema}>
              {temaEscuro ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </li>
          {!usuarioAutenticado ? (
            <>
              <li>
                <button onClick={() => setAuthState("login")}>Login</button>
              </li>
              <li>
                <button onClick={() => setAuthState("cadastro")}>
                  Cadastro
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  setUsuarioAutenticado(false);
                  setNomeUsuario("");
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {authState === "login" && !usuarioAutenticado && (
          <LoginForm
            onLogin={(nome) => {
              setUsuarioAutenticado(true);
              setNomeUsuario(nome);
            }}
          />
        )}
        {authState === "cadastro" && !usuarioAutenticado && <CadastroForm />}
        {usuarioAutenticado && <WelcomeMessage nome={nomeUsuario} />}
      </div>

      <header className="App-header">
        <p>Este é um exemplo de tema claro e escuro.</p>
      </header>
    </div>
  );
}

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login", email, senha);
    onLogin(nome);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
};

const CadastroForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    if (senha === confirmarSenha) {
      console.log("Cadastro", nome, email, senha);
    } else {
      console.log("Senhas não coincidem");
    }
  };

  return (
    <form onSubmit={handleCadastro}>
      <h2>Cadastro</h2>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </label>
      <label>
        Confirmar Senha:
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

const WelcomeMessage = ({ nome }) => {
  return <h2>Bem-vindo, {nome}!</h2>;
};

export default MenuLateral;
