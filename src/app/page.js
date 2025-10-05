import styles from './page.module.css'

export default function LandingPage() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_menu}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>Início</li>
            <li className={styles.nav_item}>Sobre</li>
            <li className={styles.nav_item}>Recursos</li>
            <li className={styles.nav_item}>Contato</li>
          </ul>
        </div>
      </nav>

      <main className={styles.container}>
        
        <section className={styles.hero}>
          <h1>WorkHistory</h1>
          <p>Seu histórico profissional valorizado em um só lugar 🚀</p>
          <button className={styles.cta}>Começar agora</button>
        </section>

        <section className={styles.features}>
          <div>
            <h2>📌 Perfil Profissional</h2>
            <p>Mostre sua trajetória de trabalho com clareza e profissionalismo.</p>
          </div>
          <div>
            <h2>⚡ Reconhecimento</h2>
            <p>Receba avaliações e recomendações pelos serviços prestados.</p>
          </div>
          <div>
            <h2>🌎 Rede Profissional</h2>
            <p>Conecte-se com empresas e colegas de profissão.</p>
          </div>
        </section>

        {/* Nova Seção de Cadastro */}
        <section className={styles.registration}>
          <h2>Junte-se à Nossa Comunidade</h2>
          <div className={styles.registrationWrapper}>
            {/* Card para Colaboradores */}
            <div className={styles.registrationCard}>
              <div className={styles.registrationIcon}>👨‍💼</div>
              <h3>Para Colaboradores</h3>
              <p>
                Crie seu perfil profissional, mostre suas habilidades, 
                receba reconhecimento e conecte-se com oportunidades 
                incríveis.
              </p>
              <button className={styles.registrationButton}>
                Criar Perfil Grátis
              </button>
            </div>

            {/* Card para Empresas */}
            <div className={styles.registrationCard}>
              <div className={styles.registrationIcon}>🏢</div>
              <h3>Para Empresas</h3>
              <p>
                Encontre talentos qualificados, verifique históricos 
                profissionais e construa equipes de alta performance.
              </p>
              <button className={`${styles.registrationButton} ${styles.secondary}`}>
                Cadastrar Empresa
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}