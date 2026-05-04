"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown, Search, Building2, Users, MapPin, ArrowRight,
  Home, Key, Scale, Calculator, FileText, Unlock,
} from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { ScrollReveal, AnimatedCounter, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { properties, services } from "@/lib/data";

const serviceIcons: Record<string, React.ReactNode> = {
  building: <Home size={24} />,
  key: <Key size={24} />,
  scale: <Scale size={24} />,
  calculator: <Calculator size={24} />,
  fileText: <FileText size={24} />,
  unlock: <Unlock size={24} />,
};

export default function HomePage() {
  const [searchType, setSearchType] = useState("");
  const [searchZone, setSearchZone] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="page-transition">
      {/* ════════════════════════════════════════
          HERO — Full viewport, cinematic
         ════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.05)" }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.40)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(9,9,9,0.95) 100%)" }}
        />

        <div className="relative z-10 text-center" style={{ padding: "0 clamp(1.5rem, 5vw, 3rem)", maxWidth: "800px" }}>
          <div>
            <p
              className="uppercase tracking-[0.35em] font-light"
              style={{ color: "var(--gold-primary)", fontSize: "0.75rem", marginBottom: "2rem" }}
            >
              Bienes Raíces en Venezuela
            </p>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                color: "white",
                fontSize: "clamp(2rem, 7vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
              }}
            >
              Tu hogar ideal
              <br />
              <span style={{ color: "var(--gold-primary)", fontStyle: "italic" }}>está más cerca</span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.875rem, 2.5vw, 1.0625rem)", lineHeight: 1.7, marginBottom: "3.5rem", fontWeight: 300 }}>
              26 años de experiencia inmobiliaria. Más de 70 asesores{" "}
              <br className="hidden sm:block" />
              comprometidos con hacer realidad tu inversión.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: "1rem" }}>
              <Link href="/inmuebles" className="btn-primary">
                Explorar Inmuebles
                <ArrowRight size={16} />
              </Link>
              <Link href="/contacto" className="btn-outline" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" }}>
                Contactar Asesor
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: "3rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.3)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          SEARCH BAR — Floating, generous spacing
         ════════════════════════════════════════ */}
      <section style={{ marginTop: "-4rem", position: "relative", zIndex: 20, paddingBottom: "var(--space-3xl)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-card)",
                borderRadius: "24px",
                padding: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: "1.25rem", alignItems: "end" }}>
                <div>
                  <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.75rem" }}>
                    Tipo de Inmueble
                  </label>
                  <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="search-select">
                    <option value="">Todos los tipos</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Local">Local</option>
                    <option value="Galpón">Galpón</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Oficina">Oficina</option>
                    <option value="TownHouse">TownHouse</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.75rem" }}>
                    Estado
                  </label>
                  <select value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)} className="search-select">
                    <option value="">Venta y Alquiler</option>
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.75rem" }}>
                    Zona
                  </label>
                  <select value={searchZone} onChange={(e) => setSearchZone(e.target.value)} className="search-select">
                    <option value="">Todas las zonas</option>
                    <option value="Zona Norte">Zona Norte</option>
                    <option value="Zona Sur">Zona Sur</option>
                    <option value="Zona Este">Zona Este</option>
                    <option value="Zona Oeste">Zona Oeste</option>
                    <option value="Centro">Centro</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.75rem" }}>
                    Rango de Precio
                  </label>
                  <select value={searchPrice} onChange={(e) => setSearchPrice(e.target.value)} className="search-select">
                    <option value="">Cualquier precio</option>
                    <option value="0-500">$0 — $500/mes</option>
                    <option value="500-1000">$500 — $1,000/mes</option>
                    <option value="0-100000">Hasta $100,000</option>
                    <option value="100000-200000">$100K — $200K</option>
                    <option value="200000+">$200,000+</option>
                  </select>
                </div>

                <Link
                  href={`/inmuebles?type=${searchType}&zone=${searchZone}&price=${searchPrice}&status=${searchStatus}`}
                  className="btn-primary"
                  style={{ height: "fit-content" }}
                >
                  <Search size={16} />
                  Buscar
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURED PROPERTIES
         ════════════════════════════════════════ */}
      <section style={{ paddingBottom: "var(--section-gap)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between" style={{ marginBottom: "var(--space-xl)", gap: "1rem" }}>
              <div>
                <div className="gold-accent" />
                <h2 className="section-title">Propiedades Destacadas</h2>
                <p className="section-subtitle">
                  Las mejores opciones seleccionadas por nuestros asesores
                </p>
              </div>
              <Link
                href="/inmuebles"
                className="hidden sm:flex items-center font-medium transition-colors duration-200"
                style={{ color: "var(--gold-primary)", fontSize: "0.875rem", gap: "0.5rem", whiteSpace: "nowrap" }}
              >
                Ver todas
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid-properties">
            {featuredProperties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>

          <div className="text-center sm:hidden" style={{ marginTop: "var(--space-xl)" }}>
            <Link href="/inmuebles" className="btn-outline">
              Ver todas las propiedades
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
         ════════════════════════════════════════ */}
      <section style={{ padding: "var(--section-gap) 0", background: "var(--bg-secondary)" }}>
        <div className="container-main">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "2rem" }}>
            {[
              { number: 26, suffix: "+", label: "Años de Experiencia", sublabel: "Desde 1998 en el sector inmobiliario", icon: <Building2 size={28} strokeWidth={1.5} /> },
              { number: 70, suffix: "+", label: "Asesores Inmobiliarios", sublabel: "Profesionales en todo el país", icon: <Users size={28} strokeWidth={1.5} /> },
              { number: 3, suffix: "", label: "Sedes en Venezuela", sublabel: "Maracaibo · Caracas · Falcón", icon: <MapPin size={28} strokeWidth={1.5} /> },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div
                  className="text-center"
                  style={{
                    padding: "clamp(2.5rem, 4vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "24px",
                  }}
                >
                  <div style={{ color: "var(--gold-primary)", marginBottom: "var(--space-md)", opacity: 0.8 }}>
                    {stat.icon}
                  </div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                    {stat.label}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", fontWeight: 300 }}>
                    {stat.sublabel}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES — Clean grid with air
         ════════════════════════════════════════ */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
              <div className="gold-accent" style={{ margin: "0 auto var(--space-md)" }} />
              <h2 className="section-title">Servicios Integrales</h2>
              <p className="section-subtitle" style={{ margin: "var(--space-sm) auto 0", textAlign: "center" }}>
                Soluciones completas para todas tus necesidades inmobiliarias
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.25rem" }}>
            {services.slice(0, 6).map((service, i) => (
              <StaggerItem key={i}>
                <a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card flex items-start group"
                  style={{ gap: "var(--space-md)" }}
                >
                  <div className="service-icon" style={{ marginTop: "2px", flexShrink: 0 }}>
                    {serviceIcons[service.icon] || <Building2 size={24} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem", marginBottom: "0.5rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.7, fontWeight: 300 }}>
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--gold-primary)", marginTop: "4px", flexShrink: 0 }}
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center" style={{ marginTop: "var(--space-xl)" }}>
            <Link href="/servicios" className="btn-outline">
              Ver todos los servicios
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA — Cinematic final section
         ════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ padding: "var(--space-4xl) 0" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=800&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.75)" }} />

        <div className="relative z-10 container-main text-center">
          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] font-light" style={{ color: "var(--gold-primary)", fontSize: "0.6875rem", marginBottom: "2rem" }}>
              Contáctanos
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "white",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              ¿Listo para encontrar
              <br />
              <span style={{ color: "var(--gold-primary)", fontStyle: "italic" }}>tu próxima inversión?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: "3rem", fontWeight: 300, maxWidth: "460px", margin: "0 auto 3rem" }}>
              Nuestro equipo de asesores está listo para ayudarte. Contáctanos hoy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: "1rem" }}>
              <a
                href="https://wa.me/584146388708?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp Directo
                <ArrowRight size={16} />
              </a>
              <Link href="/asesores" className="btn-outline" style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
                Conoce nuestros asesores
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
