import styles from "./page.module.css";

export default function Admin() {
 return (
  <>
   <div className={styles.container}>
    <nav className={styles.nav}>
     <div className={styles.logo}>
      WORK HISTORY
     </div>
    </nav>

    <main className={styles.main}>
     {/* Hero Section */}
     <section className={styles.hero}>
      <h1>Conectamos Promotores e Repositores a Supermercados</h1>
      <p>
       Sua loja precisa de ajuda rápida? Ou você quer trabalhar como promotor?
       Este é o lugar.
      </p>
      <div className={styles.buttons}>
       <a
        href="/empresas"
        className={styles.buttonPrimary}
       >
        Quero contratar
       </a>
       <a
        href="/user"
        className={styles.buttonSecondary}
       >
        Quero trabalhar
       </a>
      </div>
     </section>

     {/* Benefícios Empresas */}
     <section className={styles.section}>
      <h2>Para Empresas</h2>
      <ul>
       <li>Reposição rápida de mercadorias</li>
       <li>Profissionais avaliados e confiáveis</li>
       <li>Redução de custos com funcionários fixos</li>
      </ul>
     </section>

     {/* Benefícios Profissionais */}
     <section className={styles.section}>
      <h2>Para Profissionais</h2>
      <ul>
       <li>Faça seu próprio horário</li>
       <li>Reconhecimento pelo seu serviço</li>
       <li>Monte seu currículo digital</li>
       <li>Diversas oportunidades na sua região</li>
      </ul>
     </section>

     {/* Formulário simples */}
     <section className={styles.section}>
      <h2>Cadastre-se agora</h2>
      <form
       action="https://formspree.io/f/mnqekjvy"
       method="POST"
       className={styles.form}
      >
       <input
        type="text"
        name="name"
        placeholder="Seu nome"
        required
        className={styles.input}
       />

       <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        required
        className={styles.input}
       />

       <select name="tipo" className={styles.select}>
        <option value="empresa">Sou Empresa</option>
        <option value="profissional">Sou Profissional</option>
       </select>

       <button type="submit" className={styles.submitButton}>
        Enviar
       </button>
      </form>
     </section>
    </main>

    {/* Section Parceiros */}
    <section className={styles.parceiros}>
     <h2>Nossos Parceiros</h2>
     <div className={styles.parceirosGrid}>
      <div className={styles.parceiroItem}>Logo 1</div>
      <div className={styles.parceiroItem}>Logo 2</div>
      <div className={styles.parceiroItem}>Logo 3</div>
      <div className={styles.parceiroItem}>Logo 4</div>
     </div>
    </section>

    <footer className={styles.footer}>
     <p>&copy; 2024 Work History. Todos os direitos reservados.</p>
    </footer>
   </div>
  </>
 );
}