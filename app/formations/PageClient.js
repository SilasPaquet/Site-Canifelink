"use client";

import { useEffect } from "react";



const PAGE_HTML = `
<!-- HERO -->
<header class="formation-hero" role="banner" aria-labelledby="formation-h1">
  <div>
    <div class="badge-live">
      <span class="badge-dot"></span>
      En ligne &amp; présentiel · Chien, Chat, Cheval
    </div>
    <h1 id="formation-h1">
      Formations<br><em>comportement animal</em><br>pour tous les niveaux
    </h1>
    <p style="font-size:17px;color:rgba(255,255,255,.75);max-width:480px;line-height:1.75;margin-bottom:32px">
      Particuliers passionnés ou professionnels de l'animal — comprendre le comportement de votre animal change tout. Transformez votre regard sur vos compagnons.
    </p>
    <div class="hero-actions">
      <a href="#catalogue" class="btn-main">Voir le catalogue →</a>
      <a href="#professionnels" class="btn-ghost" style="border-color:rgba(255,255,255,.35)">Formation pro B2B →</a>
    </div>
  </div>
  <div style="font-size:110px;text-align:center;opacity:.9;filter:drop-shadow(0 20px 40px rgba(0,0,0,.3))">🎓</div>
</header>

<!-- 2 CIBLES -->
<div style="background:var(--teal-deep);padding:0">
  <div style="display:grid;grid-template-columns:1fr 1fr;max-width:1100px;margin:0 auto">
    <a id="particuliers" href="#catalogue" style="padding:48px 52px;text-decoration:none;border-right:1px solid rgba(255,255,255,.08);scroll-margin-top:80px;display:block">
      <div style="font-size:36px;margin-bottom:16px">🐾</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:white;margin-bottom:10px">Vous êtes particulier</h2>
      <p style="font-size:14px;color:rgba(255,255,255,.6);line-height:1.7">Comprenez votre chien, chat ou cheval, repérez les signes de bien-être ou de mal-être, améliorez votre quotidien et prévenez les problèmes comportementaux.</p>
    </a>
    <a id="professionnels" href="#pro-catalog" style="padding:48px 52px;text-decoration:none;scroll-margin-top:80px;display:block">
      <div style="font-size:36px;margin-bottom:16px">🏥</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:white;margin-bottom:10px">Vous êtes professionnel</h2>
      <p style="font-size:14px;color:rgba(255,255,255,.6);line-height:1.7">Vétérinaires, équipes de refuge, éleveurs, toiletteurs, dog-sitters — montez en compétences sur la lecture comportementale pour mieux accompagner les animaux dont vous avez la chargeе.</p>
    </a>
  </div>
</div>

<!-- CATALOGUE PARTICULIERS -->
<section id="catalogue" class="formation-catalog" aria-labelledby="cat-part-title" style="padding:88px 52px;scroll-margin-top:80px">
  <div style="max-width:1000px;margin:0 auto">
    <div class="label-tag">Pour les particuliers</div>
    <h2 class="section-title" id="cat-part-title">Catalogue des formations<br>particuliers</h2>
    <p class="section-sub">Formations accessibles à tous, sans prérequis. En ligne à votre rythme ou en présentiel à Lyon.</p>
    <div class="formation-cat-grid">

      <div class="formation-item">
        <span class="formation-badge badge-online">🖥 En ligne</span>
        <div>
          <h3 class="formation-item-title">Comprendre son chien en 5 modules</h3>
          <p class="formation-item-meta">🐕 5h de contenu · Tous niveaux · Accès à vie</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Décodez le langage corporel de votre chien, comprenez ses besoins fondamentaux et apprenez à reconnaître les signaux d'inconfort. Programme pratique et immédiatement applicable.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price">149 €</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">S'inscrire →</a>
        </div>
      </div>

      <div class="formation-item">
        <span class="formation-badge badge-online">🖥 En ligne + live</span>
        <div>
          <h3 class="formation-item-title">Communication féline — bases &amp; avancé</h3>
          <p class="formation-item-meta">🐈 8h · Modules + session live · Tous niveaux</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Comprenez la communication féline, lisez les postures et les expressions, gérez les conflits inter-chats et créez un environnement enrichissant adapté aux besoins du félin.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price">199 €</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">S'inscrire →</a>
        </div>
      </div>

      <div class="formation-item">
        <span class="formation-badge badge-presentiel">📍 Présentiel</span>
        <div>
          <h3 class="formation-item-title">Éthologie équine appliquée</h3>
          <p class="formation-item-meta">🐴 Journée complète · Écurie Rhône · Cavaliers</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Découvrez le comportement naturel du cheval, apprenez à lire ses signaux corporels, comprenez comment il apprend et comment créer une relation de confiance basée sur le respect mutuel.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price">280 €</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">S'inscrire →</a>
        </div>
      </div>

      <div class="formation-item">
        <span class="formation-badge badge-online">🖥 En ligne</span>
        <div>
          <h3 class="formation-item-title">Bien-être animal — guide pratique</h3>
          <p class="formation-item-meta">🐾 3h · Chien &amp; Chat · Débutants</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Formation introductive sur les 5 libertés, les besoins fondamentaux des animaux de compagnie et comment évaluer et améliorer leur qualité de vie au quotidien.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price">79 €</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">S'inscrire →</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CATALOGUE PROFESSIONNELS -->
<section id="pro-catalog" style="background:var(--cream-warm);padding:88px 52px;scroll-margin-top:80px" aria-labelledby="cat-pro-title">
  <div style="max-width:1000px;margin:0 auto">
    <div class="label-tag">Pour les professionnels</div>
    <h2 class="section-title" id="cat-pro-title">Formations B2B<br>pour les professionnels de l'animal</h2>
    <p class="section-sub">Vétérinaires, équipes de refuge, éleveurs, toiletteurs, dog-sitters, gardes d'animaux — montez en compétences sur la lecture et la gestion comportementale.</p>
    <div class="formation-cat-grid">

      <div class="formation-item" style="background:var(--gold-light);border-color:var(--gold)">
        <span class="formation-badge badge-pro">🏥 Intra-entreprise</span>
        <div>
          <h3 class="formation-item-title">Formation Pro Refuge &amp; Associations</h3>
          <p class="formation-item-meta">🐾 Sur-mesure · Présentiel ou visio · Groupe</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Gestion du stress des animaux en shelter, évaluation comportementale à l'adoption, détection des troubles, protocoles d'enrichissement — adapté à vos réalités terrain.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price" style="color:var(--gold)">Sur devis</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">Demander un devis →</a>
        </div>
      </div>

      <div class="formation-item" style="background:var(--gold-light);border-color:var(--gold)">
        <span class="formation-badge badge-pro">🩺 Cliniques vétérinaires</span>
        <div>
          <h3 class="formation-item-title">Formation Équipe Vétérinaire</h3>
          <p class="formation-item-meta">🐾 Sur-mesure · Intra-clinique · Demi-journée ou journée</p>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Gestion des animaux anxieux en consultation, communication client sur les problèmes comportementaux, protocoles de manipulation sans stress — pour améliorer l'expérience patient et équipe.</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div class="formation-item-price" style="color:var(--gold)">Sur devis</div>
          <a href="/prendre-rendez-vous" class="btn-teal" style="margin-top:0;padding:10px 20px;font-size:13px">Demander un devis →</a>
        </div>
      </div>

    </div>
    <div style="background:white;border-radius:16px;padding:32px;margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center">
      <div>
        <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:10px">Vous êtes professionnel ?</h3>
        <p style="font-size:14px;color:var(--ink-mid);line-height:1.7">Les formations B2B sont 100% personnalisées à votre structure, votre équipe et vos besoins spécifiques. Prenons 20 minutes pour définir ensemble le format adapté.</p>
      </div>
      <div style="text-align:center">
        <a href="/prendre-rendez-vous" class="btn-teal">Demander un devis →</a>
      </div>
    </div>
  </div>
</section>

<!-- TÉMOIGNAGES STAGIAIRES -->
<section class="testi-section" aria-labelledby="testi-form-title">
  <div style="max-width:900px;margin:0 auto;padding:0 52px">
    <div class="testi-header">
      <div>
        <div class="label-tag">Témoignages</div>
        <h2 class="section-title" id="testi-form-title">Ce que disent<br>nos stagiaires</h2>
      </div>
    </div>
    <div class="testi-grid">
      <div class="testi-card star">
        <span class="sp-pill pill-dog">Formation chien</span>
        <span class="quote-mark">"</span>
        <p class="testi-text">La formation en ligne sur le chien est dense, pratique et surtout immédiatement applicable. J'ai appris plus en 5h qu'en 5 ans de tutoriels YouTube. Je comprends enfin MON chien.</p>
        <div class="testi-bot">
          <div><div class="testi-name">Laurène M.</div><div class="testi-loc">Formation chien en ligne</div></div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card">
        <span class="sp-pill pill-horse">Formation cheval</span>
        <span class="quote-mark">"</span>
        <p class="testi-text">La journée éthologie équine a changé ma façon de voir mon cheval. Ce n'est pas une formatrice qui enseigne la technique, c'est quelqu'un qui vous apprend à penser comme un cheval.</p>
        <div class="testi-bot">
          <div><div class="testi-name">Romain D.</div><div class="testi-loc">Formation équine présentiel</div></div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
      <div class="testi-card">
        <span class="sp-pill" style="background:var(--gold-light);color:#8B6A00">Formation pro</span>
        <span class="quote-mark">"</span>
        <p class="testi-text">Formation intra pour notre équipe de refuge. Le contenu est adapté à nos réalités (animaux traumatisés, flux important). Notre taux d'adoption a augmenté depuis qu'on applique ces protocoles.</p>
        <div class="testi-bot">
          <div><div class="testi-name">Association animaux Rhône</div><div class="testi-loc">Formation refuge — intra-entreprise</div></div>
          <div class="testi-stars">★★★★★</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CERTIFICATIONS & GARANTIES -->
<section style="background:var(--teal-deep);padding:88px 52px">
  <div style="max-width:900px;margin:0 auto;text-align:center">
    <div class="label-tag" style="color:rgba(255,255,255,.4);justify-content:center"><span style="background:rgba(255,255,255,.3)"></span>Garanties pédagogiques</div>
    <h2 class="section-title" style="color:white;text-align:center">Ce que vous êtes<br>en droit d'attendre</h2>
    <div class="diff-grid" style="margin-top:48px">
      <div class="diff-card">
        <span class="diff-icon">🎓</span>
        <h3 class="diff-title">Contenus validés</h3>
        <p class="diff-text">Programmes basés sur les sciences du comportement animal — éthologie, étiologie, théories de l'apprentissage. Mis à jour régulièrement.</p>
      </div>
      <div class="diff-card">
        <span class="diff-icon">🔬</span>
        <h3 class="diff-title">Approche scientifique</h3>
        <p class="diff-text">Pas de méthodes fantaisistes ou de pseudoscience. Tout est ancré dans des données vérifiables et des pratiques reconnues.</p>
      </div>
      <div class="diff-card">
        <span class="diff-icon">🤝</span>
        <h3 class="diff-title">Support inclus</h3>
        <p class="diff-text">Questions après la formation ? Je réponds. L'accompagnement ne s'arrête pas à la dernière vidéo ou à la fin de la journée.</p>
      </div>
      <div class="diff-card">
        <span class="diff-icon">💼</span>
        <h3 class="diff-title">Devis pro personnalisé</h3>
        <p class="diff-text">Chaque formation B2B est construite sur-mesure à partir de vos besoins réels. Pas de contenu générique recyclé.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROCESSUS INSCRIPTION -->
<section style="background:var(--cream-warm);padding:88px 52px" aria-labelledby="inscription-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag" style="justify-content:center">Comment s'inscrire</div>
    <h2 class="section-title" id="inscription-title" style="text-align:center">3 étapes simples<br>pour démarrer</h2>
    <div class="inscription-steps">
      <div class="inscription-step">
        <div class="inscription-step-num">1</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:8px">Choisissez votre formation</h3>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Particulier ou professionnel, chien, chat ou cheval — identifiez la formation qui correspond à vos besoins dans le catalogue ci-dessus.</p>
      </div>
      <div class="inscription-step">
        <div class="inscription-step-num">2</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:8px">Envoyez votre demande</h3>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Via le formulaire de contact ou WhatsApp — précisez la formation souhaitée et votre contexte. Je vous reviens sous 24h avec les informations d'inscription.</p>
      </div>
      <div class="inscription-step">
        <div class="inscription-step-num">3</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;margin-bottom:8px">Commencez à apprendre</h3>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.65">Accès immédiat pour les formations en ligne, date confirmée pour le présentiel. Vous avez tout le support nécessaire pour progresser.</p>
      </div>
    </div>
    <div style="text-align:center;margin-top:48px">
      <a href="/prendre-rendez-vous" class="btn-teal">Je m'inscris ou demande un devis →</a>
    </div>
  </div>
</section>

<!-- FAQ FORMATIONS -->
<section class="faq-section" aria-labelledby="faq-form-title">
  <div class="faq-inner" style="max-width:1000px;margin:0 auto;padding:0 52px">
    <div>
      <div class="label-tag">FAQ Formations</div>
      <h2 class="section-title" id="faq-form-title">Questions sur<br>les formations</h2>
      <div class="faq-list" role="list">

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Faut-il des prérequis pour les formations particuliers ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Non, aucun prérequis. Les formations particuliers sont accessibles à tous, qu'il s'agisse de votre premier animal ou que vous soyez passionné depuis des années. Le niveau de chaque formation est indiqué dans le catalogue.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Les formations en ligne sont-elles finançables (CPF, OPCO) ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Le financement CPF et OPCO est en cours de mise en place. Contactez-moi pour connaître l'état actuel des certifications disponibles. Les formations B2B peuvent faire l'objet d'une prise en charge via votre OPCO — je vous accompagne dans le dossier.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Qu'est-ce qui différencie vos formations des tutoriels YouTube ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">La structure, la rigueur et le support. Mes formations sont construites sur des bases scientifiques solides, avec une progression pédagogique claire. Vous n'êtes pas seul face à l'écran — je suis disponible pour répondre à vos questions spécifiques à votre animal.</div>
        </div>

        <div class="faq-item" role="listitem">
          <button class="faq-q" aria-expanded="false" onclick="toggleFaq(this)">
            Peut-on combiner une formation avec une consultation ?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Absolument, et c'est souvent la combinaison la plus efficace. La formation vous donne les bases théoriques, la consultation traite votre situation spécifique. Je peux créer des parcours combinés sur-mesure — contactez-moi pour en discuter.</div>
        </div>

      </div>
    </div>
    <div class="faq-cta-box">
      <h3>Prêt à mieux comprendre votre animal ?</h3>
      <p>Formation particulier ou devis B2B — je vous réponds sous 24h.</p>
      <ul>
        <li>Contenus scientifiquement validés</li>
        <li>Support inclus après la formation</li>
        <li>Formations sur-mesure B2B</li>
        <li>En ligne à votre rythme ou présentiel</li>
      </ul>
      <a href="/prendre-rendez-vous" class="btn-white">Je m'inscris ou demande un devis →</a>
      <a href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20voudrais%20des%20informations%20sur%20les%20formations" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">💬 WhatsApp</a>
    </div>
  </div>
</section>
`;

export default function FormationsPage() {
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
