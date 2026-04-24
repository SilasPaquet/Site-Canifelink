"use client";

import { useEffect } from "react";



const PAGE_HTML = `
<!-- HERO -->
<header class="service-hero cat-hero" role="banner" aria-labelledby="chat-h1">
  <div class="service-hero-left">
    <div class="badge-live">
      <span class="badge-dot"></span>
      Présentiel Rhône · Distanciel France et francophonie
    </div>
    <h1 id="chat-h1">
      Comportementaliste<br><em>chat</em><br>à Lyon &amp; en visio
    </h1>
    <p class="sub">
      Votre chat urine partout, griffe, se bat ou s'est isolé ? Il ne fait pas de bêtises — il communique. Je vous aide à déchiffrer son langage félin et à retrouver l'harmonie à la maison, souvent plus facilement en visio.
    </p>
    <div class="hero-proof" style="margin-bottom:32px">
      <span class="proof-stars">★★★★★</span>
      <span class="proof-text">4,9/5 · Spécialiste félin</span>
    </div>
    <div class="hero-actions">
      <a href="/prendre-rendez-vous" class="btn-main">📅 Je prends RDV pour mon chat</a>
      <a href="#avantages-distanciel" class="btn-ghost">Pourquoi la visio pour le chat →</a>
    </div>
  </div>
  <div class="service-hero-right" aria-hidden="true">🐈</div>
</header>

<!-- PROBLÉMATIQUES -->
<section class="prob-section" aria-labelledby="prob-chat-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Problèmes traités</div>
    <h2 class="section-title" id="prob-chat-title">Les problématiques<br>que je traite — chat</h2>
    <p class="section-sub">Le chat est un animal complexe, souvent incompris. Chaque comportement « problématique » est une tentative de communication. Apprenons à l'écouter.</p>
    <div class="prob-grid">
      <div class="prob-card">
        <span class="prob-card-icon">💧</span>
        <h3 class="prob-card-title">Éliminations hors litière</h3>
        <p class="prob-card-text">Urine sur le canapé, les vêtements ou le lit — c'est la problématique féline la plus fréquente. Elle a toujours une cause : stress, douleur, territoire, litière inadaptée. On la trouve.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🪑</span>
        <h3 class="prob-card-title">Griffades excessives</h3>
        <p class="prob-card-text">Canapé, moquette, parquet — les griffades sont un besoin naturel. Mais quand elles deviennent un problème, c'est souvent que l'environnement ne répond pas aux besoins du chat.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">😨</span>
        <h3 class="prob-card-title">Peur &amp; isolement</h3>
        <p class="prob-card-text">Chat inaccessible, caché en permanence, réactif au moindre bruit — la peur féline chronique est traitée via des protocoles de désensibilisation progressifs et respectueux.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">⚔️</span>
        <h3 class="prob-card-title">Cohabitation difficile</h3>
        <p class="prob-card-text">Introduction d'un nouveau chat ou d'un chien qui tourne mal, bagarres, compétition pour les ressources — je vous accompagne dans l'introduction et la gestion des conflits félins.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🤐</span>
        <h3 class="prob-card-title">Agressivité envers les humains</h3>
        <p class="prob-card-text">Griffures lors des caresses, morsures sans prévenir, redirections d'agression — le chat qui « griffe sans raison » envoie des signaux que nous n'avons pas appris à lire. Apprenons ensemble.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">⌚</span>
        <h3 class="prob-card-title">Comportements nocturnes</h3>
        <p class="prob-card-text">Miaulements la nuit, hyperactivité nocturne, réveils répétés — ces troubles ont souvent une origine comportementale ou médicale. Un bilan permet d'en identifier la cause précise.</p>
      </div>
    </div>
  </div>
</section>

<!-- AVANTAGES DISTANCIEL CHAT -->
<section id="avantages-distanciel" style="background:var(--cream-warm);padding:88px 52px" aria-labelledby="dist-cat-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag">Consultation visio</div>
    <h2 class="section-title" id="dist-cat-title">Pourquoi la visio<br>est souvent préférable<br>pour le chat</h2>
    <p class="section-sub">Le chat est un animal territorial très sensible aux modifications de son environnement. Une visite à domicile peut le stresser davantage.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:40px">
      <div style="background:white;border-radius:16px;padding:28px">
        <span style="font-size:28px;display:block;margin-bottom:12px">🏠</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:10px">Dans son environnement habituel</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Votre chat est chez lui, dans son territoire sécurisé. Pas de stress lié à la présence d'un inconnu. Il se comporte normalement, ce qui me permet d'observer des comportements authentiques.</p>
      </div>
      <div style="background:white;border-radius:16px;padding:28px">
        <span style="font-size:28px;display:block;margin-bottom:12px">📍</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:10px">Observation de l'environnement réel</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Je vous guide pour filmer les zones clés (litières, griffoirs, zones de repos, zones de tension). L'analyse de l'espace de vie est souvent révélatrice des causes comportementales.</p>
      </div>
      <div style="background:white;border-radius:16px;padding:28px">
        <span style="font-size:28px;display:block;margin-bottom:12px">⚡</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:10px">Résultats dans 48h — cas réel</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">« Mon chat urinait partout depuis des mois. En visio, on a identifié la cause en 45 min. Deux semaines plus tard, problème résolu. » — Claire D., Bordeaux</p>
      </div>
      <div style="background:white;border-radius:16px;padding:28px">
        <span style="font-size:28px;display:block;margin-bottom:12px">🇫🇷</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:10px">Partout en France &amp; francophonie</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">France, Belgique, Suisse, Québec — votre localisation n'est jamais un obstacle. De nombreux clients sont soulagés de ne pas avoir à transporter leur chat dans une cage chez un professionnel.</p>
      </div>
    </div>
  </div>
</section>

<!-- DÉROULEMENT -->
<section class="how-section" aria-labelledby="how-cat-title">
  <div class="how-header">
    <div class="label-tag" style="justify-content:center">Déroulement</div>
    <h2 class="section-title" id="how-cat-title" style="text-align:center">Votre consultation<br>féline en 4 étapes</h2>
    <p class="section-sub" style="text-align:center;margin:0 auto">Présentiel à domicile dans le Rhône ou distanciel par visio — adaptée à votre chat et à votre situation.</p>
  </div>
  <div class="steps-grid">
    <div class="step">
      <div class="step-num">1</div>
      <h3 class="step-title">Contact &amp; échange</h3>
      <p class="step-desc">Décrivez la situation. Je vous conseille dès ce premier échange sur le mode de consultation le mieux adapté à votre chat (visio souvent recommandée).</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <h3 class="step-title">Bilan félin complet</h3>
      <p class="step-desc">1h30 à 2h d'échanges approfondis. Anamnèse complète : historique, environnement, interactions, ressources, alimentation. Rien n'est laissé de côté.</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <h3 class="step-title">Plan d'action sur-mesure</h3>
      <p class="step-desc">Protocole personnalisé (modification environnementale, enrichissement, protocoles de désensibilisation) + compte-rendu écrit sous 48h.</p>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <h3 class="step-title">Suivi 30 jours inclus</h3>
      <p class="step-desc">Questions en cours d'application du protocole ? Je réponds par messages pendant 30 jours. L'accompagnement ne s'arrête pas à la fin de la séance.</p>
    </div>
  </div>
  <div class="how-reassurance">
    <div class="reassure-item">✓ Sans contrainte ni stress</div>
    <div class="reassure-item">✓ Protocoles scientifiquement validés</div>
    <div class="reassure-item">✓ Résultats durables</div>
    <div class="reassure-item">✓ Votre rythme respecté</div>
  </div>
</section>

<!-- TARIFS -->
<section class="tarifs-section" aria-labelledby="tarifs-chat-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Tarifs</div>
    <h2 class="section-title" id="tarifs-chat-title">Tarifs &amp; durée — chat</h2>
    <p class="section-sub">Transparence totale. Suivi 30 jours et compte-rendu toujours inclus.</p>
    <div class="tarifs-grid">
      <div class="tarif-card featured">
        <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700">Consultation distanciel ⭐</h3>
        <div class="tarif-price-big">Sur devis</div>
        <p class="tarif-duration">⏱ 1h30 à 2h · Visio (recommandé)</p>
        <ul class="tarif-includes">
          <li>Observation environnement réel</li>
          <li>Bilan comportemental complet</li>
          <li>Protocole personnalisé</li>
          <li>Compte-rendu écrit (48h)</li>
          <li>Suivi 30 jours par messages</li>
        </ul>
      </div>
      <div class="tarif-card">
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
  </div>
</section>

<!-- TÉMOIGNAGES -->
<section class="testi-section" aria-labelledby="testi-cat-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="testi-header">
      <div>
        <div class="label-tag">Témoignages</div>
        <h2 class="section-title" id="testi-cat-title">Ce qu'ils disent<br>après leur consultation chat</h2>
      </div>
    </div>
    <div class="testi-grid">
      <div class="testi-card star" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-cat">Chat</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Mon chat urinait partout depuis des mois. En visio, on a identifié la cause en 45 min. Deux semaines plus tard, problème résolu. C'est bluffant.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Claire D.</div>
            <div class="testi-loc">Bordeaux · Distanciel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-cat">Chat</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Deux chats qui se battaient depuis l'introduction. CANIFELINK m'a accompagnée sur toute la réintroduction. Aujourd'hui ils dorment ensemble. Je n'y croyais plus.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Élodie T.</div>
            <div class="testi-loc">Lyon 7e · Présentiel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-cat">Chat</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Mon chat était complètement inaccessible depuis 2 ans. Protocole de désensibilisation progressive. 6 semaines plus tard, il vient chercher les caresses. Incroyable.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Pierre-Antoine L.</div>
            <div class="testi-loc">Nantes · Distanciel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section" aria-labelledby="faq-cat-title">
  <div class="faq-inner" style="max-width:1000px;margin:0 auto;padding:0 52px">
    <div>
      <div class="label-tag">FAQ félin</div>
      <h2 class="section-title" id="faq-cat-title">Vos questions<br>sur le comportementaliste chat</h2>
      <div class="faq-list" role="list">

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Pourquoi la visio est-elle souvent recommandée pour le chat ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Le chat est un animal extrêmement territorial. La présence d'un inconnu chez lui peut le stresser et fausser ses comportements habituels. En visio, il reste dans son environnement sécurisé et se comporte naturellement. De plus, je peux observer son espace de vie (litières, griffoirs, zones de conflit) en vous demandant de filmer ce dont j'ai besoin.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Mon chat doit-il avoir consulté un vétérinaire avant ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">C'est fortement recommandé. De nombreux comportements problématiques chez le chat ont une cause médicale sous-jacente (infections urinaires pour les éliminations, douleur articulaire pour l'agressivité). Je vous demanderai si un bilan vétérinaire récent a été effectué, et pourrai vous orienter si besoin.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Peut-on traiter la cohabitation chat-chien ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui, absolument. La gestion d'une cohabitation chat-chien difficile est l'une de mes spécialités. Je vous propose un protocole d'introduction ou de réintroduction progressif, adapté aux deux espèces, avec des étapes très claires pour avancer sans forcer.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Est-ce que vous traitez les chats très vieux ou avec des problèmes de mémoire ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui. Un chat âgé avec des changements comportementaux mérite une attention particulière — beaucoup de ces changements sont liés à des troubles médicaux (dysfonction cognitive féline) que le vétérinaire peut traiter. Je travaille en coordination avec votre équipe vétérinaire.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            En combien de séances verra-t-on des résultats ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Pour les problèmes courants (éliminations, griffades, peurs légères), les premiers résultats apparaissent souvent en 1 à 3 semaines avec le protocole. Les situations complexes (traumatismes, cohabitations difficiles) demandent plus de temps. Je fixe des objectifs réalistes dès la première séance.</div>
        </div>

      </div>
    </div>

    <div class="faq-cta-box">
      <h3>Votre chat vous parle.</h3>
      <p>Apprenons ensemble à l'écouter — réponse sous 24h, consultation visio possible partout en France.</p>
      <ul>
        <li>Réponse garantie sous 24h</li>
        <li>Premier échange gratuit</li>
        <li>Suivi 30 jours inclus</li>
        <li>Compte-rendu écrit fourni</li>
        <li>Sans engagement</li>
      </ul>
      <a href="/prendre-rendez-vous" class="btn-white">📅 Je prends RDV pour mon chat</a>
      <a href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20chat" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">💬 WhatsApp</a>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-final" aria-labelledby="cta-chat-title">
  <div class="cta-final-inner">
    <h2 id="cta-chat-title">Votre chat a quelque chose<br>à vous dire</h2>
    <p>Comportementaliste félin certifiée à Lyon et en visio partout en France — méthodes 100% bienveillantes, résultats durables.</p>
    <div class="cta-final-btns">
      <a href="/prendre-rendez-vous" class="btn-cta-white">📅 Je prends rendez-vous</a>
      <a href="/comportementaliste-chien-rhone" class="btn-cta-ghost">Aussi spécialiste chien →</a>
    </div>
    <p class="cta-guarantee">✓ Visio recommandée pour les chats · Suivi 30 jours inclus</p>
  </div>
</section>
`;

export default function ChatPage() {
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
