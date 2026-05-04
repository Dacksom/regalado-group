"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Building2 } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { properties } from "@/lib/data";

function InmueblesContent() {
  const searchParams = useSearchParams();

  const [filterType, setFilterType] = useState<string>(searchParams.get("type") || "");
  const [filterZone, setFilterZone] = useState<string>(searchParams.get("zone") || "");
  const [filterStatus, setFilterStatus] = useState<string>(searchParams.get("status") || "");
  const [filterPrice, setFilterPrice] = useState<string>(searchParams.get("price") || "");
  const [filterBedrooms, setFilterBedrooms] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");

  const filtered = useMemo(() => {
    let result = [...properties];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.address.toLowerCase().includes(q));
    }
    if (filterType) result = result.filter((p) => p.type === filterType);
    if (filterZone) result = result.filter((p) => p.zone === filterZone);
    if (filterStatus) result = result.filter((p) => p.status === filterStatus);
    if (filterBedrooms) result = result.filter((p) => p.bedrooms && p.bedrooms >= parseInt(filterBedrooms));
    if (filterPrice) {
      const [min, max] = filterPrice.split("-").map(Number);
      if (max) result = result.filter((p) => p.price >= min && p.price <= max);
      else if (filterPrice.endsWith("+")) result = result.filter((p) => p.price >= parseInt(filterPrice));
    }
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      default: result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return result;
  }, [searchQuery, filterType, filterZone, filterStatus, filterPrice, filterBedrooms, sortBy]);

  const activeFilters = [filterType, filterZone, filterStatus, filterPrice, filterBedrooms].filter(Boolean).length;
  const clearFilters = () => { setFilterType(""); setFilterZone(""); setFilterStatus(""); setFilterPrice(""); setFilterBedrooms(""); setSearchQuery(""); };

  return (
    <div className="page-transition" style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section className="container-main" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-lg)" }}>
        <ScrollReveal>
          <div className="gold-accent" />
          <h1 className="section-title">Inmuebles</h1>
          <p className="section-subtitle">
            Explora nuestra selección de propiedades en toda Venezuela
          </p>
        </ScrollReveal>
      </section>

      {/* Search & Filters */}
      <section className="container-main" style={{ paddingBottom: "var(--space-lg)" }}>
        <div className="flex flex-col md:flex-row" style={{ gap: "0.75rem", marginBottom: "var(--space-lg)" }}>
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute" style={{ left: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Buscar por código, título o dirección..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-select"
              style={{ paddingLeft: "3rem" }}
            />
          </div>

          {/* Filter toggle */}
          <button onClick={() => setShowFilters(!showFilters)} className="btn-outline relative" style={{ padding: "0.875rem 1.5rem" }}>
            <SlidersHorizontal size={16} />
            Filtros
            {activeFilters > 0 && (
              <span
                className="absolute flex items-center justify-center font-bold"
                style={{
                  top: "-6px", right: "-6px", width: "20px", height: "20px",
                  borderRadius: "50%", background: "var(--gold-primary)", color: "#0A0A0A", fontSize: "0.6875rem",
                }}
              >
                {activeFilters}
              </span>
            )}
          </button>

          {/* Sort */}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="search-select" style={{ width: "auto", minWidth: "180px" }}>
            <option value="newest">Más recientes</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "20px",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" style={{ gap: "1rem" }}>
                  {[
                    { label: "Tipo", value: filterType, setter: setFilterType, options: ["Casa", "Apartamento", "Local", "Galpón", "Terreno", "Oficina", "TownHouse"], all: "Todos" },
                    { label: "Zona", value: filterZone, setter: setFilterZone, options: ["Zona Norte", "Zona Sur", "Zona Este", "Zona Oeste", "Centro"], all: "Todas" },
                    { label: "Estatus", value: filterStatus, setter: setFilterStatus, options: ["Venta", "Alquiler"], all: "Todos" },
                    { label: "Precio", value: filterPrice, setter: setFilterPrice, options: [{ v: "0-500", l: "$0 — $500/mes" }, { v: "500-1000", l: "$500 — $1K/mes" }, { v: "0-100000", l: "Hasta $100K" }, { v: "100000-200000", l: "$100K — $200K" }, { v: "200000-9999999", l: "$200K+" }], all: "Cualquiera" },
                    { label: "Habitaciones", value: filterBedrooms, setter: setFilterBedrooms, options: [{ v: "1", l: "1+" }, { v: "2", l: "2+" }, { v: "3", l: "3+" }, { v: "4", l: "4+" }, { v: "5", l: "5+" }], all: "Cualquiera" },
                  ].map((filter, i) => (
                    <div key={i}>
                      <label className="block uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", marginBottom: "0.5rem" }}>
                        {filter.label}
                      </label>
                      <select value={filter.value} onChange={(e) => filter.setter(e.target.value)} className="search-select">
                        <option value="">{filter.all}</option>
                        {filter.options.map((opt) => {
                          const isObj = typeof opt === "object";
                          return <option key={isObj ? opt.v : opt} value={isObj ? opt.v : opt}>{isObj ? opt.l : opt}</option>;
                        })}
                      </select>
                    </div>
                  ))}
                </div>

                {activeFilters > 0 && (
                  <button onClick={clearFilters} className="flex items-center transition-colors duration-200" style={{ color: "var(--gold-primary)", fontSize: "0.8125rem", gap: "0.375rem", marginTop: "1.25rem" }}>
                    <X size={14} /> Limpiar filtros
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", marginBottom: "var(--space-lg)" }}>
          {filtered.length} propiedad{filtered.length !== 1 ? "es" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
        </p>
      </section>

      {/* Properties Grid */}
      <section className="container-main" style={{ paddingBottom: "var(--section-gap)" }}>
        {filtered.length > 0 ? (
          <div className="grid-properties">
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center" style={{ padding: "var(--space-3xl) 0" }}>
            <Building2 size={40} strokeWidth={1} style={{ color: "var(--text-muted)", margin: "0 auto var(--space-md)" }} />
            <h3 className="font-medium" style={{ color: "var(--text-primary)", fontSize: "1.125rem", marginBottom: "0.75rem" }}>
              No se encontraron propiedades
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "var(--space-lg)" }}>
              Intenta ajustar los filtros de búsqueda
            </p>
            <button onClick={clearFilters} className="btn-primary">Limpiar filtros</button>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default function InmueblesPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: "6rem", minHeight: "100vh" }} />}>
      <InmueblesContent />
    </Suspense>
  );
}
