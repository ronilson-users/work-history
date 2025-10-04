import styles from "./page.module.css";

export default function AdminLayout({ children }) {
 return (
  <div className={styles.container}>
   {/* Sidebar será implementado */}
   <aside className={styles.sidebar}>
    <nav className={styles.nav}>
     <ul>
      <li><a href="/admin/dashboard">Dashboard</a></li>
      <li><a href="/admin/user">Gerenciar Usuários</a></li>
      <li><a href="/admin/config">Configurações</a></li>
     </ul>
    </nav>
   </aside>
   <main className={styles.main}>
    {children}
   </main>
  </div>
 );
}