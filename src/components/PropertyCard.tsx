"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Car } from "lucide-react";
import { Property, formatPrice } from "@/lib/data";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ height: "100%" }}
    >
      <Link href={`/inmuebles/${property.id}`} className="block property-card group" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/11", flexShrink: 0 }}>
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover property-image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
          />

          {/* Badge */}
          <div className="absolute flex" style={{ top: "1rem", left: "1rem", gap: "0.5rem" }}>
            <span className={`badge ${property.status === "Venta" ? "badge-sale" : "badge-rent"}`}>
              {property.status}
            </span>
          </div>

          {/* Code */}
          <div
            className="absolute font-mono"
            style={{
              top: "1rem",
              right: "1rem",
              fontSize: "0.6875rem",
              padding: "0.25rem 0.625rem",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.05em",
            }}
          >
            {property.code}
          </div>
        </div>

        {/* Content — flex-grow to fill remaining space */}
        <div style={{ padding: "1.5rem 1.5rem 1.75rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {/* Price */}
          <p
            className="font-semibold"
            style={{ color: "var(--gold-primary)", fontSize: "1.375rem", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}
          >
            {formatPrice(property.price, property.currency, property.isMonthly)}
          </p>

          {/* Title — fixed 2 lines */}
          <h3
            className="font-medium line-clamp-2"
            style={{ color: "var(--text-primary)", fontSize: "0.9375rem", lineHeight: 1.5, marginBottom: "0.5rem", minHeight: "2.8125rem" }}
          >
            {property.title}
          </h3>

          {/* Location */}
          <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", marginBottom: "1.25rem" }}>
            {property.zone} · {property.type}
          </p>

          {/* Specs — pushed to bottom */}
          <div
            className="flex items-center"
            style={{ gap: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-color)", marginTop: "auto" }}
          >
            {property.bedrooms && (
              <div className="flex items-center" style={{ gap: "0.375rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                <Bed size={15} strokeWidth={1.5} />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center" style={{ gap: "0.375rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                <Bath size={15} strokeWidth={1.5} />
                <span>{property.bathrooms}</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center" style={{ gap: "0.375rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                <Maximize size={15} strokeWidth={1.5} />
                <span>{property.area}m²</span>
              </div>
            )}
            {property.parking && (
              <div className="flex items-center" style={{ gap: "0.375rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                <Car size={15} strokeWidth={1.5} />
                <span>{property.parking}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
