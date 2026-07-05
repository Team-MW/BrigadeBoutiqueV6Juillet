import { Recycle, DollarSign, Smartphone } from 'lucide-react';
import styles from './page.module.css';

export default function Reprise() {
  return (
    <div className={styles.page}>
      
      {/* En-tête de la page */}
      <section className={styles.heroSection}>
        <div className={styles.giantBlobTopRight}></div>
        <div className={styles.giantBlobBottomLeft}></div>
        
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.textLeft}>
            <h1 className={styles.title}>Revendez votre <span className="text-gradient">téléphone</span> au meilleur prix.</h1>
            <p className={styles.subtitle}>
              La Brigade Mobile rachète vos anciens smartphones, tablettes et ordinateurs. 
              Qu'ils soient fonctionnels ou cassés, donnez-leur une seconde vie et repartez avec du cash !
            </p>
            <a href="#estimer" className="btn-primary">Estimer mon appareil</a>
          </div>
          
          <div className={styles.blobDecoration}>
            <Recycle size={80} color="#fff" />
            <h2>Écologique & Rentable</h2>
          </div>
        </div>
      </section>

      {/* Explications SEO massives */}
      <section className={styles.seoSection}>
        <div className={styles.cornerBlobTopLeft}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">Pourquoi nous revendre votre smartphone ?</h2>
          
          <div className={styles.gridFeatures}>
             <div className={styles.featureCard}>
                <DollarSign size={48} className={styles.icon} />
                <h3>Paiement Immédiat</h3>
                <p>Nous évaluons votre appareil en boutique en moins de 10 minutes. Le rachat est immédiat, vous repartez avec la somme en espèces ou par virement.</p>
             </div>
             <div className={styles.featureCard}>
                <Smartphone size={48} className={styles.icon} />
                <h3>Tous les états acceptés</h3>
                <p>iPhone écran cassé ? Batterie HS ? Appareil oxydé ? Nous rachetons tous les types d'appareils, même non fonctionnels, pour leurs pièces ou pour les reconditionner.</p>
             </div>
             <div className={styles.featureCard}>
                <Recycle size={48} className={styles.icon} />
                <h3>Geste pour la planète</h3>
                <p>Chaque téléphone recyclé ou reconditionné est une victoire écologique. Ne laissez plus dormir vos anciens iPhone ou Samsung dans vos tiroirs.</p>
             </div>
          </div>

          <div className={styles.seoText}>
            <h3>Rachat d'iPhone (Apple) à Paris et en France</h3>
            <p>
              Vous possédez un iPhone 15, iPhone 14 Pro Max, iPhone 13, iPhone 12 ou même un modèle plus ancien comme l'iPhone 11 ou le XR ? La Brigade Mobile est spécialisée dans le rachat de produits Apple. L'écosystème Apple conserve une excellente valeur sur le marché de l'occasion. Nous vous proposons les meilleurs tarifs de reprise, que votre vitre arrière soit brisée, que le Face ID ne fonctionne plus, ou que la capacité de la batterie soit faible.
            </p>
            <h3>Reprise de smartphones Samsung Galaxy, Xiaomi et autres marques</h3>
            <p>
              Notre expertise ne s'arrête pas à Apple. Nous rachetons au meilleur prix vos Samsung Galaxy S23 Ultra, S22, S21, ainsi que les gammes Galaxy A (A54, A53...). Vous êtes sur Android ? Xiaomi (Redmi Note, Poco), Oppo, Google Pixel (Pixel 7, Pixel 8) : notre base de données est mise à jour quotidiennement pour vous garantir une estimation juste et transparente au cours du marché actuel de la seconde main.
            </p>
          </div>
        </div>
      </section>
      
      {/* Formulaire de pré-estimation */}
      <section id="estimer" className={styles.contactSection}>
         <div className={styles.contactBubble}>
            <h2>Demande d'estimation gratuite</h2>
            <p>Remplissez ce formulaire pour avoir une idée du prix de rachat. La valeur finale sera validée lors du contrôle technique de l'appareil en boutique.</p>
            <form className={styles.form}>
               <input type="text" placeholder="Marque (ex: Apple, Samsung...)" className={styles.input} />
               <input type="text" placeholder="Modèle exact (ex: iPhone 13 Pro 128Go)" className={styles.input} />
               <select className={styles.input}>
                  <option>État de l'écran</option>
                  <option>Intact / Rayures invisibles</option>
                  <option>Micro-rayures</option>
                  <option>Écran cassé / fissuré</option>
               </select>
               <select className={styles.input}>
                  <option>État général (Dos / Contour)</option>
                  <option>Comme neuf</option>
                  <option>Usure normale</option>
                  <option>Vitre arrière cassée / Châssis tordu</option>
               </select>
               <button type="button" className="btn-primary" style={{background: '#fff', color: '#2563eb'}}>Demander le prix</button>
            </form>
         </div>
      </section>

    </div>
  );
}
