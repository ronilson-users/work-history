export default function AppLayout({ children }) {
 return (
  <div
   style={{
    backgroundColor: "#2f2f2f",
    minHeight: "100vh",       
    display: "flex",
    flexDirection: "column",
   }}
  >
   <header
    style={{
     padding: "1rem",
     backgroundColor: "#1f1f1f",
     color: "#fff",
    }}
   >
    <div>
     <h1>Meu App</h1>
    </div>
   </header>

   <main
    style={{
     flex: 1,                  
     padding: "1rem",
     color: "#fff",
    }}
   >
    {children}
   </main>
  </div>
 );
}