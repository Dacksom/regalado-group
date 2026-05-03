"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Home, Key, Scale, Calculator, FileText, Unlock,
  Settings, Hammer, Globe, CreditCard, Shield, MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ── Extended service data with richer descriptions ── */
const servicesData = [
  {
    title: "Compra y Venta",
    subtitle: "Transacciones inmobiliarias",
    description: "Te acompañamos en todo el proceso de compra o venta de tu inmueble. Desde la evaluación inicial, negociación, hasta el cierre legal de la operación.",
    icon: <Home size={26} strokeWidth={1.5} />,
    features: ["Evaluación del inmueble", "Negociación profesional", "Cierre legal seguro"],
    whatsappLink: "https://wa.link/xkqkpw",
    featured: true,
  },
  {
    title: "Arrendamiento",
    subtitle: "Alquileres residenciales y comerciales",
    description: "Gestión completa de arrendamientos: búsqueda de inquilinos calificados, contratos legales, cobranzas y seguimiento continuo.",
    icon: <Key size={26} strokeWidth={1.5} />,
    features: ["Selección de inquilinos", "Contratos legales", "Gestión de cobranzas"],
    whatsappLink: "https://wa.link/ywvxsw",
    featured: true,
  },
  {
    title: "Departamento Legal",
    subtitle: "Soporte jurídico especializado",
    description: "Equipo legal dedicado a proteger tus intereses en cada transacción inmobiliaria, con revisión de documentos y asesoría continua.",
    icon: <Scale size={26} strokeWidth={1.5} />,
    features: ["Revisión documental", "Asesoría contractual", "Protección legal"],
    whatsappLink: "https://wa.link/ec9kiv",
    featured: true,
  },
  {
    title: "Avalúos",
    subtitle: "Valoración profesional",
    description: "Determinamos el valor real de tu propiedad con metodologías certificadas y análisis comparativo del mercado actual.",
    icon: <Calculator size={26} strokeWidth={1.5} />,
    features: ["Análisis de mercado", "Valoración certificada"],
    whatsappLink: "https://wa.link/3ozhdh",
  },
  {
    title: "Trámites Públicos",
    subtitle: "Gestión ante organismos",
    description: "Realizamos todos tus trámites ante SEDEMAT, DARU, SENIAT, catastro y demás organismos gubernamentales de forma ágil.",
    icon: <FileText size={26} strokeWidth={1.5} />,
    features: ["SEDEMAT & DARU", "SENIAT & Catastro"],
    whatsappLink: "https://wa.link/8o4mt4",
  },
  {
    title: "Liberación de Hipoteca",
    subtitle: "BANAVIH y recursos propios",
    description: "Gestionamos la liberación de tu hipoteca ante BANAVIH o con recursos propios, simplificando todo el proceso burocrático.",
    icon: <Unlock size={26} strokeWidth={1.5} />,
    features: ["Gestión BANAVIH", "Liberación ágil"],
    whatsappLink: "https://wa.link/urosx6",
  },
  {
    title: "Administración",
    subtitle: "Gestión integral de inmuebles",
    description: "Nos encargamos de la administración completa de tu propiedad: mantenimiento, pagos, reportes y atención a inquilinos.",
    icon: <Settings size={26} strokeWidth={1.5} />,
    features: ["Mantenimiento", "Reportes periódicos"],
    whatsappLink: "https://wa.link/9r20eh",
  },
  {
    title: "Remodelaciones",
    subtitle: "Mejoras y reparaciones",
    description: "Transformamos tu propiedad con remodelaciones profesionales que aumentan su valor y atractivo en el mercado.",
    icon: <Hammer size={26} strokeWidth={1.5} />,
    features: ["Diseño interior", "Reparaciones"],
    whatsappLink: "https://wa.link/hzhins",
  },
  {
    title: "Transacciones Internacionales",
    subtitle: "Operaciones desde el exterior",
    description: "Facilitamos compras, ventas y gestiones inmobiliarias para clientes en el extranjero con total seguridad y respaldo legal.",
    icon: <Globe size={26} strokeWidth={1.5} />,
    features: ["Compra desde el exterior", "Asesoría remota"],
    whatsappLink: "https://wa.link/vb39jl",
  },
  {
    title: "Créditos Personales",
    subtitle: "Financiamiento inmobiliario",
    description: "Te conectamos con las mejores opciones de financiamiento para que puedas materializar tu inversión inmobiliaria.",
    icon: <CreditCard size={26} strokeWidth={1.5} />,
    features: ["Opciones de crédito", "Asesoría financiera"],
    whatsappLink: "https://wa.link/jko0xp",
  },
  {
    title: "Representación",
    subtitle: "Ante organismos administrativos",
    description: "Representamos tus intereses ante cualquier organismo administrativo, agilizando procesos y garantizando resultados.",
    icon: <Shield size={26} strokeWidth={1.5} />,
    features: ["Representación legal", "Gestión de procesos"],
    whatsappLink: "https://wa.link/9e2i49",
  },
];

