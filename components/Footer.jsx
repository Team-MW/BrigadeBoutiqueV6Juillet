import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Bus, PhoneCall } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <h3 className={styles.title}>La Brigade Mobile</h3>
          <p className={styles.desc}>
            Votre expert en réparation de téléphone à Toulouse. Service rapide, pièces d'origine, garantie 6 mois.
          </p>
          <div className={styles.rating}>
            <strong>4.9/5</strong> ⭐ (200+ avis)
          </div>
          <a href="tel:0756916593" className={`btn-primary ${styles.callBtn}`}>
            ✨ Appeler maintenant
          </a>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Navigation</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.navLink}>Accueil</Link></li>
            <li><Link href="/#services" className={styles.navLink}>Nos Services</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Nos Boutiques</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <MapPin className={styles.icon} size={18} />
              <span>65 Route de Blagnac<br/>31300 Toulouse</span>
            </li>
            <li className={styles.listItem}>
              <Bus className={styles.icon} size={18} />
              <span>L1, 70<br/>Arrêt "Cité Madrid"</span>
            </li>
            <li className={styles.listItem}>
              <Phone className={styles.icon} size={18} />
              <span>07 56 91 65 93</span>
            </li>
            <li className={styles.listItem}>
              <Mail className={styles.icon} size={18} />
              <span>labrigademobile31@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Horaires</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Clock className={styles.icon} size={18} />
              <div>
                <p>Lun-Ven: 9h-19h</p>
                <p>Sam: 10h-18h</p>
                <p>Dimanche: Fermé</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} La Brigade Mobile. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
