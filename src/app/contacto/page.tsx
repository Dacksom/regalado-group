"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TwitterIcon } from "@/components/SocialIcons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const sedes = [
  { city: "Maracaibo", address: "Sector Tierra Negra, Calle 69, entre av. 11 y 12, Edo. Zulia", phone: "0261.614.7172", mapUrl: "https://www.google.com/maps?q=Maracaibo+Tierra+Negra+Calle+69" },
  { city: "Caracas", address: "Centro Profesional Santa Paula, Torre B, Ofc 801, Piso 8, Bello Monte", phone: "0212.989.0174", mapUrl: "https://www.google.com/maps?q=Centro+Profesional+Santa+Paula+Caracas" },
  { city: "Falcón", address: "Av. Bella Vista E/Garces y Mariño, Santa Irene, PB 3", phone: "0412.258.1700", mapUrl: "https://www.google.com/maps?q=Coro+Falcon+Venezuela" },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hola, soy ${formData.name}.\n${formData.message}\n\nContacto: ${formData.email} / ${formData.phone}`);
    window.open(`https://wa.me/584146388708?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section className="container-main text-center" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-2xl)" }}>
        <ScrollReveal>
          <div className="gold-accent" style={{ margin: "0 auto var(--space-md)" }} />
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-subtitle" style={{ margin: "var(--space-sm) auto 0", textAlign: "center" }}>
            Estamos listos para ayudarte. Escríbenos y un asesor te contactará a la brevedad.
          </p>
        </ScrollReveal>
      </section>

      {/* Form + Info */}
      <section className="container-main" style={{ paddingBottom: "var(--section-gap)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--space-2xl)" }}>
          {/* Form */}
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 3rem)" }}
            >
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", fontSize: "1.375rem", fontWeight: 400, marginBottom: "var(--space-lg)" }}>
                Envíanos un mensaje
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1rem", marginBottom: "1rem" }}>
                {[
                  { label: "Nombre", type: "text", key: "name", placeholder: "Tu nombre", required: true },
                  { label: "Email", type: "email", key: "email", placeholder: "tu@email.com", required: true },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.5rem" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      required={field.required}
                      className="search-select"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.5rem" }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="search-select"
                  placeholder="+58 412.000.0000"
                />
              </div>

              <div style={{ marginBottom: "var(--space-lg)" }}>
                <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.5rem" }}>
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="search-select"
                  style={{ resize: "vertical" }}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <motion.button type="submit" className="btn-primary" style={{ width: "100%" }} whileTap={{ scale: 0.98 }}>
                {submitted ? "✓ Redirigiendo a WhatsApp" : <><Send size={16} /> Enviar por WhatsApp</>}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col" style={{ gap: "1.5rem" }}>
              {/* Quick contact */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 3rem)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", fontSize: "1.375rem", fontWeight: 400, marginBottom: "var(--space-lg)" }}>
                  Información de Contacto
                </h3>

                <div className="flex flex-col" style={{ gap: "1.25rem" }}>
                  {[
                    { icon: <Phone size={18} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />, text: "0261.614.7172 · 0212.989.0174", href: "tel:+582616147172" },
                    { icon: <MessageCircle size={18} strokeWidth={1.5} style={{ color: "#25D366" }} />, text: "+58 414-6388708 (WhatsApp)", href: "https://wa.me/584146388708", external: true },
                    { icon: <Mail size={18} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />, text: "operaciones@regaladogroup.com", href: "mailto:operaciones@regaladogroup.com" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center transition-colors duration-200"
                      style={{ gap: "0.875rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}
                    >
                      {item.icon}
                      {item.text}
                    </a>
                  ))}
                </div>

                <div className="flex" style={{ gap: "0.625rem", marginTop: "var(--space-lg)" }}>
                  {[
                    { icon: <InstagramIcon size={18} />, href: "https://instagram.com/regaladogroup" },
                    { icon: <YoutubeIcon size={18} />, href: "https://youtube.com/@regaladogroupbienesraices" },
                    { icon: <TwitterIcon size={18} />, href: "https://twitter.com/regaladogroup" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center transition-all duration-200"
                      style={{ width: "44px", height: "44px", borderRadius: "12px", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 2.5rem)" }}>
                <h4 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "0.9375rem", marginBottom: "var(--space-sm)" }}>
                  Horario de Atención
                </h4>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", fontWeight: 300, lineHeight: 1.8 }}>
                  <p>Lunes a Viernes: 8:00 AM — 5:00 PM</p>
                  <p>Sábados: 8:00 AM — 12:00 PM</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", marginTop: "0.5rem" }}>
                    WhatsApp disponible 24/7
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sedes */}
      <section style={{ padding: "var(--section-gap) 0", background: "var(--bg-secondary)" }}>
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
              <div className="gold-accent" style={{ margin: "0 auto var(--space-md)" }} />
              <h2 className="section-title">Nuestras Sedes</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {sedes.map((sede) => (
              <StaggerItem key={sede.city}>
                <a
                  href={sede.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "24px", padding: "clamp(2rem, 3vw, 2.5rem)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <MapPin size={22} strokeWidth={1.5} style={{ color: "var(--gold-primary)", marginBottom: "var(--space-sm)" }} />
                  <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "1.0625rem", marginBottom: "0.75rem" }}>
                    {sede.city}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.7, marginBottom: "var(--space-sm)", fontWeight: 300 }}>
                    {sede.address}
                  </p>
                  <p className="flex items-center" style={{ color: "var(--text-muted)", fontSize: "0.8125rem", gap: "0.375rem" }}>
                    <Phone size={12} strokeWidth={1.5} />
                    {sede.phone}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
