"use client";
import { useTranslations } from "../lib/useTranslations";

export default function ProductsList() {
  const { t, currentLang } = useTranslations();
  const productsData = t('products');
  const products = productsData?.items || [];

  if (products.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <p className="text-xl text-gray-600 font-work-sans">
            {currentLang === 'it' ? 'Nessun prodotto disponibile al momento.' : 'No products available at the moment.'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col"
            >
              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[var(--primary-yellow)] text-black font-bold px-3 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Product Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-work-sans">
                {product.name}
              </h3>

              {/* Product Description */}
              {product.description && (
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {product.description}
                </p>
              )}

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                <div>
                  <p className="text-sm text-gray-500 font-work-sans">
                    {currentLang === 'it' ? 'Prezzo' : 'Price'}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[var(--primary-purple)] font-work-sans">
                    €{product.price?.toLocaleString() || '0'}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={`mailto:hello@layerdata.eu?subject=${encodeURIComponent(`Interesse per: ${product.name}`)}`}
                  className="inline-flex items-center bg-[var(--primary-purple)] text-white px-4 py-2 font-semibold hover:bg-[var(--purple-dark)] transition-colors duration-200 text-sm rounded-lg font-work-sans"
                >
                  {currentLang === 'it' ? 'Acquista' : 'Buy'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

