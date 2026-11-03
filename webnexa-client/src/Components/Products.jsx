import React, { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Festive Crackers',
    category: 'Events',
    description:
      'A festive website experience designed to showcase crackers and seasonal offerings.',
    url: 'https://festival-strach-dist.vercel.app/',
    image: '/images/crackers.png',
    tags: ['Festival', 'Business Website'],
  },
  {
    id: 2,
    name: 'PawFresh Pet Store',
    category: 'Business',
    description:
      'A modern business website for presenting pet products and services.',
    url: 'https://businesswebsite-lime.vercel.app/',
    image: '/images/pawfresh.png',
    tags: ['Business', 'Pet Care'],
  },
  {
    id: 3,
    name: 'WebNexa ERP',
    category: 'Business',
    description:
      'A business management platform focused on organizing operations and workflows.',
    url: 'https://web-nexa-erp-management.vercel.app/',
    image: '/images/webnexa-erp.png',
    tags: ['ERP', 'Management'],
  },
  {
    id: 4,
    name: 'Grilli Restaurant',
    category: 'Food',
    description:
      'A restaurant website showcasing food, dining experiences and restaurant information.',
    url: 'https://grillirestaurant-grilli-master.vercel.app/',
    image: '/images/grilli.png',
    tags: ['Restaurant', 'Food'],
  },
  {
    id: 5,
    name: 'Glow Cosmetics',
    category: 'Shopping',
    description:
      'A beauty-focused website designed to present cosmetic products with an attractive visual style.',
    url: 'https://cosmetic-website-nz7s.vercel.app/',
    image: '/images/cosmetics.png',
    tags: ['Beauty', 'Cosmetics'],
  },
  {
    id: 6,
    name: 'Luxe Fashion',
    category: 'Shopping',
    description:
      'A fashion brand website presenting apparel and brand identity through a polished design.',
    url: 'https://fashion-brand-ten.vercel.app/',
    image: '/images/fashion.png',
    tags: ['Fashion', 'Branding'],
  },
  {
    id: 7,
    name: 'Photography Studio',
    category: 'Creative',
    description:
      'A photography portfolio website for showcasing creative work, photo collections and studio services.',
    url: 'https://photo-studio-zeta-two.vercel.app/',
    image: '/images/photography.png',
    tags: ['Photography', 'Portfolio'],
  },
  {
    id: 8,
    name: 'EverAfter Weddings',
    category: 'Creative',
    description:
      'An elegant wedding website concept for showcasing celebrations, event details and memorable moments.',
    url: 'https://wedding-app-olive-seven.vercel.app/',
    image: '/images/wedding.png',
    tags: ['Wedding', 'Events'],
  },
];

const categories = [
  'All Projects',
  'Business',
  'Shopping',
  'Food',
  'Events',
  'Creative',
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProducts =
    activeCategory === 'All Projects'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#07090f] px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0284c7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8]">
            <Sparkles size={15} />
            Our Portfolio
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Products{' '}
            <span className="bg-linear-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent">
              &amp; Live Projects
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore websites and digital solutions built to bring ideas to
            life. Open a live demo and experience each project.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-[#38bdf8] bg-[#38bdf8] text-[#07090f] shadow-lg shadow-[#38bdf8]/20'
                    : 'border-[#1f293d] bg-[#0b0f19] text-gray-400 hover:border-[#38bdf8]/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1f293d] bg-[#0b0f19] transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8]/60 hover:shadow-xl hover:shadow-[#0284c7]/10"
            >
              {/* Website screenshot preview */}
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${product.name} live website`}
                className="relative block h-56 overflow-hidden border-b border-[#1f293d] bg-[#0b0f19] sm:h-60"
              >
                <img
                  src={product.image}
                  alt={`${product.name} website preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden';
                  }}
                  className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#07090f]/50 to-transparent" />
                {/* Category badge */}
                <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#07090f]/90 px-3 py-1 text-xs font-medium text-[#38bdf8] backdrop-blur-md">
                  {product.category}
                </span>

                {/* Preview icon */}
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#07090f]/90 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#38bdf8]">
                  {product.name}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-6 text-gray-400">
                  {product.description}
                </p>

                {/* Project tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#1f293d] bg-[#111827] px-2.5 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo button only */}
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#38bdf8] to-[#0284c7] px-4 py-3 text-sm font-bold text-[#07090f] transition-all duration-300 hover:brightness-110"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Contact link */}
        <p className="mt-10 text-center text-xs text-gray-500">
          Have a project idea?{' '}
          <a
            href="#contact"
            className="font-semibold text-[#38bdf8] transition-colors hover:text-white"
          >
            Let&apos;s build it together.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Products;
