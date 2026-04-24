"use client";

import { useEffect } from "react";



const PAGE_HTML = `
<!-- HERO -->
<header class="service-hero horse-hero" role="banner" aria-labelledby="cheval-h1">
  <div class="service-hero-left">
    <div class="badge-live" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.25)">
      <span class="badge-dot"></span>
      Niche rare · Rhône &amp; Auvergne-Rhône-Alpes · Distanciel
    </div>
    <h1 id="cheval-h1">
      Comportementaliste<br><em>cheval</em><br>en Rhône-Alpes
    </h1>
    <p class="sub">
      Votre cheval refuse, est craintif, devient dangereux ou la relation avec lui s'est dégradée ? L'éthologie équine permet de comprendre son langage profond et de reconstruire la confiance — sans méthodes coercitives, sans forcer.
    </p>
    <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:50px;padding:8px 16px;margin-bottom:32px">
      <span style="color:#D4A843;font-size:13px">⭐</span>
      <span style="font-size:13px;color:rgba(255,255,255,.85);font-weight:500">Service rare en France — l'une des seules comportementalistes 3 espèces</span>
    </div>
    <div class="hero-actions">
      <a href="/prendre-rendez-vous" class="btn-main">📅 Je prends RDV pour mon cheval</a>
      <a href="#approche-equine" class="btn-ghost">L'approche éthologique →</a>
    </div>
  </div>
  <div class="service-hero-right" aria-hidden="true">🐴</div>
</header>

<!-- BADGE NICHE -->
<div style="background:var(--gold);padding:20px 52px;text-align:center">
  <p style="font-family:'Playfair Display',serif;font-size:16px;color:white;font-weight:700">
    🌟 Service rare — très peu de comportementalistes proposent les 3 espèces en France. Pour votre cheval, cette expertise est précieuse.
  </p>
</div>

<!-- PROBLÉMATIQUES -->
<section class="prob-section" aria-labelledby="prob-horse-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Problèmes traités</div>
    <h2 class="section-title" id="prob-horse-title">Les problématiques<br>que je traite — cheval</h2>
    <p class="section-sub">Le cheval communique constamment — avec son corps, ses oreilles, ses postures. Apprendre à le lire est le premier pas vers une relation harmonieuse et sécurisée.</p>
    <div class="prob-grid">
      <div class="prob-card">
        <span class="prob-card-icon">😤</span>
        <h3 class="prob-card-title">Refus &amp; résistances</h3>
        <p class="prob-card-text">Refus de la ferrure, du vétérinaire, du licol, de monter dans le van — ces refus ont une histoire et une cause. On les comprend avant de vouloir les corriger.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">😟</span>
        <h3 class="prob-card-title">Peur &amp; huppe</h3>
        <p class="prob-card-text">Cheval hypervigileant, emballé, peureux, qui ne peut pas se déconnecter — la peur chronique chez le cheval est épuisante pour lui et dangereuse pour vous. Elle se travaille.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">⚡</span>
        <h3 class="prob-card-title">Agressivité</h3>
        <p class="prob-card-text">Morsures à l'abord, ruades dans le box, menaces envers les humains ou les autres chevaux — l'agressivité équine signale toujours une souffrance ou un manque de sécurité ressenti.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🤝</span>
        <h3 class="prob-card-title">Relation cavalier-cheval</h3>
        <p class="prob-card-text">Perte de confiance mutuelle, cheval qui ne cherche pas le contact, relation froide ou conflictuelle — reconstruire ce lien est possible, quel que soit l'historique.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">😞</span>
        <h3 class="prob-card-title">Stéréotypies &amp; vices</h3>
        <p class="prob-card-text">Tic à l'appui, weaving, marcher en cercle, déforestation de la stalle — ces comportements indiquent un mal-être profond dont il faut traiter la cause, pas le symptôme.</p>
      </div>
      <div class="prob-card">
        <span class="prob-card-icon">🌱</span>
        <h3 class="prob-card-title">Bien-être &amp; intégration</h3>
        <p class="prob-card-text">Nouveau cheval en écurie, socialisation difficile, problèmes liés aux conditions de vie (stabulation, isolement) — l'éthologie équine permet d'optimiser l'environnement pour le bien-être.</p>
      </div>
    </div>
  </div>
</section>

<!-- APPROCHE ÉTHOLOGIQUE -->
<section id="approche-equine" style="background:var(--cream-warm);padding:88px 52px" aria-labelledby="ethologie-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag">L'éthologie équine</div>
    <h2 class="section-title" id="ethologie-title">L'approche éthologique équine :<br>comprendre avant d'agir</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;margin-top:40px">
      <div>
        <p style="font-size:16px;color:var(--ink-mid);line-height:1.8;margin-bottom:20px">
          L'éthologie équine étudie le comportement du cheval dans son environnement naturel — ses modes de communication, sa structure sociale, ses besoins fondamentaux — pour mieux comprendre ce qu'il exprime dans son quotidien avec l'humain.
        </p>
        <blockquote class="about-quote">
          « Le cheval ne manipule pas, il ne "fait pas exprès". Il réagit à son histoire, à son environnement, à ce qu'il ressent. Mon rôle est de vous aider à le comprendre — et à répondre à ses besoins plutôt qu'à contraindre son expression. »
        </blockquote>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:24px">
          <div style="display:flex;gap:12px;align-items:flex-start;background:white;padding:14px 18px;border-radius:12px">
            <span style="color:var(--teal);font-weight:700;flex-shrink:0">🌿</span>
            <div>
              <strong style="display:block;font-size:14px">Sans coercition</strong>
              <span style="font-size:13px;color:var(--ink-soft)">Aucune méthode de force ou de dominance. Respect total du cheval.</span>
            </div>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;background:white;padding:14px 18px;border-radius:12px">
            <span style="color:var(--teal);font-weight:700;flex-shrink:0">🔬</span>
            <div>
              <strong style="display:block;font-size:14px">Basée sur les sciences</strong>
              <span style="font-size:13px;color:var(--ink-soft)">Éthologie, étiologie, learning theory appliquées à l'équin.</span>
            </div>
          </div>
          <div style="display:flex;gap:12px;align-items:flex-start;background:white;padding:14px 18px;border-radius:12px">
            <span style="color:var(--teal);font-weight:700;flex-shrink:0">🤝</span>
            <div>
              <strong style="display:block;font-size:14px">Centrée sur le binôme</strong>
              <span style="font-size:13px;color:var(--ink-soft)">Je travaille avec vous ET votre cheval. La relation est au cœur.</span>
            </div>
          </div>
        </div>
      </div>
      <div style="background:var(--teal);border-radius:20px;padding:36px;color:white">
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;margin-bottom:20px">Qui est concerné ?</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;gap:10px"><span>🏇</span><span style="font-size:14px;color:rgba(255,255,255,.85)">Cavaliers de loisir avec un cheval difficile</span></div>
          <div style="display:flex;gap:10px"><span>🌱</span><span style="font-size:14px;color:rgba(255,255,255,.85)">Propriétaires d'un premier cheval</span></div>
          <div style="display:flex;gap:10px"><span>🏠</span><span style="font-size:14px;color:rgba(255,255,255,.85)">Gérants d'écuries ou de centres équestres</span></div>
          <div style="display:flex;gap:10px"><span>🌿</span><span style="font-size:14px;color:rgba(255,255,255,.85)">Propriétaires en retraite / pré</span></div>
          <div style="display:flex;gap:10px"><span>💊</span><span style="font-size:14px;color:rgba(255,255,255,.85)">En complément d'un suivi vétérinaire</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ZONE D'INTERVENTION -->
<section style="background:white;padding:88px 52px" aria-labelledby="zone-horse-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag">Zone d'intervention</div>
    <h2 class="section-title" id="zone-horse-title">Rhône &amp; Auvergne-Rhône-Alpes<br>+ distanciel monde francophone</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:40px">
      <div style="background:var(--cream);border-radius:16px;padding:28px;border-left:4px solid var(--teal)">
        <span style="font-size:28px;display:block;margin-bottom:12px">🏔️</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:18px;font-weight:700;margin-bottom:10px">Présentiel — Rhône-Alpes</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Déplacement dans le Rhône (69) et les départements limitrophes (Ain, Isère, Loire, Saône-et-Loire). Je viens à l'écurie ou au pré — là où se trouvent votre cheval et son contexte de vie.</p>
      </div>
      <div style="background:var(--cream);border-radius:16px;padding:28px;border-left:4px solid var(--gold)">
        <span style="font-size:28px;display:block;margin-bottom:12px">💻</span>
        <h3 style="font-family:'Playfair Display',serif;font-size:18px;font-weight:700;margin-bottom:10px">Distanciel — Partout en France</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Consultation par visio pour toute la France et la francophonie. Vous filmez votre cheval et son environnement. Idéal pour un premier bilan ou un suivi de protocole.</p>
      </div>
    </div>
  </div>
</section>

<!-- TARIFS -->
<section class="tarifs-section" aria-labelledby="tarifs-horse-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="label-tag">Tarifs</div>
    <h2 class="section-title" id="tarifs-horse-title">Tarifs &amp; modalités — cheval</h2>
    <p class="section-sub">La consultation équine est un service premium et rare. Transparence totale, devis sur demande.</p>
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
        <p class="tarif-duration">⏱ 1h30 à 2h+ · À l'écurie Rhône-Alpes</p>
        <ul class="tarif-includes">
          <li>Observation du cheval en contexte</li>
          <li>Analyse de l'environnement &amp; conditions</li>
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
<section class="testi-section" aria-labelledby="testi-horse-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="testi-header">
      <div>
        <div class="label-tag">Témoignages</div>
        <h2 class="section-title" id="testi-horse-title">Ce qu'ils disent<br>après leur consultation cheval</h2>
      </div>
    </div>
    <div class="testi-grid">
      <div class="testi-card star" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-horse">Cheval</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Je cherchais quelqu'un qui comprenne vraiment l'éthologie équine. CANIFELINK, c'est une approche totalement différente de l'équitation classique. Ma jument est transformée.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Aurélie F.</div>
            <div class="testi-loc">Ain · Distanciel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-horse">Cheval</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Mon hongre refusait le maréchal-ferrant depuis 3 ans. En deux séances de travail progressif avec le protocole, on est arrivé à la ferrure sans incident. Honnêtement je n'y croyais plus.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Guillaume P.</div>
            <div class="testi-loc">Isère · Présentiel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card" itemscope itemtype="https://schema.org/Review">
        <span class="sp-pill pill-horse">Cheval</span>
        <span class="quote-mark">"</span>
        <p class="testi-text" itemprop="reviewBody">Mon cheval avait des stéréotypies sévères que personne ne prenait au sérieux. CANIFELINK a travaillé sur les causes profondes et les conditions de vie. 4 mois plus tard, les comportements ont diminué de 80%.</p>
        <div class="testi-bot">
          <div>
            <div class="testi-name" itemprop="author">Camille R.</div>
            <div class="testi-loc">Loire · Présentiel</div>
          </div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section" aria-labelledby="faq-horse-title">
  <div class="faq-inner" style="max-width:1000px;margin:0 auto;padding:0 52px">
    <div>
      <div class="label-tag">FAQ équine</div>
      <h2 class="section-title" id="faq-horse-title">Vos questions sur<br>le comportementaliste cheval</h2>
      <div class="faq-list" role="list">

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Quelle différence avec un moniteur d'équitation ou un dresseur ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Le moniteur enseigne des techniques d'équitation. Le comportementaliste équin analyse les causes comportementales des problèmes observés — peur, douleur, mauvaise association, manque de sécurité ressenti. Mon approche est éthologique et non coercitive : je cherche à comprendre le cheval pour mieux lui répondre.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Faut-il avoir éliminé une cause médicale avant ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui, absolument. Un cheval qui refuse ou devient agressif peut avoir une cause médicale (douleur, boiterie, problème de dos, inconfort du matériel). Je vous demanderai toujours si votre vétérinaire et un ostéopathe équin ont été consultés récemment. Je travaille en complémentarité.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Est-ce que vous travaillez avec tous les types de chevaux ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui — chevaux de sport, de loisir, de trait, poneys, ânes et mulets en pension ou au pré. Mon approche s'adapte à chaque animal et à chaque contexte de vie. Je travaille aussi bien avec des propriétaires que des gérants d'écuries ou des centres équestres.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Les stéréotypies peuvent-elles vraiment s'améliorer ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Les stéréotypies établies ne « disparaissent » jamais totalement, mais leur fréquence peut diminuer significativement en améliorant les conditions de vie et en traitant les causes de stress. Un cheval qui exprime moins de stéréotypies souffre moins — et c'est l'objectif visé.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            La consultation en visio est-elle adaptée pour le cheval ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Oui, en particulier pour les bilans comportementaux, les suivis de protocole et les situations où le déplacement n'est pas possible. Vous filmez votre cheval dans son environnement quotidien, à l'écurie, au pré, pendant les manipulations. Je guide votre observation en temps réel.</div>
        </div>

      </div>
    </div>

    <div class="faq-cta-box">
      <h3>Service rare, résultats réels</h3>
      <p>L'une des seules comportementalistes 3 espèces en France — réponse sous 24h pour votre cheval.</p>
      <ul>
        <li>Éthologie équine certifiée</li>
        <li>Sans coercition ni force</li>
        <li>Suivi 30 jours inclus</li>
        <li>Compte-rendu écrit fourni</li>
        <li>Rhône-Alpes + distanciel</li>
      </ul>
      <a href="/prendre-rendez-vous" class="btn-white">📅 Je prends RDV pour mon cheval</a>
      <a href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20cheval" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">💬 WhatsApp</a>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-final" aria-labelledby="cta-horse-title">
  <div class="cta-final-inner">
    <h2 id="cta-horse-title">Votre cheval mérite<br>d'être entendu</h2>
    <p>Comportementaliste équine certifiée à Lyon (Rhône) et en visio — l'une des rares en France à maîtriser les 3 espèces.</p>
    <div class="cta-final-btns">
      <a href="/prendre-rendez-vous" class="btn-cta-white">📅 Je prends rendez-vous</a>
      <a href="/a-propos" class="btn-cta-ghost">Découvrir mon parcours →</a>
    </div>
    <p class="cta-guarantee">✓ Éthologie équine · Sans coercition · Suivi 30 jours inclus</p>
  </div>
</section>
`;

export default function ChevalPage() {
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
