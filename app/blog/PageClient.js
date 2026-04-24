"use client";
import { useEffect } from "react";

const PAGE_HTML = `
<!-- HERO BLOG -->
<header class="blog-hero" role="banner" aria-labelledby="blog-h1">
  <div style="max-width:900px;margin:0 auto">
    <div class="label-tag" style="color:rgba(255,255,255,.5)">Ressources gratuites</div>
    <h1 id="blog-h1">Blog comportement animal<br><span style="opacity:.75;font-size:.8em;">Comprendre, c'est déjà agir</span></h1>
    <p style="font-size:17px;color:rgba(255,255,255,.75);max-width:540px;line-height:1.75;margin-top:12px">
      Articles, conseils pratiques et analyses comportementales basés sur l'éthologie. Pour tous les propriétaires qui veulent mieux comprendre leur chien, chat ou cheval.
    </p>
  </div>
</header>

<!-- FILTRES -->
<div style="background:white;padding:32px 52px;border-bottom:1px solid var(--teal-light)">
  <div style="max-width:1000px;margin:0 auto">
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="blog-filter active" onclick="filterBlog(this,'all')">Tous</button>
      <button class="blog-filter" onclick="filterBlog(this,'chien')">🐕 Chien</button>
      <button class="blog-filter" onclick="filterBlog(this,'chat')">🐈 Chat</button>
      <button class="blog-filter" onclick="filterBlog(this,'cheval')">🐴 Cheval</button>
      <button class="blog-filter" onclick="filterBlog(this,'guides')">📄 Guides</button>
    </div>
  </div>
</div>

<!-- ARTICLES -->
<section style="background:var(--cream);padding:64px 52px" aria-label="Articles du blog">
  <div style="max-width:1000px;margin:0 auto">

    <!-- ARTICLE VEDETTE -->
    <div class="blog-guide-featured" style="margin-bottom:40px">
      <article class="blog-card big" style="width:100%;margin:0" data-category="chien">
        <div class="blog-top bg-dog" style="height:240px">🐕</div>
        <div class="blog-body">
          <span class="blog-cat cat-dog">Chien</span>
          <h2 class="blog-h" style="font-size:24px">Border Collie : comprendre l'hyperactivité comportementale (pas juste de l'énergie)</h2>
          <p class="blog-excerpt">Ce n'est pas un chien « difficile » — c'est un chien avec des besoins cognitifs spécifiques non comblés. L'éthologie permet de comprendre ces besoins et d'y répondre autrement qu'avec des heures de sport intense...</p>
          <div class="blog-foot">
            <span class="blog-date">12 mars 2025</span>
            <a href="/prendre-rendez-vous" style="color:var(--teal);font-weight:700;font-size:13px;text-decoration:none">Lire l'article → (bientôt disponible)</a>
          </div>
        </div>
      </article>
    </div>

    <!-- GRILLE D'ARTICLES -->
    <div class="blog-list">

      <article class="blog-list-card" data-category="chat">
        <div style="height:140px;background:linear-gradient(145deg,#FBF2DC,#F0E0A8);display:flex;align-items:center;justify-content:center;font-size:64px">🐈</div>
        <div style="padding:18px">
          <span class="blog-cat cat-cat">Chat</span>
          <h3 class="blog-h">Pourquoi votre chat griffe le canapé (et comment l'aider vraiment)</h3>
          <p class="blog-excerpt">La griffade est un besoin naturel et vital pour le chat. La punir n'est pas une solution. Voici comment comprendre et réorienter ce comportement...</p>
          <div class="blog-foot">
            <span class="blog-date">3 mars 2025</span>
            <span class="blog-read">5 min</span>
          </div>
        </div>
      </article>

      <article class="blog-list-card" data-category="cheval">
        <div style="height:140px;background:linear-gradient(145deg,var(--teal-pale),var(--teal-light));display:flex;align-items:center;justify-content:center;font-size:64px">🐴</div>
        <div style="padding:18px">
          <span class="blog-cat cat-horse">Cheval</span>
          <h3 class="blog-h">Les signaux de stress équins que tout cavalier devrait reconnaître</h3>
          <p class="blog-excerpt">Oreilles en arrière, mâchoire contractée, queue agitée — le cheval vous parle constamment. Apprenez à décoder les 12 signaux de stress les plus courants...</p>
          <div class="blog-foot">
            <span class="blog-date">18 fév. 2025</span>
            <span class="blog-read">6 min</span>
          </div>
        </div>
      </article>

      <article class="blog-list-card" data-category="chien">
        <div style="height:140px;background:linear-gradient(145deg,#E8F6EF,#C8E8D8);display:flex;align-items:center;justify-content:center;font-size:64px">🐕</div>
        <div style="padding:18px">
          <span class="blog-cat cat-dog">Chien</span>
          <h3 class="blog-h">Anxiété de séparation : les 5 erreurs que tous les propriétaires font</h3>
          <p class="blog-excerpt">Câlins excessifs au départ, punitions au retour, acheter un deuxième chien — ces « solutions » aggravent souvent le problème. Voici pourquoi...</p>
          <div class="blog-foot">
            <span class="blog-date">5 fév. 2025</span>
            <span class="blog-read">7 min</span>
          </div>
        </div>
      </article>

      <article class="blog-list-card" data-category="chat">
        <div style="height:140px;background:linear-gradient(145deg,#FBF2DC,#F0E0A8);display:flex;align-items:center;justify-content:center;font-size:64px">🐈</div>
        <div style="padding:18px">
          <span class="blog-cat cat-cat">Chat</span>
          <h3 class="blog-h">Chat qui urine hors litière : les 8 causes les plus fréquentes</h3>
          <p class="blog-excerpt">Avant de punir ou de désespérer, vérifiez ces 8 causes — médicales et comportementales. Dans 90% des cas, le problème est identifiable et traitable...</p>
          <div class="blog-foot">
            <span class="blog-date">22 jan. 2025</span>
            <span class="blog-read">6 min</span>
          </div>
        </div>
      </article>

      <article class="blog-list-card" data-category="cheval">
        <div style="height:140px;background:linear-gradient(145deg,var(--teal-pale),var(--teal-light));display:flex;align-items:center;justify-content:center;font-size:64px">🐴</div>
        <div style="padding:18px">
          <span class="blog-cat cat-horse">Cheval</span>
          <h3 class="blog-h">Comprendre pourquoi votre cheval refuse d'entrer dans le van</h3>
          <p class="blog-excerpt">Ce refus n'est pas de l'entêtement. C'est de la peur, souvent liée à une mauvaise expérience passée. Voici comment l'aborder sans forcer...</p>
          <div class="blog-foot">
            <span class="blog-date">10 jan. 2025</span>
            <span class="blog-read">8 min</span>
          </div>
        </div>
      </article>

      <article class="blog-list-card" data-category="chien">
        <div style="height:140px;background:linear-gradient(145deg,#E8F6EF,#C8E8D8);display:flex;align-items:center;justify-content:center;font-size:64px">🐕</div>
        <div style="padding:18px">
          <span class="blog-cat cat-dog">Chien</span>
          <h3 class="blog-h">Chien réactif en laisse : comprendre avant d'entraîner</h3>
          <p class="blog-excerpt">La réactivité en laisse est presque toujours de la peur mal gérée, pas de l'agressivité. La distinction change tout dans l'approche thérapeutique...</p>
          <div class="blog-foot">
            <span class="blog-date">3 jan. 2025</span>
            <span class="blog-read">5 min</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- GUIDE TÉLÉCHARGEABLE -->
<section aria-labelledby="guide-title" style="padding:64px 52px;background:white">
  <div style="max-width:1000px;margin:0 auto">
    <div class="blog-guide-box">
      <div>
        <span style="font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:8px;display:block">Guide gratuit</span>
        <h3 id="guide-title">Comprendre son chien<br>en 10 comportements clés</h3>
        <p>Un guide PDF pratique et illustré pour décoder les 10 comportements les plus courants — et ce qu'ils signifient vraiment. Gratuit, immédiatement téléchargeable.</p>
        <a href="/prendre-rendez-vous" class="btn-main" style="background:white;color:var(--teal-dark)">Recevoir le guide →</a>
      </div>
      <div style="text-align:center">
        <div style="font-size:100px;filter:drop-shadow(0 20px 40px rgba(0,0,0,.2))">📄</div>
        <p style="font-size:12px;color:rgba(255,255,255,.5);margin-top:10px">PDF · 12 pages · Gratuit</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA DANS CHAQUE ARTICLE (bas de page) -->
<section class="cta-final" aria-labelledby="cta-blog-title">
  <div class="cta-final-inner">
    <h2 id="cta-blog-title">Un article vous a<br>inspiré une question ?</h2>
    <p>Passez de la théorie à la pratique — une consultation comportementaliste personnalisée pour traiter la situation spécifique de votre animal.</p>
    <div class="cta-final-btns">
      <a href="/prendre-rendez-vous" class="btn-cta-white">📅 Prendre rendez-vous</a>
      <a href="/comportementaliste-chien-rhone" class="btn-cta-ghost">Voir tous nos services →</a>
    </div>
    <p class="cta-guarantee">✓ Premier échange gratuit · Réponse sous 24h · Suivi inclus</p>
  </div>
</section>
`;

export default function BlogPage() {
  useEffect(() => {
    window.filterBlog = function filterBlog(btn, cat) {
      // Update active button
      document.querySelectorAll(".blog-filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // Show/hide articles
      document.querySelectorAll("[data-category]").forEach((card) => {
        if (cat === "all" || card.dataset.category === cat) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    };
    return () => { delete window.filterBlog; };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}
