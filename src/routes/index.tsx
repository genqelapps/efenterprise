import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Map as MapIcon,
  ShieldCheck,
  PackageCheck,
  Truck,
  Handshake,
  BadgeDollarSign,
  Building2,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
} from "lucide-react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logo from "@/assets/ef-logo.jpg.asset.json";
import heroProducts from "@/assets/hero-products.jpg";
import warehouse from "@/assets/warehouse.jpg";
import thermal57 from "@/assets/thermal-roll-57.jpg";
import thermal80 from "@/assets/thermal-roll-80.jpg";
import plasticCup from "@/assets/plastic-cup.jpg";
import juiceCup from "@/assets/juice-cup.jpg";
import sealingFilm from "@/assets/sealing-film.jpg";
import bungkusPaper from "@/assets/bungkus-paper.jpg";
import kuvaPaper from "@/assets/kuva-paper.jpg";

const PHONE = "+911234567890";
const WHATSAPP = "911234567890";
const EMAIL = "efenterprise@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EF Enterprise | Thermal Rolls & Packaging Products Supplier" },
      {
        name: "description",
        content:
          "Trusted supplier of thermal rolls, plastic cups, juice cups, cup sealing film and packaging paper. Premium quality, bulk orders, best prices and fast delivery.",
      },
      { property: "og:title", content: "EF Enterprise | Thermal Rolls & Packaging Products" },
      {
        property: "og:description",
        content:
          "High quality packaging solutions for businesses of all sizes — thermal rolls, cups, sealing film and paper. Bulk supply at competitive prices.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroProducts },
      { name: "twitter:image", content: heroProducts },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EF Enterprise",
          description:
            "Trusted supplier of thermal rolls and packaging products at competitive prices.",
          email: EMAIL,
          telephone: PHONE,
          address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          makesOffer: [
            "Thermal Roll 57 x 40 mm",
            "Thermal Roll 80 x 60 mm",
            "Plastic Cup Y500",
            "Juice Cup",
            "Cup Sealing Film",
            "Bungkus Paper",
            "Kuva Paper",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name } })),
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us?", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  { name: "Thermal Roll – 57 × 40 mm", img: thermal57 },
  { name: "Thermal Roll – 80 × 60 mm", img: thermal80 },
  { name: "Plastic Cup – Y500", img: plasticCup },
  { name: "Juice Cup", img: juiceCup },
  { name: "Cup Sealing Film", img: sealingFilm },
  { name: "Bungkus Paper", img: bungkusPaper },
  { name: "Kuva Paper", img: kuvaPaper },
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Premium Quality" },
  { icon: PackageCheck, label: "Bulk Orders Available" },
  { icon: Truck, label: "Fast & On-Time Delivery" },
  { icon: Handshake, label: "Trusted by Many Businesses" },
];

