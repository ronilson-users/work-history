export default function UserLayout({ children }) {
 return (
  <div className="user-layout">
   <nav className="user-nav">
    <h2>User</h2>
    <div className="nav-links">
     <a href="/user">Dashboard</a>
     <a href="/user/portfolio">Meu Perfil</a>
     <a href="/user/profile">Currículo</a>
     <a href="/user/vacancies">Vagas</a>
    </div>
   </nav>
   <main className="user-main">
    {children}
   </main>
  </div>
 );
}

