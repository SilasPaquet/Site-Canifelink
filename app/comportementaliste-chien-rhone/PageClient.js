"use client";

import { useEffect } from "react";



const SERVICE_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultation comportementaliste chien",
  description:
    "Consultation comportementaliste canin certifiée à Lyon (Rhône) et en visio. Agressivité, anxiété, destructions, réactivité — éthologie bienveillante.",
  provider: {
    "@type": "LocalBusiness",
    name: "CANIFELINK",
    url: "https://www.canifelink.fr",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Rhône" },
    { "@type": "Country", name: "France" },
  ],
  serviceType: "Comportementaliste canin",
});

const PAGE_HTML = `
<script type="application/ld+json">${SERVICE_JSON_LD}</script>

<!-- HERO -->
<header class="service-hero dog-hero" role="banner" aria-labelledby="chien-h1">
  <div class="service-hero-left">
    <div class="badge-live">
      <span class="badge-dot"></span>
      Présentiel Rhône · Distanciel France et francophonie
    </div>
    <h1 id="chien-h1">
      Comportementaliste<br><em>chien</em><br>à Lyon &amp; en visio
    </h1>
    <p class="sub">
      Votre chien aboie, mord, détruit, a peur de tout ? Ce n'est pas un « mauvais chien » — c'est un chien qui exprime quelque chose. Je vous aide à décoder son message et à retrouver une relation sereine et durable.
    </p>
    <div class="hero-proof" style="margin-bottom:32px">
      <span class="proof-stars">★★★★★</span>
      <span class="proof-text">4,9/5 · 120+ avis vérifiés</span>
    </div>
    <div class="hero-actions">
      <a href="/prendre-rendez-vous" class="btn-main">📅 Je prends RDV pour mon chien</a>
      <a href="#problematiques" class="btn-ghost">Voir les problématiques →</a>
    </div>
  </div>
  <div class="service-hero-right" aria-hidden="true">🐕</div>
</header>

<!-- PROBLÉMATIQUES -->
<section id="problematiques" class="prob-section" aria-labelledby="prob-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Problèmes traités</div>
    <h2 class="section-title" id="prob-title">Les problématiques<br>que je traite — chien</h2>
    <p class="section-sub">Chaque comportement a une cause. Mon rôle est de l'identifier, la comprendre et vous donner les outils pour y répondre durablement — sans punition, sans coercition.</p>
    <div class="prob-grid">
      <div class="prob-card">
        <span class="prob-card-icon">⚡</span>
        <h3 class="prob-card-title">Agressivité</h3>
        <p class="prob-card-text">Envers les humains, les chiens ou d'autres animaux. Grognements, claquements de dents, morsures — je diagnostique la cause réelle (peur, douleur, territoire) et vous guide pas à pas.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">😰</span>
        <h3 class="prob-card-title">Anxiété &amp; peurs</h3>
        <p class="prob-card-text">Hyperattachement, anxiété de séparation, phobies des bruits ou de l'environnement. Ces états de détresse sont traçables et traitables avec une approche éthologique rigoureuse.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🏠</span>
        <h3 class="prob-card-title">Destructions</h3>
        <p class="prob-card-text">Meubles déchiquetés, portes griffées, maison mise sens dessus dessous en votre absence — cette expression a toujours une raison. On la trouve ensemble.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🦮</span>
        <h3 class="prob-card-title">Réactivité en laisse</h3>
        <p class="prob-card-text">Votre chien tire, aboie, se jette sur les autres chiens ou les cyclistes. La réactivité est le symptôme d'une émotion débordante — pas d'un manque d'obéissance.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🔁</span>
        <h3 class="prob-card-title">Comportements compulsifs</h3>
        <p class="prob-card-text">Tourner en rond, se mordre la queue, chasser des ombres ou des mouches imaginaires — ces stéréotypies indiquent une souffrance interne qu'il faut prendre en charge.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🐾</span>
        <h3 class="prob-card-title">Propreté &amp; autres</h3>
        <p class="prob-card-text">Non-propreté, marquages urinaires, fugues, refus d'obéissance — tout comportement persistant mérite une analyse comportementale, pas des punitions.</p>
      </div>
    </div>
  </div>
</section>

<!-- DÉROULEMENT -->
<section class="how-section" aria-labelledby="how-dog-title">
  <div class="how-header">
    <div class="label-tag" style="justify-content:center">Déroulement</div>
    <h2 class="section-title" id="how-dog-title" style="text-align:center">Votre consultation<br>en 4 étapes</h2>
    <p class="section-sub" style="text-align:center;margin:0 auto">Présentiel à domicile dans le Rhône (69) ou distanciel par visio, en France et dans toute la francophonie.</p>
  </div>
  <div class="steps-grid">
    <div class="step">
      <div class="step-num">1</div>
      <h3 class="step-title">Échange préalable</h3>
      <p class="step-desc">Vous décrivez la situation en quelques lignes. Je vous rappelle sous 24h pour clarifier et adapter le format de la consultation.</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <h3 class="step-title">Bilan comportemental</h3>
      <p class="step-desc">1h30 à 2h d'observation et d'échanges approfondis. Je recueille l'anamnèse complète de votre chien — sans jugement, sans pression.</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <h3 class="step-title">Plan d'action clair</h3>
      <p class="step-desc">Protocole personnalisé adapté à votre quotidien + compte-rendu écrit envoyé sous 48h. Des solutions concrètes, pas des généralités.</p>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <h3 class="step-title">Suivi 30 jours inclus</h3>
      <p class="step-desc">Accompagnement par messages pendant 30 jours. Vous avez une question en appliquant le protocole ? Je suis là pour répondre.</p>
    </div>
  </div>
  <div class="how-reassurance">
    <div class="reassure-item">✓ Sans coercition ni punitions</div>
    <div class="reassure-item">✓ Bilan vétérinaire respecté</div>
    <div class="reassure-item">✓ Résultats durables visés</div>
    <div class="reassure-item">✓ Votre rythme respecté</div>
  </div>
</section>

<!-- ZONE D'INTERVENTION -->
<section style="background:white;padding:88px 52px" aria-labelledby="zone-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag">Zone d'intervention</div>
    <h2 class="section-title" id="zone-title">Présentiel Rhône<br>&amp; distanciel France entière</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:40px">
      <div style="background:var(--cream);border-radius:16px;padding:28px;border-left:4px solid var(--teal)">
        <span style="font-size:28px;display:block;margin-bottom:12px">📍</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:18px;font-weight:700;margin-bottom:10px">Présentiel — Rhône (69)</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Intervention à domicile dans tout le département du Rhône. Je me déplace chez vous pour observer votre chien dans son environnement réel — là où les comportements se manifestent vraiment.</p>
        <p style="font-size:13px;color:var(--ink-soft);margin-top:10px">Lyon · Villeurbanne · Éveux · L'Arbresle · Mornant · Givors · Tarare · Thizy…</p>
      </div>
      <div style="background:var(--cream);border-radius:16px;padding:28px;border-left:4px solid var(--gold)">
        <span style="font-size:28px;display:block;margin-bottom:12px">💻</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:18px;font-weight:700;margin-bottom:10px">Distanciel — France &amp; francophonie</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Consultation par visio pour toute la France, la Belgique, la Suisse et le Québec. La visio est souvent aussi efficace que le présentiel — vous montrez votre environnement en direct.</p>
        <p style="font-size:13px;color:var(--ink-soft);margin-top:10px">France · Belgique · Suisse · Québec · Tout pays francophone</p>
      </div>
    </div>
  </div>
</section>

<!-- TARIFS -->
<section class="tarifs-section" aria-labelledby="tarifs-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Tarifs</div>
    <h2 class="section-title" id="tarifs-title">Tarifs &amp; durée</h2>
    <p class="section-sub">Transparence totale — pas de surprise. Le suivi 30 jours et le compte-rendu écrit sont toujours inclus.</p>
    <div class="tarifs-grid">
      <div class="tarif-card">
        <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700">Consultation distanciel</h3>
        <div class="tarif-price-big">Sur devis</div>
        <p class="tarif-duration">⏱ 1h30 à 2h · Visio</p>
        <ul class="tarif-includes">
          <li>Bilan comportemental complet</li>
          <li>Protocole personnalisé</li>
          <li>Compte-rendu écrit (48h)</li>
          <li>Suivi 30 jours par messages</li>
        </ul>
      </div>
      <div class="tarif-card featured">
        <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700">Consultation présentiel</h3>
        <div class="tarif-price-big">Sur devis</div>
        <p class="tarif-duration">⏱ 1h30 à 2h · À domicile Rhône 69</p>
        <ul class="tarif-includes">
          <li>Observation en contexte réel</li>
          <li>Bilan comportemental complet</li>
          <li>Plan d'action sur-mesure</li>
          <li>Compte-rendu écrit (48h)</li>
          <li>Suivi 30 jours par messages</li>
        </ul>
      </div>
    </div>
    <p style="text-align:center;margin-top:24px;font-size:14px;color:var(--ink-soft)">
      Contactez-moi pour recevoir la grille tarifaire détaillée — je vous réponds sous 24h.
    </p>
  </div>
</section>

<!-- TÉMOIGNAGES -->
<section class="testi-section" aria-labelledby="testi-dog-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="testi-header">
      <div>
        <div class="label-tag">Témoignages</div>
        <h2 class="section-title" id="testi-dog-title">Ce qu'ils disent<br>après leur consultation chien</h2>
      </div>
    </div>
    <div class="testi-grid">
      <div class="testi-card star" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-dog">Chien</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Notre Border Collie avait développé une agressivité envers les inconnus qui rendait nos promenades impossibles. Après deux séances, on comprend enfin ce qu'il vit — et lui va tellement mieux.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Sophie &amp; Thomas R.</div>
            <div class="testi-loc">Lyon 3e · Présentiel</div>
          </div>
          <div class="testi-stars" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
            <span itemprop="ratingValue" content="5">★★★★★</span>
          </div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-dog">Chien</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Mon Berger Australien était incontrôlable en laisse. Les méthodes de Manue sont à l'opposé de la répression — j'ai appris à comprendre sa peur. 3 mois plus tard, on se promène sereinement.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Julien M.</div>
            <div class="testi-loc">Villeurbanne · Présentiel</div>
          </div>
          <div class="testi-stars"><span>★★★★★</span></div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-dog">Chien</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Anxiété de séparation sévère depuis un déménagement. En visio depuis Toulouse, on a identifié toutes les sources de stress. Le protocole a été respecté et les résultats sont là.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Marine B.</div>
            <div class="testi-loc">Toulouse · Distanciel</div>
          </div>
          <div class="testi-stars"><span>★★★★★</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section" aria-labelledby="faq-dog-title">
  <div class="faq-inner" style="max-width:1000px;margin:0 auto;padding:0 52px">
    <div>
      <div class="label-tag">Questions fréquentes</div>
      <h2 class="section-title" id="faq-dog-title">Vos questions<br>sur le comportementaliste chien</h2>
      <div class="faq-list" role="list">

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Quelle différence entre comportementaliste et éducateur canin ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">L'éducateur canin apprend des ordres à votre chien. Le comportementaliste analyse les causes profondes d'un comportement problématique (anxiété, peur, traumatisme) pour y apporter une réponse thérapeutique durable. Les deux sont complémentaires — si mon chien a besoin d'éducation après la consultation, je vous oriente vers un professionnel de confiance.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Mon chien doit-il venir lors de la séance ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">En présentiel, son environnement est essentiel — l'observation en contexte réel est plus révélatrice. En visio, vous tenez la caméra et me montrez ce que je vous demande de filmer. Dans les deux cas, votre chien ne sera jamais mis en situation inconfortable ou stressante.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Combien de séances faut-il prévoir ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">La grande majorité des situations se résout sur 1 à 3 séances. Je suis contre l'abonnement infini — mon objectif est de vous rendre autonomes le plus vite possible. Des séances de suivi sont disponibles si nécessaire.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Mon chien a déjà consulté un véto comportementaliste — est-ce différent ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Le vétérinaire comportementaliste est médecin et peut prescrire des traitements médicaux. Mon approche est 100% comportementale et éthologique, sans médicaments. Les deux approches sont complémentaires. Si votre chien est sous traitement, j'adapte mon protocole en coordination avec votre vétérinaire.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            La consultation en visio est-elle aussi efficace ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui, dans la grande majorité des cas. La visio me permet de voir votre chien dans son environnement quotidien, d'observer la dynamique familiale et d'analyser les déclencheurs en temps réel. Certains chiens sont même plus détendus chez eux qu'en présence d'un inconnu.</div>
        </div>

      </div>
    </div>

    <div class="faq-cta-box">
      <h3>Prêt à comprendre votre chien ?</h3>
      <p>Décrivez votre situation en quelques lignes — je vous réponds sous 24h pour organiser votre consultation.</p>
      <ul>
        <li>Réponse garantie sous 24h</li>
        <li>Premier échange gratuit</li>
        <li>Suivi 30 jours inclus</li>
        <li>Compte-rendu écrit fourni</li>
        <li>Sans engagement</li>
      </ul>
      <a href="/prendre-rendez-vous" class="btn-white">📅 Je prends RDV pour mon chien</a>
      <a href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20chien" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">💬 WhatsApp</a>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-final" aria-labelledby="cta-chien-title">
  <div class="cta-final-inner">
    <h2 id="cta-chien-title">Votre chien mérite<br>d'être compris</h2>
    <p>Comportementaliste certifiée à Lyon (Rhône) et en visio — réponse sous 24h, méthodes 100% bienveillantes.</p>
    <div class="cta-final-btns">
      <a href="/prendre-rendez-vous" class="btn-cta-white">📅 Je prends rendez-vous</a>
      <a href="/a-propos" class="btn-cta-ghost">En savoir plus sur Manue →</a>
    </div>
    <p class="cta-guarantee">✓ Sans coercition · Suivi 30 jours inclus · Compte-rendu écrit</p>
  </div>
</section>
`;

export default function ChienPage() {
  useEffect(() => {
    window.toggleFaq = function toggleFaq(btn) {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (el) {
        el.classList.remove("open");
        el.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    };
    return () => {
      delete window.toggleFaq;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}