const WHY = [
  { icon: ShieldCheck, title: "Premium Quality Products", desc: "Best materials for your business" },
  { icon: BadgeDollarSign, title: "Best Price Guaranteed", desc: "Competitive pricing always" },
  { icon: Building2, title: "Bulk Supply Available", desc: "Large stocks for your bulk needs" },
  { icon: Truck, title: "Fast & On-Time Delivery", desc: "Timely delivery you can rely on" },
  { icon: Handshake, title: "Trusted by Many Businesses", desc: "Long term trust and support" },
];

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  const quoteHref = `https://wa.me/${WHATSAPP}?text=Hi%20EF%20Enterprise,%20I%20would%20like%20a%20quote.`;

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <img src={logo.url} alt="EF Enterprise logo" className="h-10 w-10 shrink-0 object-contain" width={40} height={40} />
            <span className="truncate font-serif text-lg font-semibold tracking-wide text-navy">EF ENTERPRISE</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={quoteHref}
              className="hidden items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a href={quoteHref} className="mt-2 block rounded-md bg-gold px-4 py-2.5 text-center text-sm font-semibold text-gold-foreground">
              Get a Quote
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Welcome To</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">EF ENTERPRISE</h1>
            <div className="mt-2 h-1 w-20 rounded bg-gold" />
            <p className="mt-5 text-xl font-medium sm:text-2xl">
              Your Trusted Supplier for <span className="text-gold">Thermal Rolls &amp; Packaging Products</span>
            </p>
            <p className="mt-4 max-w-md text-navy-foreground/75">
              We provide high quality packaging solutions for businesses of all sizes. Best quality, competitive prices and timely delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-soft transition-transform hover:-translate-y-0.5">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={quoteHref} className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/30 px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="flex flex-col items-start gap-1.5">
                  <h.icon className="h-6 w-6 text-gold" />
                  <span className="text-xs font-medium leading-tight text-navy-foreground/85">{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <img
              src={heroProducts}
              alt="Thermal paper rolls, plastic cups and packaging products"
              width={1280}
              height={1024}
              className="w-full rounded-2xl border border-navy-foreground/10 object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Products</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">Quality Products for Your Business</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="reveal group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-center justify-center bg-secondary/50 p-5">
                <img src={p.img} alt={p.name} width={512} height={512} loading="lazy" className="h-40 w-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5 text-center">
                <h3 className="font-serif text-lg font-semibold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Available in Bulk</p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi EF Enterprise, I'm interested in ${p.name}.`)}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:text-gold"
                >
                  Enquire Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="reveal overflow-hidden rounded-2xl shadow-card">
            <img src={warehouse} alt="EF Enterprise warehouse stocked with paper rolls" width={1024} height={768} loading="lazy" className="w-full object-cover" />
          </div>
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Us</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">A Packaging Partner You Can Rely On</h2>
            <p className="mt-5 text-muted-foreground">
              EF Enterprise is a trusted supplier of thermal rolls and packaging products serving businesses across Tamil Nadu and beyond. We focus on premium quality materials, competitive pricing and dependable delivery.
            </p>
            <p className="mt-4 text-muted-foreground">
              From retail receipt rolls to disposable cups, sealing film and wrapping paper, we keep large stocks ready so your business never runs out.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-transform hover:-translate-y-0.5">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="bg-gradient-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="reveal text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Why Choose Us?</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map((w) => (
              <div key={w.title} className="reveal flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-navy-foreground/5">
                  <w.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-navy-foreground/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Let's Grow Together</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">We're Here to Help Your Business Grow</h2>
            <p className="mt-5 text-muted-foreground">
              Get the best packaging solutions for your business. Contact us today for bulk orders and enquiries.
            </p>
            <a href={quoteHref} className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-transform hover:-translate-y-0.5">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ContactCard icon={Phone} title="Phone" value="+91 12345 67890" href={`tel:${PHONE}`} />
            <ContactCard icon={MapPin} title="Location" value="Tamil Nadu, India" />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="+91 12345 67890" href={quoteHref} />
            <ContactCard icon={MapIcon} title="Google Maps" value="View on Map" />
            <ContactCard icon={Mail} title="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactCard icon={Clock} title="Working Hours" value="Mon – Sat: 9:00 AM – 7:00 PM" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="EF Enterprise logo" className="h-9 w-9 object-contain" width={36} height={36} />
              <span className="font-serif text-lg font-semibold tracking-wide">EF ENTERPRISE</span>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/70">
              EF Enterprise is a trusted supplier of thermal rolls and packaging products at competitive prices.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, MessageCircle, Instagram].map((Ic, i) => (
                <a key={i} href={quoteHref} aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-foreground/20 transition-colors hover:bg-gold hover:text-gold-foreground">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterLinks title="Quick Links" items={NAV.map((n) => n.label)} hrefs={NAV.map((n) => n.href)} />
          <FooterLinks title="Our Products" items={PRODUCTS.map((p) => p.name)} hrefs={PRODUCTS.map(() => "#products")} />

          <div>
            <h4 className="font-serif text-base font-semibold">Get In Touch</h4>
            <p className="mt-4 text-sm text-navy-foreground/70">Have questions? We're just a message away!</p>
            <a href={quoteHref} className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} EF Enterprise. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-navy">{title}</p>
        <p className="truncate text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function FooterLinks({ title, items, hrefs }: { title: string; items: string[]; hrefs: string[] }) {
  return (
    <div>
      <h4 className="font-serif text-base font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((it, i) => (
          <li key={it}>
            <a href={hrefs[i]} className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
