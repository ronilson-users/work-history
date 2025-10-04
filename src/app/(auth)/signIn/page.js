
'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      // Adicione aqui a lógica de autenticação
      alert(`Email: ${email}\nSenha: ${password}`);
   }

  return (
    <form className={styles.box} onSubmit={handleSubmit}>
      <h2>Entrar</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}
