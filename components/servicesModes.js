"use client";

import Link from "next/link";
import { useTranslations } from "../lib/useTranslations";

export default function ServicesModes() {
  const { t } = useTranslations();
  const data = t("servicesPage.modes") || {};
  const items = data.items || [];

  return (
    <section className="section-padding bg-[var(--surface-card)] border-y border-[var(--border-subtle)]">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans">
            {data.title}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left text-white/60 text-xs sm:text-sm uppercase tracking-widest">
                {data.columns?.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 border-b border-[var(--border-subtle)] font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                const isExternal = item.href?.startsWith("http");
                const ctaContent = item.cta && (
                  <span className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-semibold text-sm sm:text-base">
                    {item.cta}
                  </span>
                );

                return (
                  <tr key={index} className="text-white/80 text-sm sm:text-base border-b border-[var(--border-subtle)]">
                    <td className="px-4 py-5 align-top font-semibold text-white">
                      {item.name}
                    </td>
                    <td className="px-4 py-5 align-top">
                      {item.description}
                    </td>
                    <td className="px-4 py-5 align-top text-white/70">
                      {item.perfectFor}
                    </td>
                    <td className="px-4 py-5 align-top">
                      {item.cta && (
                        isExternal ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {ctaContent}
                          </a>
                        ) : (
                          <Link href={item.href || "#"}>{ctaContent}</Link>
                        )
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
