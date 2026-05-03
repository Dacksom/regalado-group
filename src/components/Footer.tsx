"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TwitterIcon } from "./SocialIcons";
import { ScrollReveal } from "./ScrollReveal";

const sedes = [
  { city: "Maracaibo", address: "Sector Tierra Negra, Calle 69, entre av. 11 y 12, Edo. Zulia", phone: "0261.614.7172" },
  { city: "Caracas", address: "Centro Profesional Santa Paula, Torre B, Ofc 801, Piso 8, Bello Monte", phone: "0212.989.0174" },
  { city: "Falcón", address: "Av. Bella Vista E/Garces y Mariño, Santa Irene, PB 3", phone: "0412.258.1700" },
];

const quickLinks = [
  { href: "/inmuebles", label: "Inmuebles" },
  { href: "/asesores", label: "Nuestros Asesores" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contáctanos" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
      <div className="container-main" style={{ paddingTop: "var(--space-2xl)", paddingBottom: "var(--space-lg)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--space-xl)", marginBottom: "var(--space-2xl)" }}>
          {/* Brand */}
          <ScrollReveal>
            <div>
              <Image
                src="/logo.png"
                alt="Regalado Group"
                width={160}
                height={40}
                className="logo-img"
                style={{ height: "28px", width: "auto", objectFit: "contain", marginBottom: "var(--space-md)" }}
              />
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "var(--space-lg)", fontWeight: 300 }}>
                Agencia inmobiliaria líder en Venezuela con más de 26 años de experiencia. Tu socio de confianza en bienes raíces.
              </p>
              <div className="flex" style={{ gap: "0.5rem" }}>
                {[
                  { icon: <InstagramIcon size={16} />, href: "https://instagram.com/regaladogroup" },
                  { icon: <YoutubeIcon size={16} />, href: "https://youtube.com/@regaladogroupbienesraices" },
                  { icon: <TwitterIcon size={16} />, href: "https://twitter.com/regaladogroup" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-all duration-200"
                    style={{ width: "38px", height: "38px", borderRadius: "10px", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="uppercase tracking-[0.15em] font-medium" style={{ color: "var(--gold-primary)", fontSize: "0.6875rem", marginBottom: "var(--space-md)" }}>
                Enlaces
              </h4>
              <div className="flex flex-col" style={{ gap: "0.75rem" }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{ color: "var(--text-secondary)", fontSize: "0.875rem", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Offices */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div>
              <h4 className="uppercase tracking-[0.15em] font-medium" style={{ color: "var(--gold-primary)", fontSize: "0.6875rem", marginBottom: "var(--space-md)" }}>
                Nuestras Sedes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "var(--space-md)" }}>
                {sedes.map((sede) => (
                  <div key={sede.city}>
                    <p className="font-medium flex items-center" style={{ color: "var(--text-primary)", fontSize: "0.875rem", marginBottom: "0.375rem", gap: "0.375rem" }}>
                      <MapPin size={13} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />
                      {sede.city}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: 1.6, marginBottom: "0.375rem", fontWeight: 300 }}>
                      {sede.address}
                    </p>
                    <p className="flex items-center" style={{ color: "var(--text-muted)", fontSize: "0.75rem", gap: "0.25rem" }}>
                      <Phone size={11} strokeWidth={1.5} />
                      {sede.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{ paddingTop: "var(--space-lg)", borderTop: "1px solid var(--border-color)", gap: "0.75rem" }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 300 }}>
            © {new Date().getFullYear()} Regalado Group C.A. Todos los derechos reservados.
          </p>
          <div className="flex items-center" style={{ color: "var(--text-muted)", fontSize: "0.75rem", gap: "0.375rem" }}>
            <Mail size={12} strokeWidth={1.5} />
            <span>operaciones@regaladogroup.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
