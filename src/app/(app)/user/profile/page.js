import styles from "./page.module.css";

export default function Profile() {
 return (
  <div className={styles.profileCard}>
   {/* Cabeçalho */}
   <div className={styles.profileHeader}>
    <div className={styles.profilePhoto}></div>
    <div className={styles.profileInfo}>
     <h2>João Silva</h2>
     <p className={styles.role}>Shelf Stocker</p>
     <div className={styles.tags}>
      <span className={`${styles.tag} ${styles.experienced}`}>Experienced</span>
      <span className={`${styles.tag} ${styles.punctual}`}>Punctual</span>
     </div>
    </div>
   </div>

   {/* Histórico */}
   <div className={styles.workHistory}>
    <div className={styles.workItem}>
     <div className={styles.workText}>
      <p className={styles.title}>Product restocking at Supermarket A</p>
      <span className={styles.date}>Mar 2024</span>
     </div>
     <div className={styles.rating}>
      <div className={styles.stars}>★★★★★</div>
      <span className={styles.ratingNumber}>5,5</span>
     </div>
    </div>

    <div className={styles.workItem}>
     <div className={styles.workText}>
      <p className={styles.title}>Shelf organization at Store B</p>
      <span className={styles.date}>Feb 2024</span>
     </div>
     <div className={styles.rating}>
      <div className={styles.stars}>★★★★★</div>
      <span className={styles.ratingNumber}>5,5</span>
     </div>
    </div>

    <div className={styles.workItem}>
     <div className={styles.workText}>
      <p className={styles.title}>Price tagging at Retailer C</p>
      <span className={styles.date}>Jan 2024</span>
     </div>
     <div className={styles.rating}>
      <div className={styles.stars}>★★★★★</div>
      <span className={styles.ratingNumber}>5,5</span>
     </div>
    </div>
   </div>
  </div>
 );
}