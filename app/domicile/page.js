export const metadata = {
  title: 'Réparation de Téléphone à Domicile',
  description: 'Pas le temps de vous déplacer ? On répare votre téléphone à domicile ou au bureau sur Toulouse. Rapide, fiable et garanti 1 an. Prenez rendez-vous !',
};

import { Car, Clock, MapPin, Wrench } from 'lucide-react';
import FAQ from '@/components/FAQ';
import styles from './page.module.css';

export default function Domicile() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.giantWaveTop}></div>
        
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.textRight}>
            <h1 className={styles.title}>La réparation vient <span className="text-gradient">à vous</span>.</h1>
            <p className={styles.subtitle}>
              Pas le temps de vous déplacer en boutique ? Nos techniciens interviennent directement à votre domicile ou sur votre lieu de travail pour réparer votre téléphone.
            </p>
            <a href="#rendezvous" className="btn-primary">Prendre Rendez-vous</a>
          </div>
          
          <div className={styles.carBubble}>
            <Car size={80} color="#fff" />
            <h2>Intervention Rapide</h2>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className={styles.seoSection}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">Comment ça marche ?</h2>
          
          <div className={styles.stepsGrid}>
             <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <MapPin size={40} className={styles.icon} />
                <h3>Prise de contact</h3>
                <p>Indiquez-nous votre adresse, le modèle de votre appareil et la panne rencontrée. Nous vous donnons un devis immédiat.</p>
             </div>
             <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <Clock size={40} className={styles.icon} />
                <h3>Rendez-vous</h3>
                <p>Nous fixons un créneau qui vous arrange. Le technicien se déplace avec les pièces nécessaires à l'intervention.</p>
             </div>
             <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <Wrench size={40} className={styles.icon} />
                <h3>Réparation sur place</h3>
                <p>La majorité des réparations (écran, batterie) sont effectuées en moins de 30 minutes, sous vos yeux.</p>
             </div>
          </div>

          <div className={styles.seoText}>
            <h3>Réparation iPhone à domicile et au bureau</h3>
            <p>
              Votre temps est précieux. C'est pourquoi La Brigade Mobile propose un service de réparation d'iPhone directement à domicile. Que vous habitiez en centre-ville ou en banlieue, nos techniciens certifiés se déplacent pour effectuer le changement d'écran de votre iPhone 14, ou remplacer la batterie de votre iPhone 12 Pro. Plus besoin de patienter des heures en magasin, le service est rapide, sécurisé et garanti 1 an.
            </p>
            <h3>Intervention sur Samsung Galaxy, Xiaomi et toutes marques</h3>
            <p>
              Notre flotte d'experts est équipée pour traiter les pannes des téléphones Android les plus populaires. Remplacement de la vitre tactile d'un Samsung Galaxy S22 Ultra, réparation du connecteur de charge d'un Xiaomi Redmi Note 12... Nos camions-ateliers disposent des outils de précision pour réaliser des réparations de haute qualité directement devant chez vous ou pendant votre pause déjeuner au travail.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Bubble */}
      <section id="rendezvous" className={styles.contactSection}>
         <div className={styles.contactBubble}>
            <h2>Réservez votre technicien</h2>
            <p>Indiquez-nous vos disponibilités et votre ville pour que nous puissions organiser le déplacement.</p>
            <div style={{ marginTop: '2rem', background: '#fff', borderRadius: '20px', overflow: 'hidden' }}>
              <iframe 
                id="JotFormIFrame-261856530901356" 
                title="Formulaire Devis Réparation" 
                allowTransparency="true" 
                allowFullScreen="true" 
                allow="geolocation; microphone; camera" 
                src="https://form.jotform.com/261856530901356" 
                frameBorder="0" 
                style={{ minWidth: '100%', maxWidth: '100%', height: '600px', border: 'none', display: 'block' }} 
                scrolling="yes"
              ></iframe>
            </div>
         </div>
      </section>

      <FAQ 
        title="FAQ - Réparation à Domicile"
        subtitle="Les questions sur nos interventions sur site à Toulouse."
        customFaqs={[
          { question: "Où vous déplacez-vous exactement pour les réparations ?", answer: "Nos techniciens interviennent sur l'ensemble de l'agglomération toulousaine (Toulouse centre, Blagnac, Colomiers, Balma et communes limitrophes). Nous réparons votre smartphone à votre domicile, votre bureau ou même sur un lieu de rendez-vous extérieur." },
          { question: "Y a-t-il des frais de déplacement cachés ?", answer: "Non, notre grille tarifaire est transparente. Si des frais de déplacement s'appliquent selon votre zone géographique (grande périphérie toulousaine), ils vous sont systématiquement annoncés et inclus dans le devis avant validation de l'intervention." },
          { question: "La réparation à domicile est-elle aussi fiable qu'en boutique ?", answer: "Absolument. Nos véhicules d'intervention sont de véritables ateliers mobiles équipés des mêmes outils de précision. Le technicien effectue les réparations (remplacement d'écran iPhone, batterie) en moins de 30 minutes dans des conditions optimales." },
          { question: "Comment payer une réparation effectuée à domicile ?", answer: "Le paiement s'effectue directement auprès du technicien à la toute fin de l'intervention, une fois que vous avez testé votre appareil. Nous acceptons les cartes bancaires via terminal de paiement et les espèces." }
        ]}
      />

    </div>
  );
}
