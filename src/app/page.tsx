"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const store = "https://www.nailmasterdallas.com";
const categories = [
  { name: "COLOR GELS", image: "/images/categories/color-gels.png", href: "/collections/color-gels" },
  { name: "DUST COLLECTORS", image: "/images/product-dust-collector.jpg", href: "/search?q=dust+collector" },
  { name: "NAIL LAMPS", image: "/images/product-lamp.jpg", href: "/collections/lamps" },
  { name: "NAIL TOOLS", image: "/images/categories/tools.jpg", href: "/collections/professional-nail-tools" },
  { name: "NAIL ART", image: "/images/categories/design.jpg", href: "/collections/design" },
  { name: "BRUSHES", image: "/images/categories/brushes.jpg", href: "/collections/brushes" },
];
const products = [
  { name: "LUXIO® Sterling", brand: "AKZENTZ", price: "$19.95", image: "/images/product-sterling.png", href: "/products/luxio®-by-akzentz-sterling-15ml-bottle" },
  { name: "LUXIO® Noir", brand: "AKZENTZ", price: "$19.95", image: "/images/product-noir.png", href: "/products/luxio®-by-akzentz-noir-15ml-bottle" },
  { name: "LUXIO® Persuasion", brand: "AKZENTZ", price: "$19.95", image: "/images/product-persuasion.png", href: "/products/luxio®-by-akzentz-persuasion-15ml-bottle" },
  { name: "Bottle ’N Go — Rouge Flash", brand: "KOKOIST", price: "$16.50", image: "/images/product-rouge.png", href: "/products/kokoist-bottle-n-go-bc-31-rouge-flash" },
  { name: "LUXIO® Melon", brand: "AKZENTZ", price: "Explore", image: "/images/product-melon.png", href: "/search?q=Luxio+Melon" },
];
const steps = [
  { title: "PREP", copy: "Shape, refine, and prepare the nail plate for a clean, lasting foundation.", image: "/images/categories/nail-bits.jpg", link: "/collections/bits" },
  { title: "BASE", copy: "Build a reliable foundation with professional bases and adhesion essentials.", image: "/images/categories/bases.png", link: "/collections/acrygel-and-fiberglass" },
  { title: "BUILD", copy: "Create strength and structure with salon-ready builder systems.", image: "/images/product-rose-quartz.png", link: "/collections/acrygel-and-fiberglass" },
  { title: "COLOR", copy: "Find the perfect shade, finish, and magnetic effect for every client.", image: "/images/categories/color-gels.png", link: "/collections/color-gels" },
  { title: "TOP COAT", copy: "Seal your work with gloss, strength, and a beautiful final finish.", image: "/images/categories/tops.png", link: "/collections/tops" },
  { title: "CARE", copy: "Finish the service with thoughtful hand, foot, and cuticle care.", image: "/images/categories/pedicure.jpg", link: "/collections/pedicure-foot-care" },
];
const collections = [
  { name: "Bases", image: "/images/categories/bases.png", href: "/collections/acrygel-and-fiberglass" },
  { name: "Top coats", image: "/images/categories/tops.png", href: "/collections/tops" },
  { name: "Color gels", image: "/images/categories/color-gels.png", href: "/collections/color-gels" },
  { name: "Chrome & powders", image: "/images/categories/chromes.jpg", href: "/collections/chrome-powders" },
  { name: "Nail art", image: "/images/categories/design.jpg", href: "/collections/design" },
  { name: "Brushes", image: "/images/categories/brushes.jpg", href: "/collections/brushes" },
  { name: "Professional tools", image: "/images/categories/tools.jpg", href: "/collections/professional-nail-tools" },
  { name: "Nail bits", image: "/images/categories/nail-bits.jpg", href: "/collections/bits" },
];

