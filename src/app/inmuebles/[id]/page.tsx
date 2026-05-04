"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Bed, Bath, Maximize, Car, MapPin, Phone, Share2 } from "lucide-react";
import { properties, formatPrice, getAdvisorImage } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PropertyCard } from "@/components/PropertyCard";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="page-transition container-main text-center" style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>
        <h1 className="section-title" style={{ marginBottom: "2rem" }}>Propiedad no encontrada</h1>
        <Link href="/inmuebles" className="btn-primary">Ver todos los inmuebles</Link>
      </div>
    );
  }

  const similar = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.zone === property.zone))
    .slice(0, 3);

  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* Breadcrumb */}
      <div className="container-main" style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
        <Link
          href="/inmuebles"
          className="inline-flex items-center transition-colors duration-200"
          style={{ color: "var(--text-muted)", fontSize: "0.8125rem", gap: "0.5rem" }}
        >
          <ArrowLeft size={14} />
          Volver a inmuebles
        </Link>
      </div>

      {/* Hero Image — swipeable on mobile, cinematic on desktop */}
      <div className="container-main" style={{ marginBottom: "var(--space-md)" }}>
        <div
          className="overflow-x-auto hide-scrollbar"
          style={{ scrollSnapType: "x mandatory", display: "flex", gap: "0.75rem" }}
        >
          {property.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden flex-shrink-0 property-hero-img"
              style={{
                borderRadius: "20px",
                width: property.images.length === 1 ? "100%" : "85%",
                scrollSnapAlign: "center",
              }}
            >
              <Image
                src={img}
                alt={`${property.title} - ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 768px) 90vw, 1200px"
              />
            </motion.div>
          ))}
        </div>

        {/* Badges — below image */}
        <div className="flex items-center" style={{ gap: "0.625rem", marginTop: "var(--space-sm)" }}>
          <span className={`badge ${property.status === "Venta" ? "badge-sale" : "badge-rent"}`} style={{ fontSize: "0.6875rem", padding: "0.3rem 0.875rem" }}>
            {property.status}
          </span>
          <span
            className="badge"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-secondary)", fontSize: "0.6875rem", padding: "0.3rem 0.875rem" }}
          >
            {property.code}
          </span>
          <span
            className="badge"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-muted)", fontSize: "0.6875rem", padding: "0.3rem 0.875rem" }}
          >
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "var(--space-2xl)", marginBottom: "var(--section-gap)" }}>
          {/* Main info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                {property.title}
              </h1>

              <div className="flex items-center" style={{ gap: "0.5rem", marginBottom: "1.5rem" }}>
                <MapPin size={16} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                  {property.address}
                </span>
              </div>

              <p
                className="font-semibold"
                style={{ color: "var(--gold-primary)", fontSize: "2rem", letterSpacing: "-0.01em", marginBottom: "var(--space-xl)" }}
              >
                {formatPrice(property.price, property.currency, property.isMonthly)}
              </p>

              {/* Specs Grid */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4"
                style={{
                  gap: "1px",
                  background: "var(--border-color)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "var(--space-xl)",
                }}
              >
                {[
                  { icon: <Bed size={22} strokeWidth={1.5} />, value: property.bedrooms, label: "Habitaciones" },
                  { icon: <Bath size={22} strokeWidth={1.5} />, value: property.bathrooms, label: "Baños" },
                  { icon: <Maximize size={22} strokeWidth={1.5} />, value: property.area ? `${property.area}m²` : null, label: "Área" },
                  { icon: <Car size={22} strokeWidth={1.5} />, value: property.parking, label: "Estacionamiento" },
                ].filter(s => s.value).map((spec, i) => (
                  <div key={i} className="text-center" style={{ background: "var(--bg-card)", padding: "clamp(1.5rem, 3vw, 2.5rem) 1rem" }}>
                    <div style={{ color: "var(--gold-primary)", marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>{spec.icon}</div>
                    <p className="font-semibold" style={{ color: "var(--text-primary)", fontSize: "1.25rem", marginBottom: "0.25rem" }}>{spec.value}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 300 }}>{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "1.125rem", marginBottom: "1rem" }}>
                Descripción
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.8, fontWeight: 300 }}>
                {property.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal delay={0.2}>
              <div
                className="sticky"
                style={{
                  top: "7rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "24px",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                }}
              >
                {/* Agent */}
                <div className="flex items-center" style={{ gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                  <div
                    className="relative overflow-hidden flex-shrink-0"
                    style={{ width: "72px", height: "72px", borderRadius: "18px", background: "var(--gold-subtle)" }}
                  >
                    <Image
                      src={getAdvisorImage(property.agent)}
                      alt={property.agent}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "top center" }}
                      sizes="72px"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                      {property.agent}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", fontWeight: 300 }}>
                      Asesor Inmobiliario
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/584146388708?text=Hola%2C%20me%20interesa%20la%20propiedad%20${property.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: "100%", marginBottom: "0.75rem" }}
                >
                  <Phone size={16} />
                  Contactar por WhatsApp
                </a>

                <button className="btn-outline" style={{ width: "100%" }}>
                  <Share2 size={16} />
                  Compartir
                </button>

                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)" }}>
                  {[
                    { label: "Tipo", value: property.type },
                    { label: "Zona", value: property.zone },
                    { label: "Código", value: property.code, gold: true },
                    { label: "Estatus", value: property.status },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between" style={{ marginBottom: i < 3 ? "0.875rem" : 0, fontSize: "0.8125rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>{item.label}</span>
                      <span style={{ color: item.gold ? "var(--gold-primary)" : "var(--text-primary)", fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <section style={{ paddingBottom: "var(--section-gap)" }}>
            <ScrollReveal>
              <div className="gold-accent" />
              <h2 className="section-title" style={{ marginBottom: "var(--space-xl)" }}>Propiedades Similares</h2>
            </ScrollReveal>
            <div className="grid-properties">
              {similar.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
