

import styles from './page.module.css'

export default function Companies() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>WorkHistory</h1>
        <p>Seu histórico profissional valorizado em um só lugar 🚀</p>
        <button className={styles.cta}>Começar agora</button>
      </section>

      <section className={styles.features}>
        <div>
          <h2>📌 Perfil Profissional</h2>
          <p>Mostre sua trajetória de trabalho com clareza.</p>
        </div>
        <div>
          <h2>⚡ Reconhecimento</h2>
          <p>Receba avaliações e recomendações pelos serviços prestados.</p>
        </div>
        <div>
          <h2>🌎 Rede</h2>
          <p>Conecte-se com empresas e colegas de profissão.</p>
        </div>
      </section>
    </main>
  )
}