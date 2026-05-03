"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/inmuebles", label: "Inmuebles" },
  { href: "/asesores", label: "Asesores" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "shadow-lg" : ""}`}
        style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between" style={{ height: "5rem" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center group" style={{ gap: "0.75rem" }}>
              <Image
                src="/logo.png"
                alt="Regalado Group"
                width={220}
                height={50}
                className="transition-opacity duration-200 group-hover:opacity-80"
                style={{ height: "44px", width: "auto", objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center" style={{ gap: "2.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center" style={{ gap: "0.625rem" }}>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={16} strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={16} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden theme-toggle"
                aria-label="Open menu"
              >
                <Menu size={18} strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-menu"
            >
              <div className="flex justify-between items-center" style={{ marginBottom: "var(--space-xl)" }}>
                <Image
                  src="/logo.png"
                  alt="Regalado Group"
                  width={180}
                  height={44}
                  style={{ height: "36px", width: "auto", objectFit: "contain" }}
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="theme-toggle"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col" style={{ gap: "0.25rem" }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block transition-all duration-200"
                      style={{
                        padding: "0.875rem 1rem",
                        borderRadius: "14px",
                        fontSize: "0.9375rem",
                        fontWeight: pathname === link.href ? 500 : 400,
                        color: pathname === link.href ? "var(--gold-primary)" : "var(--text-primary)",
                        background: pathname === link.href ? "var(--gold-subtle)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
