"use client";

import { motion } from "framer-motion";
import { Building2, Users, MapPin, Target, Eye, Heart } from "lucide-react";
import { ScrollReveal, AnimatedCounter, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const values = [
  "Integridad", "Amor", "Pasión", "Competitividad", "Compromiso",
  "Rentabilidad", "Cooperación", "Respeto", "Perseverancia",
  "Innovación", "Transparencia", "Colaboración",
];

export default function NosotrosPage() {
  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* Hero */}
      <section style={{ padding: "var(--space-2xl) 0 var(--section-gap)" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "var(--space-2xl)" }}>
            <ScrollReveal>
              <div className="gold-accent" />
              <h1 className="section-title" style={{ marginBottom: "var(--space-lg)" }}>¿Quiénes Somos?</h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "var(--space-lg)", fontWeight: 300 }}>
                Regalado Group es una Agencia Inmobiliaria constituida en la ciudad de Maracaibo
                que comenzó operaciones a partir del 2020 y que está soportada por la experiencia,
                solidez y trayectoria de su broker director <strong style={{ color: "var(--gold-primary)", fontWeight: 500 }}>Omar Regalado</strong> quien
                cuenta con 26 años de trabajo ininterrumpido en el sector Inmobiliario del Estado Zulia.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.8, fontWeight: 300 }}>
                Nuestra principal fortaleza es que tenemos un equipo humano multidisciplinario altamente
                capacitado, proactivo y orientado al logro de objetivos, lo que trae como resultados
                negociaciones exitosas y clientes satisfechos fidelizados con nuestra marca.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ borderRadius: "24px", aspectRatio: "4/3" }}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop')" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1), transparent)" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section style={{ padding: "var(--section-gap) 0", background: "var(--bg-secondary)" }}>
        <div className="container-main">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {[
              { icon: <Target size={28} strokeWidth={1.5} />, title: "Misión", text: "Ser líderes en el sector inmobiliario de Venezuela, ofreciendo un servicio de asesoría excepcional. Nos destacamos por una gestión profesional, eficiente, responsable y altamente personalizada, brindando las mejores opciones en bienes inmuebles." },
              { icon: <Eye size={28} strokeWidth={1.5} />, title: "Visión", text: "Expandirnos y destacar en el mercado nacional, marcando la diferencia con una atención efectiva y personalizada. Consolidarnos como la empresa de mayor confianza en Venezuela para invertir o vender bienes inmuebles." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div
                  className="h-full"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "24px",
                    padding: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  <div style={{ color: "var(--gold-primary)", marginBottom: "var(--space-md)" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 400, marginBottom: "var(--space-sm)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.8, fontWeight: 300 }}>
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
              <Heart size={24} strokeWidth={1.5} style={{ color: "var(--gold-primary)", margin: "0 auto var(--space-md)" }} />
              <h2 className="section-title">Nuestros Valores</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center" style={{ gap: "0.75rem", maxWidth: "700px", margin: "0 auto" }}>
            {values.map((value) => (
              <StaggerItem key={value}>
                <motion.span
                  className="inline-block font-light"
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "100px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                  }}
                  whileHover={{ borderColor: "var(--gold-primary)", color: "var(--gold-primary)", scale: 1.04 }}
                >
                  {value}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "var(--section-gap) 0", background: "var(--bg-secondary)" }}>
        <div className="container-main">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "2rem" }}>
            {[
              { number: 26, suffix: "+", label: "Años de Experiencia", icon: <Building2 size={28} strokeWidth={1.5} /> },
              { number: 70, suffix: "+", label: "Asesores Inmobiliarios", icon: <Users size={28} strokeWidth={1.5} /> },
              { number: 3, suffix: "", label: "Sedes en Venezuela", icon: <MapPin size={28} strokeWidth={1.5} /> },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div
                  className="text-center"
                  style={{ padding: "clamp(2.5rem, 4vw, 4rem) 2rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "24px" }}
                >
                  <div style={{ color: "var(--gold-primary)", marginBottom: "var(--space-md)", opacity: 0.8 }}>{stat.icon}</div>
                  <div style={{ marginBottom: "0.75rem" }}><AnimatedCounter end={stat.number} suffix={stat.suffix} /></div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", fontWeight: 300 }}>{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
