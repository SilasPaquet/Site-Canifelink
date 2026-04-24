"use client";

import { useEffect } from "react";



const PAGE_HTML = `
<!-- HERO À PROPOS -->
<header class="apropos-hero" role="banner" aria-labelledby="apropos-h1">
  <div>
    <div class="badge-live">
      <span class="badge-dot"></span>
      Comportementaliste certifiée · 3 espèces · Rhône (69)
    </div>
    <h1 id="apropos-h1" style="font-size:clamp(36px,4.5vw,54px);font-weight:900;color:white;margin-bottom:20px">
      Bonjour,<br>je suis <em>Manue</em>
    </h1>
    <p style="font-size:17px;color:rgba(255,255,255,.75);max-width:480px;line-height:1.75;margin-bottom:32px">
      Comportementaliste animalière certifiée, je suis spécialisée en éthologie appliquée pour le chien, le chat et le cheval — une triple expertise très rare en France. Basée dans le Rhône (69), j'interviens en présentiel et en distanciel dans toute la francophonie.
    </p>
    <a href="/prendre-rendez-vous" class="btn-main">📅 Réserver une consultation →</a>
  </div>
  <div style="display:flex;justify-content:center;align-items:center">
    <div class="manue-portrait">
      <span style="font-size:100px">👩‍🦰</span>
    </div>
  </div>
</header>

<!-- HISTOIRE -->
<section style="background:white;padding:88px 52px" aria-labelledby="histoire-title">
  <div style="max-width:900px;margin:0 auto">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start">
      <div>
        <div class="label-tag">Mon histoire</div>
        <h2 class="section-title" id="histoire-title">Le déclic.<br>La passion.<br>La mission.</h2>
        <p style="font-size:16px;color:var(--ink-mid);line-height:1.8;margin-bottom:18px">
          Tout a commencé avec un chien mal compris — le mien. Face aux méthodes coercitives proposées par le marché, j'ai commencé à chercher ailleurs. J'ai découvert l'éthologie, la réalité scientifique du comportement animal, et une autre façon d'aborder la relation homme-animal.
        </p>
        <p style="font-size:16px;color:var(--ink-mid);line-height:1.8;margin-bottom:18px">
          Ce déclic m'a conduite vers une formation rigoureuse en comportementalisme animal, puis vers une spécialisation progressive sur les trois espèces qui me tiennent à cœur : le chien, le chat et le cheval.
        </p>
        <blockquote class="about-quote">
          "Je n'utilise ni coercition, ni contrainte. Mon rôle est de vous donner les clés pour comprendre votre animal — pas de le dresser, mais de l'écouter vraiment."
        </blockquote>
      </div>
      <div>
        <div class="label-tag">Parcours &amp; formation</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--ink);margin-bottom:28px">Une expertise<br>construite pas à pas</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">Formation initiale</div>
            <div class="timeline-title">Certification comportementaliste canin</div>
            <div class="timeline-desc">Formation complète sur le comportement, l'éthologie et les méthodes d'apprentissage du chien. Première spécialisation.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">Approfondissement</div>
            <div class="timeline-title">Certification comportementaliste félin</div>
            <div class="timeline-desc">Spécialisation sur l'éthologie féline, les besoins du chat domestique et les protocoles de consultation visio adaptés aux félins.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">Niche rare</div>
            <div class="timeline-title">Éthologie équine appliquée</div>
            <div class="timeline-desc">Formation approfondie en comportement équin, langage corporel du cheval et relation cavalier-cheval. Triple expertise finalisée.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">Continu</div>
            <div class="timeline-title">Formation continue régulière</div>
            <div class="timeline-desc">Séminaires, conférences et lectures scientifiques pour rester à la pointe des connaissances en comportementalisme animal.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MÉTHODES & VALEURS -->
<section style="background:var(--cream-warm);padding:88px 52px" aria-labelledby="valeurs-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag">Méthodes &amp; valeurs</div>
    <h2 class="section-title" id="valeurs-title">Ce en quoi<br>je crois profondément</h2>
    <div class="values-grid">
      <div class="value-card">
        <span class="value-icon">🌿</span>
        <h3 class="value-title">L'éthologie, pas le dressage</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Je m'appuie sur les sciences du comportement animal pour comprendre le « pourquoi » d'un comportement avant d'agir sur le « comment ». Les résultats sont durables parce qu'ils respectent la nature de l'animal.</p>
      </div>
      <div class="value-card">
        <span class="value-icon">🤝</span>
        <h3 class="value-title">Bienveillance &amp; respect</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Aucune méthode coercitive, aucune punition physique ou émotionnelle. L'animal n'est jamais mis en situation inconfortable ou stressante lors d'une consultation.</p>
      </div>
      <div class="value-card">
        <span class="value-icon">👥</span>
        <h3 class="value-title">Vous rendre autonomes</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Mon objectif n'est pas de créer une dépendance à mes services. C'est de vous donner les outils pour comprendre votre animal et évoluer ensemble — durablement et en autonomie.</p>
      </div>
      <div class="value-card">
        <span class="value-icon">🔬</span>
        <h3 class="value-title">Rigueur scientifique</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Pas de pseudoscience, pas de méthodes fantaisistes. Tout ce que j'enseigne ou propose est ancré dans des données vérifiables et des pratiques reconnues par la communauté scientifique.</p>
      </div>
      <div class="value-card">
        <span class="value-icon">💊</span>
        <h3 class="value-title">Complémentarité vétérinaire</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Je travaille en complémentarité avec les vétérinaires et les ostéopathes animaliers. Je n'interviens jamais en remplacement d'un suivi médical — et je vous orientera vers ces professionnels si nécessaire.</p>
      </div>
      <div class="value-card">
        <span class="value-icon">📋</span>
        <h3 class="value-title">Transparence &amp; clarté</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.7">Tarifs transparents, comptes-rendus écrits systématiques, objectifs clairs annoncés dès la première consultation. Vous savez toujours où vous en êtes et vers où vous allez.</p>
      </div>
    </div>
  </div>
</section>

<!-- 3 ESPÈCES — POURQUOI -->
<section style="background:var(--teal-deep);padding:88px 52px" aria-labelledby="trois-title">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag" style="color:rgba(255,255,255,.4)">La triple expertise</div>
    <h2 class="section-title" id="trois-title" style="color:white">Pourquoi le chien,<br>le chat et le cheval ?</h2>
    <p style="font-size:17px;color:rgba(255,255,255,.65);max-width:560px;line-height:1.75;margin-bottom:52px">
      Les trois espèces forment un ensemble cohérent pour moi — des animaux avec lesquels les humains entretiennent des relations profondes, complexes, et souvent mal comprises.
    </p>
    <div class="diff-grid">
      <div class="diff-card">
        <span class="diff-icon">🐕</span>
        <h3 class="diff-title">Le chien</h3>
        <p class="diff-text">Animal social par excellence, le chien vit dans notre monde et porte nos incompréhensions. Son comportement est le reflet de notre relation avec lui.</p>
        <a href="/comportementaliste-chien-rhone" style="color:var(--gold);font-size:13px;font-weight:600;text-decoration:none;display:block;margin-top:14px">Consulter pour mon chien →</a>
      </div>
      <div class="diff-card">
        <span class="diff-icon">🐈</span>
        <h3 class="diff-title">Le chat</h3>
        <p class="diff-text">Le chat est souvent mal compris, jugé « indépendant » ou « ingrat ». En réalité, il communique constamment — nous n'avons pas appris son langage.</p>
        <a href="/comportementaliste-chat-rhone" style="color:var(--gold);font-size:13px;font-weight:600;text-decoration:none;display:block;margin-top:14px">Consulter pour mon chat →</a>
      </div>
      <div class="diff-card">
        <span class="diff-icon">🐴</span>
        <h3 class="diff-title">Le cheval</h3>
        <p class="diff-text">L'éthologie équine est encore trop rare. Le cheval mérite un regard scientifique sur son comportement, sans les mythes de domination qui persistent dans l'équitation traditionnelle.</p>
        <a href="/comportementaliste-cheval-rhone" style="color:var(--gold);font-size:13px;font-weight:600;text-decoration:none;display:block;margin-top:14px">Consulter pour mon cheval →</a>
      </div>
    </div>
  </div>
</section>

<!-- CHIFFRES -->
<div class="stats-bar" role="complementary" aria-label="CANIFELINK en chiffres">
  <div class="stats-inner">
    <div class="stat-item">
      <span class="stat-num">3</span>
      <span class="stat-label">Espèces maîtrisées</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">+500</span>
      <span class="stat-label">Consultations réalisées</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">4,9 ⭐</span>
      <span class="stat-label">Note moyenne (120 avis)</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">100%</span>
      <span class="stat-label">Sans coercition</span>
    </div>
  </div>
</div>

<!-- CTA DISCRET -->
<section style="background:var(--cream-warm);padding:88px 52px;text-align:center" aria-labelledby="cta-apropos-title">
  <div style="max-width:600px;margin:0 auto">
    <div class="label-tag" style="justify-content:center">Prochaine étape</div>
    <h2 class="section-title" id="cta-apropos-title" style="text-align:center">Prêt à commencer<br>votre consultation ?</h2>
    <p style="font-size:16px;color:var(--ink-soft);line-height:1.75;margin-bottom:36px">
      Je vous réponds sous 24h pour organiser votre consultation — présentiel dans le Rhône ou visio partout en France. Premier échange gratuit.
    </p>
    <a href="/prendre-rendez-vous" class="btn-teal" style="margin-right:14px">📅 Réserver ma consultation →</a>
    <a href="mailto:contact@canifelink.fr" style="color:var(--teal);font-weight:600;font-size:15px;text-decoration:none">✉ Me contacter →</a>
  </div>
</section>
`;

export default function AProposPage() {
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
