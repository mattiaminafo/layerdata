"use client";

import { useTranslations } from "../lib/useTranslations";
import Image from "next/image";

export default function ShopifyTrackingImages() {
  const { t } = useTranslations();
  const data = t("shopifyTracking.images") || {};

  return (
    <section className="section-padding w-full bg-white/5">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-4 text-center">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-work-sans mb-12 text-center">
            {data.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Immagine sinistra - oneday.jpeg */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/oneday.jpeg"
                alt="OneDay"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Immagine destra - l22.jpeg */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/l22.jpeg"
                alt="L22"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

