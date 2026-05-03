"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { advisors, getAdvisorImage } from "@/lib/data";

const sedes = ["Todos", "Maracaibo", "Caracas", "Falcón"] as const;
const PER_PAGE = 12;

export default function AsesoresPage() {
  const [activeSede, setActiveSede] = useState<string>("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    setPage(1);
    return activeSede === "Todos" ? advisors : advisors.filter((a) => a.sede === activeSede);
  }, [activeSede]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section className="container-main text-center" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
        <ScrollReveal>
          <div className="gold-accent" style={{ margin: "0 auto var(--space-md)" }} />
          <h1 className="section-title">Nuestros Asesores</h1>
          <p className="section-subtitle" style={{ margin: "var(--space-sm) auto 0", textAlign: "center" }}>
            Más de 70 profesionales comprometidos con hacer realidad tu inversión inmobiliaria
          </p>
        </ScrollReveal>
      </section>

      {/* Sede Tabs */}
      <section className="container-main" style={{ marginBottom: "var(--space-xl)" }}>
        <div className="flex justify-center flex-wrap" style={{ gap: "0.625rem" }}>
          {sedes.map((sede) => (
            <button key={sede} onClick={() => setActiveSede(sede)} className={`filter-chip ${activeSede === sede ? "active" : ""}`}>
              {sede}
              {sede !== "Todos" && <span style={{ marginLeft: "0.375rem", opacity: 0.5 }}>({advisors.filter((a) => a.sede === sede).length})</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Count + Grid */}
      <section className="container-main" style={{ paddingBottom: "var(--space-xl)" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", marginBottom: "var(--space-lg)" }}>
          {filtered.length} asesor{filtered.length !== 1 ? "es" : ""} · Página {page} de {totalPages}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: "clamp(0.625rem, 2vw, 1.25rem)" }}>
            {paginated.map((advisor) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-color)",
                  borderRadius: "20px", overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(201,168,76,0.06)", borderColor: "rgba(201,168,76,0.15)" }}
              >
                {/* Photo */}
                <div className="relative" style={{ aspectRatio: "1", overflow: "hidden", background: "var(--bg-secondary)" }}>
                  <Image
                    src={getAdvisorImage(advisor.name)}
                    alt={advisor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500"
                    style={{ objectPosition: "top center" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "clamp(1rem, 2vw, 1.5rem)" }}>
                  <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                    {advisor.name}
                  </h3>
                  <p style={{ color: "var(--gold-primary)", fontSize: "0.75rem", marginBottom: "0.125rem", fontWeight: 400 }}>
                    {advisor.role}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "var(--space-sm)" }}>
                    {advisor.sede}
                  </p>

                  <div className="flex" style={{ gap: "0.5rem" }}>
                    {[
                      { icon: <Phone size={14} strokeWidth={1.5} />, href: `tel:${advisor.phone.replace(/\./g, "").replace(/\s/g, "")}`, title: "Llamar" },
                      { icon: <InstagramIcon size={14} />, href: `https://instagram.com/${advisor.instagram.replace("@", "")}`, title: "Instagram", ext: true },
                      { icon: <Mail size={14} strokeWidth={1.5} />, href: `mailto:${advisor.email}`, title: "Email" },
                    ].map((a, j) => (
                      <a key={j} href={a.href} target={a.ext ? "_blank" : undefined} rel={a.ext ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-center advisor-action-btn"
                        title={a.title}
                      >{a.icon}</a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="container-main" style={{ paddingBottom: "var(--section-gap)" }}>
          <div className="flex items-center justify-center" style={{ gap: "0.5rem" }}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: "40px", height: "40px", borderRadius: "12px",
                border: "1px solid var(--border-color)", color: page === 1 ? "var(--text-muted)" : "var(--text-primary)",
                opacity: page === 1 ? 0.4 : 1, cursor: page === 1 ? "default" : "pointer",
                background: "var(--bg-card)",
              }}
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="flex items-center justify-center transition-all duration-200 font-medium"
                style={{
                  width: "40px", height: "40px", borderRadius: "12px", fontSize: "0.8125rem",
                  border: p === page ? "1px solid var(--gold-primary)" : "1px solid var(--border-color)",
                  color: p === page ? "var(--gold-primary)" : "var(--text-muted)",
                  background: p === page ? "var(--gold-subtle)" : "var(--bg-card)",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: "40px", height: "40px", borderRadius: "12px",
                border: "1px solid var(--border-color)", color: page === totalPages ? "var(--text-muted)" : "var(--text-primary)",
                opacity: page === totalPages ? 0.4 : 1, cursor: page === totalPages ? "default" : "pointer",
                background: "var(--bg-card)",
              }}
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
