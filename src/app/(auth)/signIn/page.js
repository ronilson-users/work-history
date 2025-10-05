'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulando uma requisição de login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Adicione aqui sua lógica de autenticação real
      console.log('Dados do login:', { email, password, rememberMe });
      alert(`Login realizado com sucesso!\nEmail: ${email}`);
      
      // Reset do formulário após sucesso
      setEmail("");
      setPassword("");
      
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2>Bem-vindo de volta</h2>
        <p>Entre na sua conta para continuar</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className={styles.input}
          required
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <div className={styles.labelContainer}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <a href="/esqueci-senha" className={styles.forgotPassword}>
            Esqueceu a senha?
          </a>
        </div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
          className={styles.input}
          required
          disabled={isLoading}
          minLength={6}
        />
      </div>

      <div className={styles.rememberMe}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
            className={styles.checkbox}
            disabled={isLoading}
          />
          <span>Lembrar de mim</span>
        </label>
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className={styles.spinner}></div>
            Entrando...
          </>
        ) : (
          "Entrar na conta"
        )}
      </button>

      <div className={styles.signupLink}>
        <p>
          Não tem uma conta?{" "}
          <a href="/cadastro" className={styles.link}>
            Cadastre-se gratuitamente
          </a>
        </p>
      </div>
    </form>
  );
}