function ProductRow({ title, id }: { title: string; id?: string }) {
  return <section className="product-section" id={id}>
    <div className="section-top"><h2>{title}</h2><a href={`${store}/collections/all`}>SHOP ALL <span>↗</span></a></div>
    <div className="product-track">{products.map((product) => <article className="product-card" key={`${title}-${product.name}`}>
      <a className="product-image" href={`${store}${product.href}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 650px) 46vw, 19vw" /></a>
      <div className="product-details"><span className="product-brand">{product.brand}</span><h3><a href={`${store}${product.href}`}>{product.name}</a></h3><p className="price">{product.price}</p></div>
      <a className="outline-button" href={`${store}${product.href}`}>VIEW PRODUCT</a>
    </article>)}</div>
  </section>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);
  const moveCategories = (direction: number) => categoryRef.current?.scrollBy({ left: direction * 345, behavior: "smooth" });
  const current = steps[step];
  return <>
    <div className="announcement"><span>FREE US SHIPPING ON ORDERS OVER $150</span><span className="announcement-social"><a href="https://www.instagram.com/nailmasterdallas/" aria-label="Instagram">◎</a> <a href={`${store}/pages/about-us`} aria-label="About Nail Master Dallas">✦</a></span></div>
    <header className="site-header">
      <div className="header-main">
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>☰</button>
        <a className="logo" href="#top" aria-label="Nail Master Dallas home"><Image src="/images/nmd-logo.png" alt="Nail Master Dallas" width={74} height={74} priority /></a>
        <form className="search" action={`${store}/search`}><span aria-hidden="true">⌕</span><input name="q" aria-label="Search products" placeholder="Search products, brands, tools..." /><button type="submit">Search</button></form>
        <div className="header-actions"><a href={`${store}/account`}><span>♙</span><b>Log in</b></a><a href={`${store}/cart`}><span>♧</span><b>Cart</b></a></div>
      </div>
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <a href={`${store}/collections/all`}>SHOP ALL</a><a href="#new">NEW</a><a href={`${store}/collections/color-gels`}>NAIL GELS</a><a href="#equipment">EQUIPMENT & TOOLS</a><a href={`${store}/collections/pedicure-foot-care`}>HAND & FOOT CARE</a><a href="#bestsellers">BESTSELLERS</a><a href="#collections">CATEGORIES</a><a href={`${store}/collections/nmd-school-classes`}>ACADEMY</a>
      </nav>
    </header>
    <main id="top">
      <section className="promo"><h1>Tools for every nail artist. Everything in one place.</h1><p>Professional essentials, exceptional brands, and the next thing your studio needs.</p><a href={`${store}/collections/all`}>DISCOVER THE COLLECTION <span>↗</span></a></section>
      <section className="hero" aria-label="Featured collection"><Image src="/images/hero-echo.jpg" alt="Luxio Echo nail collection" fill priority sizes="100vw" /><div className="hero-overlay"><span>NEW & NOTEWORTHY / 2027</span><h2>THE ECHO<br /><em>COLLECTION</em></h2><p>Fresh color. A new season of possibility.</p><a className="hero-button" href={`${store}/collections/echo-fall-winter-collection-by-luxio`}>SHOP THE COLLECTION <span>↗</span></a></div></section>
      <section className="category-section" aria-label="Shop by category"><button onClick={() => moveCategories(-1)} aria-label="Previous categories">‹</button><div className="category-track" ref={categoryRef}>{categories.map((item) => <a className="category-card" href={`${store}${item.href}`} key={item.name}><Image src={item.image} alt="" fill sizes="(max-width: 650px) 65vw, 27vw" /><span>{item.name}</span></a>)}</div><button onClick={() => moveCategories(1)} aria-label="Next categories">›</button></section>
      <ProductRow title="MOST LOVED AT NMD" id="bestsellers" />
      <section className="step-section"><div className="section-top"><h2>SHOP BY STEP</h2><div className="step-arrows"><button onClick={() => setStep((step + 5) % 6)} aria-label="Previous step">←</button><button onClick={() => setStep((step + 1) % 6)} aria-label="Next step">→</button></div></div><div className="step-layout"><div className="step-copy"><span className="step-kicker">STEP <strong>{String(step + 1).padStart(2, "0")}</strong> / 06</span><h3>{current.title}</h3><p>{current.copy}</p><a href={`${store}${current.link}`}>SHOP {current.title} <span>↗</span></a><div className="step-tabs">{steps.map((item, index) => <button className={step === index ? "active" : ""} onClick={() => setStep(index)} key={item.title}>{item.title}</button>)}</div></div><div className="step-image"><Image src={current.image} alt={`${current.title} products`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
      <section className="feature-grid" id="equipment"><a href={`${store}/collections/lamps`} className="feature feature-large"><Image src="/images/product-lamp.jpg" alt="Professional nail lamp" fill sizes="(max-width: 700px) 100vw, 60vw" /><div><span>THE STUDIO EDIT</span><h2>LIGHTING THAT<br />WORKS WITH YOU.</h2><b>SHOP NAIL LAMPS ↗</b></div></a><a href={`${store}/search?q=dust+collector`} className="feature feature-small"><Image src="/images/product-dust-collector.jpg" alt="Professional nail dust collector" fill sizes="(max-width: 700px) 100vw, 40vw" /><div><span>STUDIO ESSENTIALS</span><h2>DUST COLLECTORS</h2><b>EXPLORE EQUIPMENT ↗</b></div></a></section>
      <ProductRow title="WHAT’S NEW" id="new" />
      <section className="collection-section" id="collections"><div className="section-top"><h2>FIND WHAT YOU NEED</h2><a href={`${store}/collections`}>VIEW ALL CATEGORIES ↗</a></div><div className="collection-grid">{collections.map((item) => <a href={`${store}${item.href}`} key={item.name}><div className="collection-image"><Image src={item.image} alt="" fill sizes="(max-width: 650px) 45vw, 24vw" /></div><h3>{item.name}</h3><span>SHOP ALL ↗</span></a>)}</div></section>
      <section className="academy"><div><span>NMD ACADEMY</span><h2>Grow your craft.<br />Make your mark.</h2><p>Education and inspiration for ambitious nail artists in Dallas and beyond.</p><a href={`${store}/collections/nmd-school-classes`}>EXPLORE CLASSES ↗</a></div><Image src="/images/editorial-nails.jpg" alt="Nail studio equipment" fill sizes="(max-width: 700px) 100vw, 50vw" /></section>
      <div className="benefits"><div><strong>FREE SHIPPING</strong><span>On continental US orders over $150</span></div><div><strong>CURATED FOR PROS</strong><span>Tools chosen for working nail artists</span></div><div><strong>YOUR DALLAS PARTNER</strong><span>Products, equipment, and education</span></div></div>
    </main>
    <footer><div className="footer-columns"><div><Image src="/images/nmd-logo.png" alt="Nail Master Dallas" width={84} height={84} /><p>Professional nail essentials, expertly curated in Dallas.</p></div><div><h3>SHOP</h3><a href={`${store}/collections/color-gels`}>Color gels</a><a href={`${store}/collections/lamps`}>Equipment</a><a href={`${store}/collections/professional-nail-tools`}>Professional tools</a><a href={`${store}/collections/design`}>Nail art</a></div><div><h3>HELP</h3><a href={`${store}/policies/shipping-policy`}>Shipping policy</a><a href={`${store}/policies/refund-policy`}>Returns & refunds</a><a href={`${store}/policies/contact-information`}>Contact</a><a href={`${store}/policies/privacy-policy`}>Privacy policy</a></div><div><h3>STAY CONNECTED</h3><p>Follow along for new arrivals, techniques, and studio inspiration.</p><a href="https://www.instagram.com/nailmasterdallas/">INSTAGRAM ↗</a></div></div><div className="footer-bottom"><span>© 2026 NailMasterDallas.Com</span><span>Professional nail supply · Dallas, Texas</span></div></footer>
  </>;
}
