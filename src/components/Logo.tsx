import styles from './components.module.css';

const Logo = () => {
  return (
    <header className={styles.logoHeader}>
      <img src="BarangayLogo.jpg" alt="Logo" className={styles.logo}/>
      <h1 className={styles.logoTitle}>Barangay Services</h1>
    </header>
  );
};

export default Logo;
