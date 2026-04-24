import FaqAccordion from "@/app/components/FaqAccordion";
import content from "@/content/home.json";

export default function HomePage() {
  const c = content;

  // badge mapping for species cards
  const badgeClass = { dog: "badge-dog", cat: "badge-cat", horse: "badge-niche" };
  const topClass   = { dog: "top-dog",   cat: "top-cat",   horse: "top-horse"  };

  return (
    <>
      {/* HERO */}
      <header className="hero" role="banner">
        <div className="hero-left">
          <div className="badge-live" aria-label="Disponibilités">
            <span className="badge-dot" aria-hidden="true"></span>
            {c.hero.badge}
          </div>
          <h1>
            {c.hero.h1_line1}
            <br /><em>{c.hero.h1_em}</em>
            <br />{c.hero.h1_line3}
          </h1>
          <p className="hero-sub">{c.hero.sub}</p>
          <div className="hero-proof" aria-label="Avis clients">
            <span className="proof-stars" aria-hidden="true">★★★★★</span>
            <span className="proof-text">{c.hero.proof}</span>
          </div>
          <div className="hero-actions">
            <a href="#rdv" className="btn-main" aria-label="Prendre rendez-vous avec CANIFELINK">{c.hero.cta_rdv}</a>
            <a href="/formations" className="btn-ghost">{c.hero.cta_formations}</a>
          </div>
          <div className="hero-chips" aria-label="Espèces et modes de consultation">
            {c.hero.chips.map((chip, i) => <span key={i} className="chip">{chip}</span>)}
          </div>
        </div>
        <div className="hero-right" aria-hidden="true">
          <div className="portrait-wrap">
            <div className="pc pc-manue">
              <img src="/mnt/user-data/uploads/Logo_2025_canifelink.png" alt="Manue, comportementaliste CANIFELINK" style={{width:"200%",height:"200%",objectFit:"cover",objectPosition:"top left",transform:"scale(.85) translate(-10%,-10%)"}} />
              <span className="pc-label">MANUE</span>
            </div>
            <div className="pc pc-dog"><img src="/img/husky.jpg" alt="Chien" style={{width:"100%",height:"100%",objectFit:"cover"}} /><span className="pc-label">CHIEN</span></div>
            <div className="pc pc-horse"><img src="/img/cheval.jpg" alt="Cheval" style={{width:"100%",height:"100%",objectFit:"cover"}} /><span className="pc-label">CHEVAL</span></div>
            <div className="pc pc-cat"><img src="/img/maine-coon.jpg" alt="Chat" style={{width:"100%",height:"100%",objectFit:"cover"}} /><span className="pc-label">CHAT</span></div>
            <div className="pc-center">CANI<br />FELINK</div>
          </div>
        </div>
      </header>

      {/* BAND */}
      <div className="band" role="complementary" aria-label="Points clés CANIFELINK">
        <div className="band-items">
          {c.band.map((item, i) => (
            <span key={i}>
              <div className="band-item">{item}</div>
              {i < c.band.length - 1 && <span className="band-sep" aria-hidden="true">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="pain-section" aria-labelledby="pain-title">
        <div className="pain-intro">
          <div className="label-tag">{c.painPoints.label}</div>
          <h2 className="section-title" id="pain-title">{c.painPoints.title_line1}</h2>
          <p className="section-sub" style={{textAlign:"center",margin:"0 auto"}}>{c.painPoints.intro}</p>
        </div>
        <div className="pain-grid">
          {c.painPoints.items.map((item, i) => (
            <div key={i} className="pain-card">
              <span className="pain-icon"><img src={item.img} alt={item.alt} style={{width:"56px",height:"56px",borderRadius:"50%",objectFit:"cover",display:"block"}} /></span>
              <p className="pain-q">{item.q}</p>
              <p className="pain-a">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="pain-cta-row">
          <a href="#rdv" className="btn-teal">{c.painPoints.cta}</a>
        </div>
      </section>

      {/* ESPÈCES */}
      <section className="species-section" aria-labelledby="species-title">
        <div className="species-intro">
          <div>
            <div className="label-tag">{c.species.label}</div>
            <h2 className="section-title" id="species-title">{c.species.title_line1}<br />{c.species.title_line2}</h2>
          </div>
          <p className="section-sub">{c.species.intro}</p>
        </div>
        <div className="species-grid">
          {c.species.items.map((sp, i) => (
            <article key={i} className="species-card">
              <div className={`species-top ${topClass[sp.theme]}`}>
                <div className="brush-ring"><img src={sp.img} alt={sp.alt} className="species-img" /></div>
                <span className={`sp-badge ${badgeClass[sp.theme]}`}>{sp.badge}</span>
              </div>
              <div className="species-body">
                <h3 className="species-name">{sp.name}</h3>
                <p className="species-desc">{sp.desc}</p>
                <div className="prob-tags">
                  {sp.tags.map((tag, j) => <span key={j} className="ptag">{tag}</span>)}
                </div>
                <a href={sp.href} className="species-cta-link">{sp.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="how-section" aria-labelledby="how-title">
        <div className="how-header">
          <div className="label-tag" style={{justifyContent:"center"}}>{c.howSteps.label}</div>
          <h2 className="section-title" id="how-title" style={{textAlign:"center"}}>{c.howSteps.title}</h2>
          <p className="section-sub" style={{textAlign:"center",margin:"0 auto"}}>{c.howSteps.intro}</p>
        </div>
        <div className="steps-grid">
          {c.howSteps.items.map((step, i) => (
            <div key={i} className="step">
              <div className="step-num" aria-label={`Étape ${step.num}`}>{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-reassurance">
          {c.howSteps.reassurance.map((item, i) => <div key={i} className="reassure-item">{item}</div>)}
        </div>
      </section>

      {/* À PROPOS */}
      <section className="about-section" aria-labelledby="about-title">
        <div className="about-grid">
          <div style={{position:"relative",display:"flex",justifyContent:"center"}}>
            <div className="manue-portrait">
              <img src="/mnt/user-data/uploads/Logo_2025_canifelink.png" alt="Manue, comportementaliste certifiée CANIFELINK, Rhône 69" style={{width:"110%",height:"110%",objectFit:"cover",objectPosition:"top left"}} />
            </div>
            <div className="float-bub bub1" aria-hidden="true"><img src="/img/bulldog.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
            <div className="float-bub bub2" aria-hidden="true"><img src="/img/cheval.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
            <div className="float-bub bub3" aria-hidden="true"><img src="/img/maine-coon.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
          </div>
          <div>
            <div className="label-tag">{c.about.label}</div>
            <h2 className="section-title" id="about-title">
              {c.about.title_line1}<br />{c.about.title_line2}<br />{c.about.title_line3}
            </h2>
            <p>{c.about.text}</p>
            <blockquote className="about-quote">{c.about.quote}</blockquote>
            <div className="certif-list">
              {c.about.certifs.map((cert, i) => (
                <div key={i} className="certif-row">
                  <span className="certif-ico">{cert.icon}</span>
                  <div><strong>{cert.title}</strong><span>{cert.sub}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar" role="complementary" aria-label="Chiffres clés CANIFELINK">
        <div className="stats-inner">
          {c.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TÉMOIGNAGES */}
      <section className="testi-section" aria-labelledby="testi-title">
        <div className="testi-header">
          <div>
            <div className="label-tag">{c.testimonials.label}</div>
            <h2 className="section-title" id="testi-title">
              {c.testimonials.title_line1}<br />{c.testimonials.title_line2}
            </h2>
          </div>
          <a href="https://www.google.com/search?q=CANIFELINK+avis" target="_blank" rel="noopener noreferrer" style={{color:"var(--teal)",fontWeight:700,fontSize:"14px",textDecoration:"none"}}>Tous les avis Google →</a>
        </div>
        <div className="testi-grid">
          {c.testimonials.items.map((t, i) => (
            <div key={i} className={`testi-card${t.featured ? " star" : ""}`} itemScope itemType="https://schema.org/Review">
              <span className={`sp-pill ${t.pillClass}`}>{t.pill}</span>
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="testi-text" itemProp="reviewBody">{t.text}</p>
              <div className="testi-bot">
                <div>
                  <div className="testi-name" itemProp="author">{t.author}</div>
                  <div className="testi-loc">{t.loc}</div>
                </div>
                <div className="testi-stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <span itemProp="ratingValue" content="5">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"36px"}}>
          <a href="https://www.google.com/search?q=CANIFELINK+avis" target="_blank" rel="noopener noreferrer" className="google-badge">
            <span className="google-g">G</span>
            <span>Voir nos 120+ avis Google</span>
            <span style={{color:"var(--gold)"}}>★★★★★ 4,9</span>
          </a>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-inner">
          <div>
            <div className="label-tag">{c.faq.label}</div>
            <h2 className="section-title" id="faq-title">{c.faq.title_line1}</h2>
            <FaqAccordion items={c.faq.items} />
          </div>
          <div id="rdv" className="faq-cta-box">
            <h3>{c.faq.ctaTitle}</h3>
            <p>{c.faq.ctaText}</p>
            <ul>
              {c.faq.ctaList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <a href="mailto:contact@canifelink.fr?subject=Demande%20de%20consultation%20CANIFELINK" className="btn-white">
              📅 Prendre rendez-vous
            </a>
            <a href="https://wa.me/33XXXXXXXXX?text=Bonjour%20CANIFELINK%2C%20je%20voudrais%20prendre%20rendez-vous" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 Contacter via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DIFFÉRENCIATEURS */}
      <section className="diff-section" aria-labelledby="diff-title">
        <div className="label-tag">{c.differentiateurs.label}</div>
        <h2 className="section-title" id="diff-title" style={{color:"white"}}>
          {c.differentiateurs.title_line1}<br />{c.differentiateurs.title_line2}
        </h2>
        <div className="diff-grid">
          {c.differentiateurs.items.map((d, i) => (
            <div key={i} className="diff-card">
              <span className="diff-icon" aria-hidden="true">{d.icon}</span>
              <h3 className="diff-title">{d.title}</h3>
              <p className="diff-text">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="formation-section" aria-labelledby="formation-title">
        <div className="formation-grid">
          <div>
            <div className="label-tag">{c.formations.label}</div>
            <h2 className="section-title" id="formation-title">
              {c.formations.title_line1}<br />{c.formations.title_line2}<br />{c.formations.title_line3}
            </h2>
            <p style={{fontSize:"16px",color:"var(--ink-mid)",lineHeight:1.8,marginBottom:"20px"}}>{c.formations.intro}</p>
            <a href="/formations" className="btn-teal">{c.formations.cta}</a>
          </div>
          <div>
            {c.formations.items.map((f, i) => (
              <div key={i} className={`f-card${f.gold ? " f-gold" : ""}`}>
                <div>
                  <div className="f-card-title">{f.title}</div>
                  <div className="f-card-meta">{f.meta}</div>
                </div>
                <div className="f-price">{f.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section" aria-labelledby="blog-title">
        <div className="blog-header">
          <div>
            <div className="label-tag">{c.blog.label}</div>
            <h2 className="section-title" id="blog-title">
              {c.blog.title_line1}<br />{c.blog.title_line2}
            </h2>
          </div>
          <a href="/blog" style={{color:"var(--teal)",fontWeight:700,fontSize:"14px",textDecoration:"none"}}>Tous les articles →</a>
        </div>
        <div className="blog-grid">
          {c.blog.items.map((post, i) => (
            <article key={i} className={`blog-card${post.big ? " big" : ""}`}>
              <div className={`blog-top ${post.bgClass}`}><img src={post.img} alt={post.alt} style={{width:"100%",height:"100%",objectFit:"cover"}} /></div>
              <div className="blog-body">
                <span className={`blog-cat ${post.catClass}`}>{post.cat}</span>
                <h3 className="blog-h">{post.title}</h3>
                {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                <div className="blog-foot">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" aria-labelledby="cta-title">
        <div className="cta-final-inner">
          <h2 id="cta-title">
            {c.ctaFinal.title_line1}<br />{c.ctaFinal.title_line2}
          </h2>
          <p>{c.ctaFinal.text}</p>
          <div className="cta-final-btns">
            <a href="/prendre-rendez-vous" className="btn-cta-white">{c.ctaFinal.btn_rdv}</a>
            <a href="mailto:contact@canifelink.fr" className="btn-cta-ghost">{c.ctaFinal.btn_email}</a>
          </div>
          <p className="cta-guarantee">{c.ctaFinal.guarantee}</p>
        </div>
      </section>
    </>
  );
}