const featured = servicesData.filter((s) => s.featured);
const secondary = servicesData.filter((s) => !s.featured);

export default function ServiciosPage() {
  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* ── Header ── */}
      <section className="container-main text-center" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-3xl)" }}>
        <ScrollReveal>
          <div className="gold-accent" style={{ margin: "0 auto var(--space-md)" }} />
          <h1 className="section-title">Servicios Integrales</h1>
          <p className="section-subtitle" style={{ margin: "var(--space-sm) auto 0", textAlign: "center", maxWidth: "540px" }}>
            26 años respaldando cada paso de tu inversión inmobiliaria con soluciones profesionales y atención personalizada.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Featured Services — Large Cards ── */}
      <section className="container-main" style={{ paddingBottom: "var(--space-3xl)" }}>
        <ScrollReveal>
          <p className="uppercase tracking-[0.15em] font-medium" style={{ color: "var(--gold-primary)", fontSize: "0.6875rem", marginBottom: "var(--space-lg)" }}>
            Servicios Principales
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "1.25rem" }}>
          {featured.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.a
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "24px",
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 48px rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.2)" }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    background: "var(--gold-subtle)", color: "var(--gold-primary)",
                    marginBottom: "var(--space-lg)",
                    transition: "background 0.3s, color 0.3s",
                  }}
                >
                  {service.icon}
                </div>

                {/* Text */}
                <h3
                  className="font-medium"
                  style={{ color: "var(--text-primary)", fontSize: "1.125rem", marginBottom: "0.375rem" }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "var(--gold-primary)", fontSize: "0.75rem", fontWeight: 400, marginBottom: "var(--space-md)", opacity: 0.8 }}>
                  {service.subtitle}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, fontWeight: 300, marginBottom: "var(--space-lg)" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul style={{ marginBottom: "var(--space-lg)" }}>
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center" style={{ gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <CheckCircle2 size={14} strokeWidth={1.5} style={{ color: "var(--gold-primary)", flexShrink: 0 }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", fontWeight: 300 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="flex items-center font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: "var(--gold-primary)", fontSize: "0.8125rem", gap: "0.5rem" }}
                >
                  <MessageCircle size={15} strokeWidth={1.5} />
                  Consultar por WhatsApp
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Secondary Services — Compact Grid ── */}
      <section style={{ background: "var(--bg-secondary)", padding: "var(--space-3xl) 0" }}>
        <div className="container-main">
          <ScrollReveal>
            <p className="uppercase tracking-[0.15em] font-medium" style={{ color: "var(--gold-primary)", fontSize: "0.6875rem", marginBottom: "var(--space-lg)" }}>
              Más Servicios
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1rem" }}>
            {secondary.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "20px",
                    padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  whileHover={{ y: -3, borderColor: "rgba(201,168,76,0.15)" }}
                >
                  <div className="flex items-center" style={{ gap: "0.75rem", marginBottom: "var(--space-sm)" }}>
                    <div style={{ color: "var(--gold-primary)", opacity: 0.7 }}>
                      {service.icon}
                    </div>
                    <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                      {service.title}
                    </h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.7, fontWeight: 300, flex: 1 }}>
                    {service.description}
                  </p>
                  <div
                    className="flex items-center font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: "var(--gold-primary)", fontSize: "0.75rem", gap: "0.375rem", marginTop: "var(--space-sm)" }}
                  >
                    Consultar
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="container-main text-center" style={{ padding: "var(--space-4xl) 0" }}>
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-heading)", color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 400,
              lineHeight: 1.15, marginBottom: "1rem",
            }}
          >
            ¿No encuentras lo que buscas?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", fontWeight: 300, marginBottom: "var(--space-xl)", maxWidth: "420px", margin: "0 auto var(--space-xl)" }}>
            Contáctanos directamente y un asesor te orientará con la solución ideal para tu caso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: "1rem" }}>
            <a
              href="https://wa.me/584146388708?text=Hola%2C%20necesito%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              WhatsApp Directo
            </a>
            <Link href="/contacto" className="btn-outline">
              Formulario de Contacto
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
