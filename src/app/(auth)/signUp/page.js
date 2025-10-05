'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    // Validação das senhas
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      setIsLoading(false);
      return;
    }

    // Validação dos termos
    if (!acceptTerms) {
      alert("Você precisa aceitar os termos de uso!");
      setIsLoading(false);
      return;
    }

    try {
      // Simulando uma requisição de cadastro
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Adicione aqui sua lógica de cadastro real
      console.log('Dados do cadastro:', { 
        email: formData.email, 
        password: formData.password,
        acceptTerms 
      });
      
      alert(`Cadastro realizado com sucesso!\nBem-vindo ao WorkHistory!`);
      
      // Reset do formulário após sucesso
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setAcceptTerms(false);
      
    } catch (error) {
      alert("Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2>Seja Bem-Vindo</h2>
        <p>Pronto para conquistar sua liberdade?</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="seu@email.com"
          className={styles.input}
          required
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Crie uma senha"
          className={styles.input}
          required
          disabled={isLoading}
          minLength={6}
        />
        <small className={styles.helpText}>
          Mínimo de 6 caracteres
        </small>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirmar Senha
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Repita a senha"
          className={styles.input}
          required
          disabled={isLoading}
          minLength={6}
        />
        {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
          <small className={styles.errorText}>
            As senhas não coincidem
          </small>
        )}
      </div>

      <div className={styles.rememberMe}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={e => setAcceptTerms(e.target.checked)}
            className={styles.checkbox}
            disabled={isLoading}
            required
          />
          <span>
            Aceito os{" "}
            <a href="/termos" className={styles.link} target="_blank">
              termos de uso
            </a>{" "}
            e{" "}
            <a href="/privacidade" className={styles.link} target="_blank">
              política de privacidade
            </a>
          </span>
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
            Criando conta...
          </>
        ) : (
          "Cadastrar uma conta"
        )}
      </button>

      <div className={styles.signupLink}>
        <p>
          Já é cadastrado?{" "}
          <a href="/SignIn" className={styles.link}>
            Faça o login com sua conta
          </a>
        </p>
      </div>
    </form>
  );
}