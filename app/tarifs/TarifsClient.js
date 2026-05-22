"use client";
import { useEffect } from "react";

const PAGE_HTML = `
<nav style="background:var(--teal-deep);padding:10px 52px;border-top:1px solid rgba(255,255,255,.08)">
  <ol style="display:flex;align-items:center;gap:6px;list-style:none;font-size:12px;color:rgba(255,255,255,.4)">
    <li><a href="/" style="color:rgba(255,255,255,.55);text-decoration:none;font-weight:600">Accueil</a></li>
    <li style="color:rgba(255,255,255,.4);margin-left:6px">›</li>
    <li style="color:rgba(255,255,255,.7);font-weight:600;margin-left:6px">Tarifs</li>
  </ol>
</nav>

<header class="tarifs-hero">
  <div class="tarifs-hero-inner">
    <div class="tarifs-hero-badge">💶 Tarifs 2025 · Transparents &amp; sans surprise</div>
    <h1>Des tarifs clairs<br>pour chaque <em>besoin</em></h1>
    <p class="tarifs-hero-sub">Que vous soyez propriétaire d'un animal, professionnel du secteur ou comportementaliste en devenir — vous trouverez ici l'accompagnement qui vous correspond.</p>
    <div class="tarifs-hero-proof">
      <span class="tarifs-hero-proof-stars">★★★★★</span>
      <span class="tarifs-hero-proof-text">4,9/5 · Suivi 30 jours inclus dans toutes les consultations</span>
    </div>
    <div class="tarifs-hero-chips">
      <span class="chip">🐕 Chien</span>
      <span class="chip">🐈 Chat</span>
      <span class="chip">🐴 Cheval</span>
      <span class="chip">💻 Visio France + francophonie</span>
      <span class="chip">📍 Présentiel Rhône (69)</span>
    </div>
  </div>
</header>

<div class="pills-nav">
  <div class="pills-inner">
    <button class="pill-btn active" data-target="part1">👤 Particuliers</button>
    <button class="pill-btn" data-target="part2">🏢 B2B / Pros</button>
    <button class="pill-btn" data-target="part3">📖 Formations particuliers</button>
    <button class="pill-btn" data-target="part4">🎓 Formations pros</button>
    <button class="pill-btn" data-target="petsitting">🐾 Pet-Sitting</button>
    <button class="pill-btn" data-target="part5">🤝 Mentoring</button>
  </div>
</div>

<!-- SECTION 1 — PARTICULIERS -->
<section class="tarifs-block" id="part1" style="background:var(--cream)">
  <div class="label-tag">Propriétaires d'animaux</div>
  <h2 class="section-h2">Comportement · Particuliers</h2>
  <p class="section-sub">Bilan comportemental sur-mesure pour votre chien, chat ou cheval. Chaque consultation inclut un questionnaire préalable, un compte-rendu écrit sous 48h et un suivi par messages pendant 30 jours.</p>

  <div class="depl-note">
    <span class="depl-note-icon">🚗</span>
    <div class="depl-note-text">
      <strong>Frais de déplacement présentiel :</strong> déplacements inclus jusqu'à 20 km d'Éveux (Grand Lyon, Val de Saône). Au-delà : 0,45 €/km aller-retour. Zone Auvergne-Rhône-Alpes jusqu'à 100 km. Hors zone → visio recommandée ou devis sur demande.
    </div>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:16px;color:var(--ink)">🐕 Chien</h3>
  <div class="g3" style="margin-bottom:32px">
    <div class="card">
      <div class="card-head" style="background:var(--green-light)">
        <span class="card-tag tag-green">Visio · Présentiel</span>
        <div class="card-name">Bilan comportemental canin</div>
        <div class="card-mode">Première consultation · Diagnostic complet</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="font-size:34px">90 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="font-size:34px">115 €</div></div>
        </div>
        <div class="price-note">1h30 à 2h · + frais km présentiel hors zone 1</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Questionnaire comportemental préalable</li>
          <li><span class="ck">✓</span>Bilan complet &amp; protocole sur-mesure</li>
          <li><span class="ck">✓</span>Compte-rendu écrit envoyé sous 48h</li>
          <li><span class="ck">✓</span>Suivi 30 jours par messages inclus</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Prendre rendez-vous</a>
      </div>
    </div>
    <div class="card featured">
      <div class="card-head" style="background:var(--teal-pale)">
        <div class="ribbon">⭐ Le plus choisi</div>
        <div class="card-name">Forfait Sérénité Chien</div>
        <div class="card-mode">Bilan + 2 séances de suivi</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="font-size:34px">195 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="font-size:34px">245 €</div></div>
        </div>
        <div class="price-note">~4h de travail · Économie vs séances séparées</div>
        <ul class="incl">
          <li><span class="ck">✓</span>1 bilan comportemental complet (1h30-2h)</li>
          <li><span class="ck">✓</span>2 séances de suivi &amp; ajustement (1h chacune)</li>
          <li><span class="ck">✓</span>CR écrit + suivi 30 jours inclus</li>
          <li><span class="ck">✓</span>Plan d'action réajusté en continu</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Réserver le forfait</a>
      </div>
    </div>
    <div class="card">
      <div class="card-head" style="background:var(--cream)">
        <span class="card-tag tag-teal">Visio uniquement</span>
        <div class="card-name">SOS Comportement</div>
        <div class="card-mode">Question urgente · Avis expert rapide</div>
      </div>
      <div class="card-body">
        <div class="price-big">55 €</div>
        <div class="price-note">45 min · Sans CR écrit · Sans engagement</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Échange structuré sur votre situation</li>
          <li><span class="ck">✓</span>Pistes concrètes &amp; conseils immédiats</li>
          <li><span class="ck">✓</span>Réponse sous 24h pour la prise de RDV</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card ghost">Prendre contact →</a>
      </div>
    </div>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:16px;color:var(--ink)">🐈 Chat</h3>
  <div class="g3" style="margin-bottom:32px">
    <div class="card">
      <div class="card-head" style="background:var(--gold-light)">
        <span class="card-tag tag-gold">Visio · Présentiel</span>
        <div class="card-name">Bilan comportemental félin</div>
        <div class="card-mode">Idéalement en visio · Moins stressant pour le chat</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="font-size:34px">90 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="font-size:34px">115 €</div></div>
        </div>
        <div class="price-note">1h30 à 2h · CR écrit + suivi 30j inclus</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Malpropreté, griffades, peur, agressivité</li>
          <li><span class="ck">✓</span>Cohabitation féline · Introduction nouveau chat</li>
          <li><span class="ck">✓</span>Protocole détaillé + CR 48h + suivi 30j</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Prendre rendez-vous</a>
      </div>
    </div>
    <div class="card featured">
      <div class="card-head" style="background:var(--teal-pale)">
        <div class="ribbon">⭐ Le plus choisi</div>
        <div class="card-name">Forfait Sérénité Chat</div>
        <div class="card-mode">Bilan + 2 séances de suivi</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="font-size:34px">195 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="font-size:34px">245 €</div></div>
        </div>
        <div class="price-note">~4h de travail · Idéal pour les cas tenaces</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Bilan + 2 suivis d'1h</li>
          <li><span class="ck">✓</span>CR écrit + suivi 30j</li>
          <li><span class="ck">✓</span>Ajustements en continu</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Réserver le forfait</a>
      </div>
    </div>
    <div class="card">
      <div class="card-head" style="background:var(--cream)">
        <span class="card-tag tag-teal">Visio · Présentiel</span>
        <div class="card-name">Intégration multi-chats</div>
        <div class="card-mode">Cohabitation · Introduction · Conflits</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="font-size:34px">100 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="font-size:34px">125 €</div></div>
        </div>
        <div class="price-note">2h · Plan d'intégration détaillé + suivi 30j</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Protocole d'introduction étape par étape</li>
          <li><span class="ck">✓</span>Gestion des conflits territoriaux</li>
          <li><span class="ck">✓</span>CR écrit + suivi 30j inclus</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Prendre rendez-vous</a>
      </div>
    </div>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:8px;color:var(--ink)">🐴 Cheval
    <span style="background:var(--gold);color:white;font-size:11px;font-weight:700;padding:4px 12px;border-radius:50px;letter-spacing:.06em;text-transform:uppercase;vertical-align:middle;margin-left:8px">Expertise rare en France</span>
  </h3>
  <p style="font-size:14px;color:var(--ink-soft);margin-bottom:20px">L'éthologie équine appliquée est l'une des niches les plus rares en France. CANIFELINK fait partie des très rares comportementalistes proposant une approche scientifique du comportement cheval, en visio ou en présentiel dans le Rhône.</p>
  <div class="g3" style="margin-bottom:32px">
    <div class="card">
      <div class="card-head" style="background:var(--teal-pale)">
        <span class="card-tag tag-teal">Visio · Présentiel Rhône</span>
        <div class="card-name">Bilan comportemental équin</div>
        <div class="card-mode">Relation cavalier-cheval · Peurs · Refus</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="color:var(--gold);font-size:34px">110 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="color:var(--gold);font-size:34px">145 €</div></div>
        </div>
        <div class="price-note">1h30 à 2h · CR écrit + protocole + suivi 30j</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Éthologie équine appliquée</li>
          <li><span class="ck">✓</span>Peurs, refus, agressivité, bien-être</li>
          <li><span class="ck">✓</span>CR + protocole écrit + suivi 30j</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card">📅 Prendre rendez-vous</a>
      </div>
    </div>
    <div class="card premium">
      <div class="card-head" style="background:var(--gold-light)">
        <div class="ribbon ribbon-gold">⭐ Recommandé</div>
        <div class="card-name">Forfait Sérénité Cheval</div>
        <div class="card-mode">Bilan + 2 séances de suivi</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="color:var(--gold);font-size:34px">245 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="color:var(--gold);font-size:34px">315 €</div></div>
        </div>
        <div class="price-note">~4h · Protocole + suivi + ajustements inclus</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Bilan + 2 suivis (1h chacun)</li>
          <li><span class="ck">✓</span>Protocole détaillé + CR + suivi 30j</li>
          <li><span class="ck">✓</span>Accompagnement complet de la démarche</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card" style="background:var(--gold)">📅 Réserver le forfait</a>
      </div>
    </div>
    <div class="card">
      <div class="card-head" style="background:var(--cream)">
        <span class="card-tag tag-gold">Présentiel Rhône</span>
        <div class="card-name">Audit lieu de vie équin</div>
        <div class="card-mode">Environnement · Bien-être · Gestion troupeau</div>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:6px">
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Visio</div><div class="price-big" style="color:var(--gold);font-size:34px">130 €</div></div>
          <div style="padding-top:20px;color:var(--ink-soft);font-size:20px">·</div>
          <div><div style="font-size:11px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Présentiel</div><div class="price-big" style="color:var(--gold);font-size:34px">180 €</div></div>
        </div>
        <div class="price-note">2h · Rapport d'audit complet + recommandations</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Analyse installation &amp; enrichissement</li>
          <li><span class="ck">✓</span>Gestion du troupeau &amp; relations sociales</li>
          <li><span class="ck">✓</span>Rapport écrit de préconisations</li>
        </ul>
        <a href="/prendre-rendez-vous" class="btn-card ghost">Prendre contact →</a>
      </div>
    </div>
  </div>

  <div class="note">
    🏠 <strong>Foyer multi-animaux :</strong> 2ème animal de la même espèce lors d'une même séance → +40 € visio / +50 € présentiel (+30 min). Foyer avec 2 espèces différentes → remise de 15 % sur la 2ème espèce accompagnée.
  </div>
</section>


<!-- SECTION 2 — B2B -->
<section class="tarifs-block" id="part2" style="background:white">
  <div class="label-tag">Professionnels du secteur animal</div>
  <h2 class="section-h2">Accompagnement B2B</h2>
  <p class="section-sub">Refuges, SPA, cliniques vétérinaires, éleveurs, pet-sitters, ostéopathes animaliers, ASV, centres équestres. Interventions ponctuelles ou forfaits partenariat annuels.</p>

  <div class="t-wrap" style="margin-bottom:32px">
    <table>
      <thead>
        <tr><th style="width:42%">Prestation</th><th>Visio</th><th>Présentiel</th><th>Durée</th></tr>
      </thead>
      <tbody>
        <tr><td class="td-title"><strong>Consultation comportementale d'un animal en structure</strong><small>Bilan individuel · Avant adoption, cas complexe, agressivité</small></td><td class="td-price">110 €</td><td class="td-price">145 €</td><td>1h30</td></tr>
        <tr><td class="td-title"><strong>Intervention demi-journée en structure</strong><small>Plusieurs bilans + atelier équipe</small></td><td class="td-price">380 €</td><td class="td-price">450 €</td><td>3h</td></tr>
        <tr><td class="td-title"><strong>Intervention journée complète</strong><small>Audit comportemental + bilans + plan de recommandations</small></td><td class="td-price">680 €</td><td class="td-price">820 €</td><td>6h</td></tr>
        <tr><td class="td-title"><strong>Réunion d'équipe / analyse de cas</strong><small>Présentation d'un cas complexe à l'équipe soignante ou éducative</small></td><td class="td-price">120 €</td><td class="td-price">N/A</td><td>1h</td></tr>
        <tr><td class="td-title"><strong>Audit comportemental complet d'une structure</strong><small>Refuge, élevage, écurie · Rapport de préconisations complet</small></td><td class="td-price">—</td><td class="td-price td-price-gold">Sur devis</td><td>1–2 jours</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:8px;color:var(--ink)">Forfaits partenariat trimestriels</h3>
  <p style="font-size:14px;color:var(--ink-soft);margin-bottom:24px">Accès prioritaire au planning · Remise 15 à 20 % vs interventions ponctuelles · Idéal pour les structures qui accompagnent régulièrement des animaux avec des problématiques comportementales.</p>
  <div class="g3">
    <div class="card">
      <div class="card-head" style="background:var(--teal-pale)">
        <span class="card-icon">🤝</span>
        <div class="card-name">Partenaire Essentiel</div>
        <div class="card-mode">Refuge · Pet-sitter · Éleveur</div>
      </div>
      <div class="card-body">
        <div class="price-big">490 €<span class="sfx">/trimestre</span></div>
        <div class="price-note">Soit ~163 €/mois · Remise 15 % vs ponctuel</div>
        <ul class="incl">
          <li><span class="ck">✓</span>2 consultations comportementales/trimestre</li>
          <li><span class="ck">✓</span>1 réunion d'équipe visio/trimestre</li>
          <li><span class="ck">✓</span>Messagerie prioritaire (réponse 48h)</li>
          <li><span class="ck">✓</span>CR écrit pour chaque consultation</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Partenariat B2B CANIFELINK" class="btn-card ghost">Demander un devis →</a>
      </div>
    </div>
    <div class="card featured">
      <div class="card-head" style="background:var(--teal);color:white">
        <div class="ribbon" style="background:white;color:var(--teal)">⭐ Recommandé</div>
        <span class="card-icon">🏥</span>
        <div class="card-name" style="color:white">Partenaire Clinique</div>
        <div class="card-mode" style="color:rgba(255,255,255,.7)">Clinique vétérinaire · ASV</div>
      </div>
      <div class="card-body">
        <div class="price-big">890 €<span class="sfx">/trimestre</span></div>
        <div class="price-note">Soit ~297 €/mois · Remise 20 % vs ponctuel</div>
        <ul class="incl">
          <li><span class="ck">✓</span>5 consultations comportementales/trimestre</li>
          <li><span class="ck">✓</span>2 réunions d'équipe visio/trimestre</li>
          <li><span class="ck">✓</span>Formation courte équipe (2h/trimestre)</li>
          <li><span class="ck">✓</span>Messagerie prioritaire (urgences 24h)</li>
          <li><span class="ck">✓</span>Rapport trimestriel + co-référencement</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Partenariat Clinique CANIFELINK" class="btn-card">Nous contacter →</a>
      </div>
    </div>
    <div class="card premium">
      <div class="card-head" style="background:var(--gold-light)">
        <div class="ribbon ribbon-gold">🌟 Premium</div>
        <span class="card-icon">🏆</span>
        <div class="card-name">Partenaire Stratégique</div>
        <div class="card-mode">Grande structure · Centre équestre</div>
      </div>
      <div class="card-body">
        <div class="price-big" style="color:var(--gold)">Sur devis</div>
        <div class="price-note">À partir de 1 800 €/trimestre · Contrat personnalisé</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Volume illimité de consultations</li>
          <li><span class="ck">✓</span>Présence physique mensuelle</li>
          <li><span class="ck">✓</span>Formation continue de l'équipe</li>
          <li><span class="ck">✓</span>Co-construction protocoles internes</li>
          <li><span class="ck">✓</span>Logo CANIFELINK sur vos supports</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Partenariat Stratégique CANIFELINK" class="btn-card ghost">Demander un devis →</a>
      </div>
    </div>
  </div>
</section>


<!-- SECTION 3 — FORMATIONS PARTICULIERS -->
<section class="tarifs-block" id="part3" style="background:var(--cream-warm)">
  <div class="label-tag">Formations en ligne · Propriétaires</div>
  <h2 class="section-h2">Formations · Particuliers</h2>
  <p class="section-sub">Des modules en visio pour mieux comprendre votre animal, gérer les comportements au quotidien et devenir plus autonome. Accessibles depuis toute la francophonie.</p>
  <div class="note">💡 Ces formations ne remplacent pas une consultation — elles la préparent ou la complètent. <strong>Avant un bilan, comprendre les bases vous rend deux fois plus efficace dans l'application.</strong></div>

  <div class="g3">
    <!-- CHIEN -->
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:var(--green-light);border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:10px">
        <span style="font-size:28px">🐕</span>
        <div>
          <div style="font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--green)">Espèce Chien</div>
          <div style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--ink)">Modules canins</div>
        </div>
      </div>
      <div class="card" style="border-radius:14px">
        <div class="card-body" style="padding:18px 20px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div><strong style="font-size:15px;color:var(--ink)">Comprendre son chien</strong><div style="font-size:12px;color:var(--ink-soft)">5 modules · 5h · Tous niveaux</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">149 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Éthologie, besoins, communication, signaux de calme</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">Agressivité &amp; réactivité</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 2h · Intermédiaire</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">89 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Décoder, désensibiliser, gérer sans punition</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">Chiot : les 3 premiers mois</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 1h30</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">69 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:2px solid var(--teal-light);margin-bottom:12px">Socialisation, bases, prévention des troubles</div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div><strong style="font-size:15px;color:var(--green)">🎁 Pack chien complet</strong><div style="font-size:12px;color:var(--ink-soft)">Les 3 modules · Économie 48 €</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--green);flex-shrink:0;margin-left:10px">259 €</div>
          </div>
        </div>
        <div style="padding:0 20px 20px"><a href="/formations/particuliers" class="btn-card" style="font-size:13px;padding:11px 18px">Voir les formations chien →</a></div>
      </div>
    </div>

    <!-- CHAT -->
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:var(--gold-light);border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:10px">
        <span style="font-size:28px">🐈</span>
        <div>
          <div style="font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#8B6A1A">Espèce Chat</div>
          <div style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--ink)">Modules félins</div>
        </div>
      </div>
      <div class="card" style="border-radius:14px">
        <div class="card-body" style="padding:18px 20px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div><strong style="font-size:15px;color:var(--ink)">Comprendre son chat</strong><div style="font-size:12px;color:var(--ink-soft)">4 modules · 4h · Tous niveaux</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">129 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Éthologie féline, besoins, territoire, communication</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">Malpropreté féline</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 2h · Problème ciblé</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">79 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Comprendre et résoudre les éliminations hors litière</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">Cohabitation chats</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 1h30</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--teal);flex-shrink:0;margin-left:10px">69 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:2px solid var(--teal-light);margin-bottom:12px">Introduction &amp; gestion des conflits entre chats</div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div><strong style="font-size:15px;color:var(--green)">🎁 Pack chat complet</strong><div style="font-size:12px;color:var(--ink-soft)">Les 3 modules · Économie 38 €</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--green);flex-shrink:0;margin-left:10px">239 €</div>
          </div>
        </div>
        <div style="padding:0 20px 20px"><a href="/formations/particuliers" class="btn-card" style="font-size:13px;padding:11px 18px">Voir les formations chat →</a></div>
      </div>
      <!-- STAGE PRÉSENTIEL FÉLIN -->
      <div style="background:var(--teal-deep);border-radius:14px;padding:20px;margin-top:4px;position:relative;overflow:hidden">
        <div style="position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.06)"></div>
        <div style="position:relative;z-index:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="background:var(--gold);color:white;font-size:10px;font-weight:800;padding:3px 10px;border-radius:50px;letter-spacing:.08em;text-transform:uppercase">Présentiel · Rhône</span>
            <span style="background:rgba(255,255,255,.12);color:rgba(255,255,255,.75);font-size:10px;font-weight:700;padding:3px 10px;border-radius:50px;letter-spacing:.06em">≤ 8 personnes</span>
          </div>
          <div style="font-family:'Playfair Display',serif;font-size:18px;font-weight:900;color:white;margin-bottom:4px">🐈 Stage Immersion Féline</div>
          <div style="font-size:12px;color:rgba(255,255,255,.55);margin-bottom:14px">2 jours en semaine · Rhône (69) · Petit groupe</div>
          <div style="font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:var(--gold);margin-bottom:4px">380 €<span style="font-family:'Nunito',sans-serif;font-size:14px;font-weight:400;color:rgba(255,255,255,.4)">/participant</span></div>
          <div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:14px">2 jours consécutifs en semaine</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:16px">
            <li style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:rgba(255,255,255,.7)"><span style="color:#7FE8C0;font-weight:700;flex-shrink:0">✓</span>Éthologie féline théorie + pratique</li>
            <li style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:rgba(255,255,255,.7)"><span style="color:#7FE8C0;font-weight:700;flex-shrink:0">✓</span>Observations comportementales en direct</li>
            <li style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:rgba(255,255,255,.7)"><span style="color:#7FE8C0;font-weight:700;flex-shrink:0">✓</span>Cas pratiques &amp; mises en situation</li>
            <li style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:rgba(255,255,255,.7)"><span style="color:#7FE8C0;font-weight:700;flex-shrink:0">✓</span>Supports de cours &amp; bibliographie</li>
            <li style="display:flex;align-items:flex-start;gap:8px;font-size:12px;color:rgba(255,255,255,.7)"><span style="color:#7FE8C0;font-weight:700;flex-shrink:0">✓</span>Attestation de stage CANIFELINK</li>
          </ul>
          <a href="mailto:contact@canifelink.fr?subject=Stage Immersion Féline - Particuliers" style="display:flex;align-items:center;justify-content:center;gap:8px;background:var(--gold);color:white;padding:11px 18px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;font-family:'Nunito',sans-serif">📅 Réserver ma place →</a>
          <div style="margin-top:10px;font-size:11px;color:rgba(255,255,255,.3);text-align:center">Places limitées · Dates sur demande</div>
        </div>
      </div>
    </div>

    <!-- CHEVAL -->
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:var(--teal-light);border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:10px">
        <span style="font-size:28px">🐴</span>
        <div>
          <div style="font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--teal-dark)">Espèce Cheval · Niche rare</div>
          <div style="font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--ink)">Modules équins</div>
        </div>
      </div>
      <div class="card" style="border-radius:14px">
        <div class="card-body" style="padding:18px 20px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div><strong style="font-size:15px;color:var(--ink)">Comprendre son cheval</strong><div style="font-size:12px;color:var(--ink-soft)">5 modules · 6h · Cavaliers</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--gold);flex-shrink:0;margin-left:10px">179 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Éthologie équine, signaux de stress, bien-être, communication</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">La relation cavalier-cheval</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 2h</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--gold);flex-shrink:0;margin-left:10px">99 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:1px solid var(--border)">Communication inter-espèces, lire son cheval</div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin:12px 0 6px">
            <div><strong style="font-size:15px;color:var(--ink)">Peurs &amp; phobies équines</strong><div style="font-size:12px;color:var(--ink-soft)">Atelier 2h</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--gold);flex-shrink:0;margin-left:10px">89 €</div>
          </div>
          <div style="font-size:12px;color:var(--ink-mid);line-height:1.5;padding-bottom:12px;border-bottom:2px solid var(--teal-light);margin-bottom:12px">Désensibilisation douce, reconnaître et gérer les phobies</div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div><strong style="font-size:15px;color:var(--green)">🎁 Pack cheval complet</strong><div style="font-size:12px;color:var(--ink-soft)">Les 3 modules · Économie 48 €</div></div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:var(--green);flex-shrink:0;margin-left:10px">319 €</div>
          </div>
        </div>
        <div style="padding:0 20px 20px"><a href="/formations/particuliers" class="btn-card" style="font-size:13px;padding:11px 18px;background:var(--gold)">Voir les formations cheval →</a></div>
      </div>
    </div>
  </div>
</section>


<!-- SECTION 4 — FORMATIONS PROS -->
<section class="tarifs-block" id="part4" style="background:white">
  <div class="label-tag">Formations en ligne · Professionnels</div>
  <h2 class="section-h2">Formations · Professionnels &amp; futurs pros</h2>
  <p class="section-sub">Éleveurs, pet-sitters, ostéopathes animaliers, ASV, moniteurs équitation, toiletteurs, gardiens d'animaux. Modules visio live pour sécuriser vos pratiques et enrichir votre expertise.</p>

  <div style="background:linear-gradient(135deg,var(--teal-deep),var(--teal-dark));border-radius:16px;padding:24px 28px;margin-bottom:32px;display:flex;align-items:center;gap:24px;flex-wrap:wrap">
    <div style="font-size:48px;flex-shrink:0">🐈</div>
    <div style="flex:1;min-width:200px">
      <div style="display:inline-flex;align-items:center;gap:6px;background:var(--gold);color:white;font-size:10px;font-weight:800;padding:3px 12px;border-radius:50px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px">Nouveauté · Présentiel Rhône</div>
      <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:white;margin-bottom:4px">Stages félins en présentiel</div>
      <div style="font-size:13px;color:rgba(255,255,255,.65);line-height:1.6">2 jours en semaine · Rhône (69) · Petits groupes ≤ 8 personnes<br>Théorie + pratique + mises en situation · Éthologie féline appliquée au milieu professionnel</div>
    </div>
    <div style="text-align:right;flex-shrink:0">
      <div style="font-family:'Playfair Display',serif;font-size:36px;font-weight:900;color:var(--gold)">490 €</div>
      <div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:12px">/participant · 2 jours</div>
      <a href="mailto:contact@canifelink.fr?subject=Stage félin présentiel pro" style="display:inline-flex;align-items:center;gap:6px;background:white;color:var(--teal-dark);padding:10px 20px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;font-family:'Nunito',sans-serif">Réserver une place →</a>
    </div>
  </div>

  <div class="t-wrap" style="margin-bottom:32px">
    <table>
      <thead><tr><th style="width:45%">Module</th><th>Tarif</th><th>Durée</th><th>Public</th></tr></thead>
      <tbody>
        <tr class="row-sep"><td colspan="4">🐕 Comportement canin pour les professionnels</td></tr>
        <tr><td class="td-title"><strong>Fondamentaux canins pour pros</strong><small>Communication, signaux de stress, gestion des situations de tension</small></td><td class="td-price">199 €</td><td>4h visio</td><td>Pet-sitters, éleveurs, ASV, gardiens</td></tr>
        <tr><td class="td-title"><strong>Gestion de l'agressivité en structure</strong><small>Protocoles sécurité, prévention des morsures, désescalade</small></td><td class="td-price">229 €</td><td>4h visio</td><td>Refuges, vétérinaires, ASV</td></tr>
        <tr><td class="td-title"><strong>Élevage canin &amp; bien-être comportemental</strong><small>Socialisation, enrichissement, prévention des troubles</small></td><td class="td-price">199 €</td><td>3h visio</td><td>Éleveurs</td></tr>
        <tr class="row-sep"><td colspan="4">🐈 Comportement félin pour les professionnels</td></tr>
        <tr><td class="td-title"><strong>Fondamentaux félins pour pros</strong><small>Éthologie, stress en milieu confiné, communication féline</small></td><td class="td-price">199 €</td><td>4h visio</td><td>ASV, pet-sitters, toiletteurs, éleveurs</td></tr>
        <tr><td class="td-title"><strong>Manipulation du chat anxieux ou agressif</strong><small>Low Stress Handling, contention bienveillante, protocoles FAS</small></td><td class="td-price">229 €</td><td>3h visio</td><td>Cliniques vétérinaires, ASV</td></tr>
        <tr><td class="td-title"><strong>Élevage félin &amp; enrichissement comportemental</strong><small>Socialisation chaton, sélection comportementale, bien-être</small></td><td class="td-price">199 €</td><td>3h visio</td><td>Éleveurs LOOF/TICA</td></tr>
        <tr class="row-sep"><td colspan="4">🐈 Stages félins en présentiel · Rhône (69) · ≤ 8 participants</td></tr>
        <tr style="background:var(--gold-light)"><td class="td-title"><strong>Stage Immersion Féline — Professionnels</strong><small>2 jours en semaine · Éthologie féline appliquée au milieu pro · Cliniques, refuges, éleveurs, ASV, pet-sitters</small></td><td class="td-price td-price-gold">490 €</td><td>2 jours</td><td>Tous pros du secteur animal</td></tr>
        <tr style="background:var(--gold-light)"><td class="td-title"><strong>Stage Félin Spécialisé — Manipulation &amp; Bien-être</strong><small>2 jours en semaine · Low Stress Handling, contention bienveillante, enrichissement, gestion des chats difficiles en structure</small></td><td class="td-price td-price-gold">520 €</td><td>2 jours</td><td>ASV, cliniques vétérinaires, refuges</td></tr>
        <tr style="background:var(--gold-light)"><td class="td-title"><strong>Stage Élevage Félin &amp; Comportement</strong><small>2 jours en semaine · Socialisation chaton, enrichissement, sélection comportementale, prévention des troubles</small></td><td class="td-price td-price-gold">490 €</td><td>2 jours</td><td>Éleveurs LOOF / TICA</td></tr>
        <tr class="row-sep"><td colspan="4">🐴 Comportement équin pour les professionnels — module rare</td></tr>
        <tr><td class="td-title"><strong>Fondamentaux équins pour pros</strong><small>Éthologie équine, signaux de stress, bien-être en écurie</small></td><td class="td-price td-price-gold">249 €</td><td>4h visio</td><td>Moniteurs, ostéopathes, soigneurs</td></tr>
        <tr><td class="td-title"><strong>Gestion des chevaux difficiles en structure</strong><small>Sécurité, désensibilisation, peurs &amp; refus chez le pro</small></td><td class="td-price td-price-gold">279 €</td><td>4h visio</td><td>Centres équestres, pensions</td></tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:16px;color:var(--ink)">Packs multi-espèces</h3>
  <div class="g3">
    <div class="card">
      <div class="card-head" style="background:var(--teal-pale)">
        <span class="card-tag tag-teal">2 modules</span>
        <div class="card-name">Pack Bi-espèces</div>
        <div class="card-mode">Choisir 2 modules parmi le catalogue</div>
      </div>
      <div class="card-body">
        <div class="price-big">349 €</div>
        <div class="price-note">Économie ~80 € · Accès replay 6 mois</div>
        <ul class="incl">
          <li><span class="ck">✓</span>2 modules de votre choix</li>
          <li><span class="ck">✓</span>Supports PDF résumés</li>
          <li><span class="ck">✓</span>Accès replay 6 mois</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Pack Bi-espèces pro" class="btn-card ghost">Demander →</a>
      </div>
    </div>
    <div class="card featured">
      <div class="card-head" style="background:var(--teal)">
        <div class="ribbon" style="background:white;color:var(--teal)">⭐ Meilleure valeur</div>
        <div class="card-name" style="color:white">Pack Tri-espèces</div>
        <div class="card-mode" style="color:rgba(255,255,255,.7)">Chien + Chat + Cheval</div>
      </div>
      <div class="card-body">
        <div class="price-big">549 €</div>
        <div class="price-note">Économie ~120 € · Attestation CANIFELINK + Q&amp;A 1h incluse</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Fondamentaux Chien + Chat + Cheval</li>
          <li><span class="ck">✓</span>1h de Q&amp;A individuelle avec Manue</li>
          <li><span class="ck">✓</span>Attestation de formation CANIFELINK</li>
          <li><span class="ck">✓</span>Supports PDF complets + replay 12 mois</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Pack Tri-espèces pro" class="btn-card">Je m'inscris →</a>
      </div>
    </div>
    <div class="card">
      <div class="card-head" style="background:var(--teal-deep)">
        <div class="ribbon" style="background:var(--gold)">Sur mesure</div>
        <div class="card-name" style="color:white">Formation intra-structure</div>
        <div class="card-mode" style="color:rgba(255,255,255,.5)">Groupe jusqu'à 8 personnes</div>
      </div>
      <div class="card-body">
        <div class="price-big" style="color:var(--gold)">Sur devis</div>
        <div class="price-note">À partir de 450 €/demi-journée · Programme co-construit · Financement OPCO possible</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Programme adapté à votre structure</li>
          <li><span class="ck">✓</span>Cas concrets de votre équipe intégrés</li>
          <li><span class="ck">✓</span>Attestation individuelle pour chaque participant</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Formation intra-structure" class="btn-card ghost">Demander un devis →</a>
      </div>
    </div>
  </div>

  <!-- ══ FORMATION PET-SITTING ══ -->
  <div id="petsitting" style="margin-top:48px;padding-top:48px;border-top:2px solid var(--border);scroll-margin-top:130px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
      <div class="label-tag" style="margin-bottom:0">Formation spécialisée</div>
      <span style="background:var(--teal);color:white;font-size:10px;font-weight:800;padding:3px 12px;border-radius:50px;letter-spacing:.08em;text-transform:uppercase">Nouveau</span>
    </div>
    <h3 style="font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:var(--ink);margin-bottom:10px">Formation Pet-Sitting Comportemental</h3>
    <p style="font-size:16px;color:var(--ink-soft);max-width:640px;line-height:1.75;margin-bottom:32px">Vous êtes pet-sitter ou vous souhaitez le devenir. Cette formation vous donne les clés comportementales pour accueillir et gérer sereinement les chiens, chats et chevaux confiés — et vous démarquer sur un marché qui demande de plus en plus de compétences sérieuses.</p>

    <div style="background:linear-gradient(135deg,var(--teal-deep) 0%,#1A6070 60%,var(--teal) 100%);border-radius:20px;padding:36px;margin-bottom:28px;position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;right:-60px;width:260px;height:260px;border-radius:50%;background:rgba(255,255,255,.05)"></div>
      <div style="position:absolute;bottom:-40px;left:30%;width:180px;height:180px;border-radius:50%;background:rgba(42,157,170,.25)"></div>
      <div style="position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:start">
        <div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
            <span style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:white;font-size:11px;font-weight:600;padding:4px 12px;border-radius:50px">🐕 Chien</span>
            <span style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:white;font-size:11px;font-weight:600;padding:4px 12px;border-radius:50px">🐈 Chat</span>
            <span style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:white;font-size:11px;font-weight:600;padding:4px 12px;border-radius:50px">🐴 Équin</span>
            <span style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:white;font-size:11px;font-weight:600;padding:4px 12px;border-radius:50px">💻 Visio + stage présentiel en option</span>
          </div>
          <div style="font-family:'Playfair Display',serif;font-size:26px;font-weight:900;color:white;margin-bottom:6px">La formation complète pour pet-sitters</div>
          <div style="font-size:14px;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:24px">5 modules visio · ~10h · Débutants &amp; pet-sitters en activité<br>Comprendre les comportements, sécuriser les gardes, gérer les imprévus</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:14px 16px">
              <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px">Module 1</div>
              <div style="font-size:13px;color:white;font-weight:600">Comportement canin en garde</div>
              <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:2px">2h30 visio</div>
            </div>
            <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:14px 16px">
              <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px">Module 2</div>
              <div style="font-size:13px;color:white;font-weight:600">Comportement félin en garde</div>
              <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:2px">2h30 visio</div>
            </div>
            <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:14px 16px">
              <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px">Module 3</div>
              <div style="font-size:13px;color:white;font-weight:600">Notions équines pour pet-sitter</div>
              <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:2px">2h visio</div>
            </div>
            <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:14px 16px">
              <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px">Module 4</div>
              <div style="font-size:13px;color:white;font-weight:600">Urgences comportementales &amp; sécurité</div>
              <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:2px">2h visio</div>
            </div>
            <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:14px 16px;grid-column:1/-1">
              <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px">Module 5</div>
              <div style="font-size:13px;color:white;font-weight:600">Organisation pratique · Accueil, contrat, bien-être en garde</div>
              <div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:2px">1h30 visio</div>
            </div>
          </div>
        </div>
        <div style="text-align:center;flex-shrink:0;min-width:160px">
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px">Formation complète</div>
          <div style="font-family:'Playfair Display',serif;font-size:52px;font-weight:900;color:var(--gold);line-height:1">349 €</div>
          <div style="font-size:11px;color:rgba(255,255,255,.35);margin-bottom:16px">5 modules visio · ~10h</div>
          <a href="mailto:contact@canifelink.fr?subject=Formation Pet-Sitting CANIFELINK" style="display:block;background:white;color:var(--teal-dark);padding:12px 20px;border-radius:50px;font-weight:800;font-size:14px;text-decoration:none;font-family:'Nunito',sans-serif;margin-bottom:8px">Je m'inscris →</a>
          <div style="font-size:11px;color:rgba(255,255,255,.3)">Réponse sous 24h</div>
        </div>
      </div>
    </div>

    <div class="g3">
      <div class="card">
        <div class="card-head" style="background:var(--teal-pale)">
          <span class="card-tag tag-teal">Débutants</span>
          <div class="card-name">Je me lance dans le pet-sitting</div>
          <div class="card-mode">0 expérience · Formation complète de A à Z</div>
        </div>
        <div class="card-body">
          <div class="price-big">349 €</div>
          <div class="price-note">5 modules visio · ~10h · Accès replay 6 mois</div>
          <ul class="incl">
            <li><span class="ck">✓</span>Les 5 modules complets (chien, chat, équin, urgences, pratique)</li>
            <li><span class="ck">✓</span>Supports PDF &amp; fiches mémo par espèce</li>
            <li><span class="ck">✓</span>Modèles de contrats &amp; fiches d'accueil</li>
            <li><span class="ck">✓</span>Accès replay 6 mois</li>
            <li><span class="ck">✓</span>Attestation de formation CANIFELINK</li>
            <li><span class="ck">✓</span>1 session Q&amp;R de groupe incluse</li>
          </ul>
          <a href="mailto:contact@canifelink.fr?subject=Formation Pet-Sitting Débutant" class="btn-card">Je m'inscris →</a>
        </div>
      </div>
      <div class="card featured">
        <div class="card-head" style="background:var(--teal)">
          <div class="ribbon" style="background:white;color:var(--teal)">Mise à niveau</div>
          <div class="card-name" style="color:white">Pet-sitter en activité</div>
          <div class="card-mode" style="color:rgba(255,255,255,.7)">Déjà en activité · Modules ciblés</div>
        </div>
        <div class="card-body">
          <div class="price-big">249 €</div>
          <div class="price-note">3 modules clés · ~6h · Accès replay 6 mois</div>
          <ul class="incl">
            <li><span class="ck">✓</span>Module 3 — Notions équines pour pet-sitter</li>
            <li><span class="ck">✓</span>Module 4 — Urgences comportementales &amp; sécurité</li>
            <li><span class="ck">✓</span>Module 5 — Organisation pratique avancée</li>
            <li><span class="ck">✓</span>Fiches mémo par espèce</li>
            <li><span class="ck">✓</span>Attestation de formation CANIFELINK</li>
          </ul>
          <a href="mailto:contact@canifelink.fr?subject=Formation Pet-Sitting Mise à niveau" class="btn-card">Je m'inscris →</a>
        </div>
      </div>
      <div class="card premium">
        <div class="card-head" style="background:var(--gold-light)">
          <div class="ribbon ribbon-gold">⭐ Premium</div>
          <div class="card-name">Formation + Stage présentiel</div>
          <div class="card-mode">Visio + 1 jour en Rhône · Mise en pratique</div>
        </div>
        <div class="card-body">
          <div class="price-big" style="color:var(--gold)">499 €</div>
          <div class="price-note">Formation complète visio + 1 journée présentiel Rhône · ≤ 8 participants</div>
          <ul class="incl">
            <li><span class="ck">✓</span>Les 5 modules visio complets</li>
            <li><span class="ck">✓</span>1 journée stage présentiel en Rhône (69)</li>
            <li><span class="ck">✓</span>Mises en situation réelles sur les 3 espèces</li>
            <li><span class="ck">✓</span>Observations comportementales en direct</li>
            <li><span class="ck">✓</span>Attestation de stage + formation CANIFELINK</li>
            <li><span class="ck">✓</span>Accès replay 12 mois</li>
          </ul>
          <a href="mailto:contact@canifelink.fr?subject=Formation Pet-Sitting Premium avec stage" class="btn-card" style="background:var(--gold)">Réserver ma place →</a>
          <div style="margin-top:10px;font-size:11px;color:var(--ink-soft);text-align:center">Places limitées · Dates sur demande</div>
        </div>
      </div>
    </div>

    <div class="note" style="margin-top:20px">
      📋 <strong>Complément réglementaire :</strong> Cette formation comportementale est complémentaire aux certifications obligatoires (ACACED). Elle ne s'y substitue pas mais vous apporte la maîtrise pratique du comportement animal qui fait la différence dans l'exercice quotidien du pet-sitting. Je peux vous orienter vers les organismes habilités pour l'ACACED si nécessaire.
    </div>
  </div>
</section>


<!-- SECTION 5 — MENTORING -->
<section class="section-dark" id="part5">
  <div class="label-tag">Mentoring &amp; Supervision</div>
  <h2 class="section-h2">Comportementalistes — Mentoring &amp; Supervision</h2>
  <p class="section-sub">Vous êtes comportementaliste débutant·e ou installé·e et vous cherchez un regard expert pour progresser, analyser un cas difficile ou développer votre activité.</p>

  <h3 style="font-family:'Playfair Display',serif;font-size:20px;color:white;margin-bottom:16px">Sessions flash — sans engagement</h3>
  <div class="g2" style="margin-bottom:36px">
    <div class="card">
      <div class="card-head" style="background:var(--teal-pale)">
        <span class="card-tag tag-teal">45 min · Visio</span>
        <div class="card-name">⚡ SOS Cas Complexe</div>
        <div class="card-mode">Face à un cas difficile ou inhabituel</div>
      </div>
      <div class="card-body">
        <div class="price-big">85 €</div>
        <div class="price-note">Réponse sous 48h · Sans engagement</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Analyse ensemble d'un cas complexe (agressivité sévère, comportement atypique…)</li>
          <li><span class="ck">✓</span>Aide à structurer votre approche &amp; protocole</li>
          <li><span class="ck">✓</span>Tri-espèces (chien, chat, cheval)</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=SOS Cas Complexe CANIFELINK" class="btn-card">Réserver →</a>
      </div>
    </div>
    <div class="card">
      <div class="card-head" style="background:var(--cream)">
        <span class="card-tag tag-teal">Écrit · Sans visio</span>
        <div class="card-name">📋 Revue de dossier</div>
        <div class="card-mode">Second regard sur un dossier client</div>
      </div>
      <div class="card-body">
        <div class="price-big">65 €</div>
        <div class="price-note">Retour écrit sous 72h · Sans visio</div>
        <ul class="incl">
          <li><span class="ck">✓</span>Vous envoyez votre anamnèse + observations</li>
          <li><span class="ck">✓</span>Retour écrit structuré : analyse + pistes + questions</li>
          <li><span class="ck">✓</span>Idéal pour les cas où un second regard suffit</li>
        </ul>
        <a href="mailto:contact@canifelink.fr?subject=Revue de dossier CANIFELINK" class="btn-card">Envoyer un dossier →</a>
      </div>
    </div>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:20px;color:white;margin-bottom:16px">Programmes d'accompagnement mensuel</h3>
  <div class="g2" style="margin-bottom:20px">
    <div class="mentor-card" style="border-color:var(--teal)">
      <div class="mentor-head" style="background:var(--teal-pale)">
        <span class="mentor-label" style="color:var(--teal)">Nouveaux comportementalistes · 0–2 ans</span>
        <div class="mentor-name" style="color:var(--teal-dark)">✨ L'Étincelle</div>
        <div class="mentor-cible" style="color:var(--ink-mid)">Tu te lances. Tu as besoin d'un regard bienveillant et expert pour confirmer, réorienter, avancer.</div>
        <div class="mentor-price"><span class="mentor-price-num" style="color:var(--teal)">290 €</span><span class="mentor-price-sfx" style="color:var(--ink-soft)">/mois</span></div>
      </div>
      <div class="mentor-body">
        <ul class="mentor-feats">
          <li><span class="mfi">📅</span>2 séances de mentorat individuel/mois (1h chacune)</li>
          <li><span class="mfi">📋</span>Revue de 2 cas clients/mois (retour écrit)</li>
          <li><span class="mfi">💬</span>Accès messagerie prioritaire (réponse 48h)</li>
          <li><span class="mfi">📚</span>Bibliothèque de ressources CANIFELINK</li>
          <li><span class="mfi">🎙</span>1 masterclass thématique/trimestre incluse</li>
        </ul>
        <div class="mentor-foot">
          <span class="mentor-engage">Engagement 3 mois minimum</span>
          <a href="mailto:contact@canifelink.fr?subject=Mentoring L'Étincelle" class="btn-card" style="font-size:13px;padding:10px 20px">Rejoindre →</a>
        </div>
      </div>
    </div>
    <div class="mentor-card">
      <div class="mentor-head" style="background:var(--cream)">
        <span class="mentor-label" style="color:var(--teal)">Nouveaux comportementalistes</span>
        <div class="mentor-name" style="color:var(--ink)">🌱 Premiers Pas</div>
        <div class="mentor-cible" style="color:var(--ink-mid)">Tu accumules des cas et as besoin d'un ancrage mensuel régulier, sans la densité de L'Étincelle.</div>
        <div class="mentor-price"><span class="mentor-price-num" style="color:var(--teal-dark)">190 €</span><span class="mentor-price-sfx" style="color:var(--ink-soft)">/mois</span></div>
      </div>
      <div class="mentor-body">
        <ul class="mentor-feats">
          <li><span class="mfi">📅</span>1 séance de mentorat individuel/mois (1h)</li>
          <li><span class="mfi">📋</span>Revue de 1 cas client/mois (retour écrit)</li>
          <li><span class="mfi">💬</span>Accès messagerie (réponse 72h)</li>
          <li><span class="mfi">📚</span>Bibliothèque de ressources CANIFELINK</li>
        </ul>
        <div class="mentor-foot">
          <span class="mentor-engage">Engagement 2 mois minimum</span>
          <a href="mailto:contact@canifelink.fr?subject=Mentoring Premiers Pas" class="btn-card" style="font-size:13px;padding:10px 20px">Rejoindre →</a>
        </div>
      </div>
    </div>
    <div class="mentor-card" style="border-color:var(--gold)">
      <div class="mentor-head" style="background:var(--gold-light)">
        <span class="mentor-label" style="color:#8B6A1A">Comportementalistes installés · 2+ ans</span>
        <div class="mentor-name" style="color:#8B6A1A">🚀 Montée en Gamme</div>
        <div class="mentor-cible" style="color:var(--ink-mid)">Tu exerces depuis 2+ ans. Tu veux progresser sur des cas complexes ou monter en compétences sur une espèce.</div>
        <div class="mentor-price"><span class="mentor-price-num" style="color:var(--gold)">160 €</span><span class="mentor-price-sfx" style="color:var(--ink-soft)">/mois</span></div>
      </div>
      <div class="mentor-body">
        <ul class="mentor-feats">
          <li><span class="mfi">📅</span>1 séance de supervision/mois (1h30)</li>
          <li><span class="mfi">🔬</span>Analyse approfondie de cas complexes</li>
          <li><span class="mfi">💬</span>Accès messagerie (réponse 72h)</li>
          <li><span class="mfi">🎙</span>Invitation aux masterclasses CANIFELINK</li>
        </ul>
        <div class="mentor-foot">
          <span class="mentor-engage">Sans engagement minimum</span>
          <a href="mailto:contact@canifelink.fr?subject=Supervision Montée en Gamme" class="btn-card" style="font-size:13px;padding:10px 20px;background:var(--gold)">Rejoindre →</a>
        </div>
      </div>
    </div>
    <div class="mentor-card" style="border-color:var(--purple)">
      <div class="mentor-head" style="background:var(--purple-light)">
        <span class="mentor-label" style="color:var(--purple)">Business &amp; positionnement</span>
        <div class="mentor-name" style="color:var(--purple)">🏆 De Praticien·ne à Expert·e</div>
        <div class="mentor-cible" style="color:var(--ink-mid)">Tu maîtrises la pratique. Tu veux développer ton offre, créer des formations et augmenter tes revenus.</div>
        <div class="mentor-price"><span class="mentor-price-num" style="color:var(--purple)">220 €</span><span class="mentor-price-sfx" style="color:var(--ink-soft)">/mois</span></div>
      </div>
      <div class="mentor-body">
        <ul class="mentor-feats">
          <li><span class="mfi">📅</span>1 séance stratégie + pratique/mois (1h30)</li>
          <li><span class="mfi">💼</span>Développement offre, tarifs, positionnement</li>
          <li><span class="mfi">🎓</span>Aide à la création de formations &amp; contenus</li>
          <li><span class="mfi">💬</span>Messagerie prioritaire (réponse 48h)</li>
        </ul>
        <div class="mentor-foot">
          <span class="mentor-engage">Engagement 3 mois minimum</span>
          <a href="mailto:contact@canifelink.fr?subject=Mentoring De Praticien à Expert" class="btn-card" style="font-size:13px;padding:10px 20px;background:var(--purple)">Rejoindre →</a>
        </div>
      </div>
    </div>
  </div>

  <h3 style="font-family:'Playfair Display',serif;font-size:20px;color:white;margin:28px 0 16px">Masterclasses thématiques · Ouvertes à tous les pros</h3>
  <div class="t-wrap">
    <table>
      <thead><tr><th style="width:55%">Masterclass</th><th>Tarif</th><th>Durée</th></tr></thead>
      <tbody>
        <tr><td class="td-title"><strong>Cas complexes d'agressivité canine — analyse en groupe</strong><small>Cas réels anonymisés · Discussion encadrée · Comportementalistes, éducateurs</small></td><td class="td-price">49 €</td><td>2h</td></tr>
        <tr><td class="td-title"><strong>Éthologie féline avancée — cognition &amp; émotions</strong><small>Dernières recherches scientifiques appliquées à la pratique</small></td><td class="td-price">49 €</td><td>2h</td></tr>
        <tr><td class="td-title"><strong>Comportement équin — cas cliniques</strong><small>Cas rares, approches éthologiques équines, protocoles</small></td><td class="td-price td-price-gold">59 €</td><td>2h</td></tr>
        <tr><td class="td-title"><strong>Lancer son activité de comportementaliste</strong><small>Tarifs, statuts, premiers clients — retour d'expérience</small></td><td class="td-price">79 €</td><td>2h30</td></tr>
        <tr><td class="td-title"><strong>🎁 Pack 5 masterclasses</strong><small>Accès aux 5 prochaines masterclasses du catalogue</small></td><td class="td-price" style="color:var(--green)">199 €</td><td>Variable</td></tr>
      </tbody>
    </table>
  </div>
</section>


<!-- CTA FINAL -->
<section class="tarifs-cta-final" id="rdv">
  <div style="position:relative;z-index:1">
    <h2>Une question sur vos tarifs ?<br>Échangeons ensemble.</h2>
    <p>Premier contact gratuit · Réponse sous 24h · Sans engagement</p>
    <div class="cta-btns">
      <a href="/prendre-rendez-vous" class="btn-white">📅 Prendre rendez-vous</a>
      <a href="https://wa.me/33677317068?text=Bonjour%20CANIFELINK%2C%20j'ai%20une%20question%20sur%20vos%20tarifs" target="_blank" rel="noopener noreferrer" class="btn-wa">💬 WhatsApp</a>
    </div>
    <p class="guarantee">✓ Tarifs 2025 · Hors frais de déplacement présentiel · Suivi 30j inclus dans toutes les consultations</p>
  </div>
</section>
`;

export default function TarifsClient() {
  useEffect(() => {
    const sections = ["part1", "part2", "part3", "part4", "petsitting", "part5"];
    const buttons = document.querySelectorAll(".pill-btn");

    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    buttons.forEach((btn) => {
      const target = btn.dataset.target;
      if (target) {
        btn.addEventListener("click", () => scrollToSection(target));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.indexOf(e.target.id);
            if (idx > -1) {
              buttons.forEach((b, i) =>
                b.classList.toggle("active", i === idx)
              );
            }
          }
        });
      },
      { rootMargin: "-130px 0px -60% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}
