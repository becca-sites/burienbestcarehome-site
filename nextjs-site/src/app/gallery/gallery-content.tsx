'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

interface GalleryImage {
  src: string
  alt: string
  w: number
  h: number
}

/* ------------------------------------------------------------------ */
/*  Our Home photos - ordered for visual balance in masonry grid       */
/* ------------------------------------------------------------------ */
const homeImages: GalleryImage[] = [
  { src: '/images/gallery/home/home-IMG_20260424_130410.webp', alt: 'Welcome to Burien Best Care Home', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260418_143916.webp', alt: 'A cozy room inside our care home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130416.webp', alt: 'Warm living spaces at Burien Best Care Home', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121127.webp', alt: 'Comfortable shared spaces for residents', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG-20250612-WA0001.webp', alt: 'Our home from the outside', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260418_143922.webp', alt: 'Thoughtfully designed interiors', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130419.webp', alt: 'Clean, bright spaces throughout the home', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121135.webp', alt: 'Where comfort meets care', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130423.webp', alt: 'Everyday living at Burien Best Care Home', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260418_143931.webp', alt: 'Private care suite details', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130432.webp', alt: 'Home-like atmosphere in every room', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121156.webp', alt: 'A place that feels like home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130436.webp', alt: 'Welcoming spaces for families and residents', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260418_143941.webp', alt: 'Care and comfort in every detail', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130449.webp', alt: 'Burien Best Care Home living space', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121242.webp', alt: 'Beautiful interiors designed for comfort', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG-20250612-WA0002.webp', alt: 'A view of our care home grounds', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260418_143948.webp', alt: 'Peaceful corners of our home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG-20250612-WA0003.webp', alt: 'Our home in the Burien neighborhood', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121252.webp', alt: 'Where your loved one belongs', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG-20250612-WA0006.webp', alt: 'The Burien Best Care Home property', w: 1200, h: 900 },
  { src: '/images/gallery/home/home-20260530_121257.webp', alt: 'Inside our adult family home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-20260418_144822.webp', alt: 'Bright, open spaces at the care home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-20260530_121310.webp', alt: 'A tour of our home', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-20260425_124453.webp', alt: 'Everyday life at our care home', w: 1200, h: 1591 },
  { src: '/images/gallery/home/home-20260425_1402361.webp', alt: 'Where families feel welcome', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-20260425_1403031.webp', alt: 'Designed with residents in mind', w: 1200, h: 1327 },
  { src: '/images/gallery/home/home-20260425_1403081.webp', alt: 'Home away from home', w: 1200, h: 1369 },
  { src: '/images/gallery/home/home-IMG-20250612-WA0004.webp', alt: 'Burien Best Care Home details', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130441.webp', alt: 'Quality care in a quality space', w: 1200, h: 1600 },
  { src: '/images/gallery/home/home-IMG_20260424_130444.webp', alt: 'Our home is your home', w: 1200, h: 1600 },
]

/* ------------------------------------------------------------------ */
/*  Spring Planting Party - May 2026                                   */
/* ------------------------------------------------------------------ */
const springPlantingImages: GalleryImage[] = [
  { src: '/images/gallery/events/spring-planting-2026/spring-1.webp', alt: 'Residents getting ready for planting', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-2.webp', alt: 'Hands in the soil at the planting party', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-15.webp', alt: 'The garden coming to life', w: 1200, h: 1600 },
  { src: '/images/gallery/events/spring-planting-2026/spring-3.webp', alt: 'Community members planting together', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-4.webp', alt: 'Smiles at the planting party', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-16.webp', alt: 'A beautiful day in the garden', w: 1200, h: 1600 },
  { src: '/images/gallery/events/spring-planting-2026/spring-5.webp', alt: 'Planting flowers and herbs', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-6.webp', alt: 'Working together in the garden', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-17.webp', alt: 'Fresh blooms at the garden party', w: 1200, h: 1600 },
  { src: '/images/gallery/events/spring-planting-2026/spring-7.webp', alt: 'Digging in and having fun', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-8.webp', alt: 'Everyone gets their hands dirty', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-20260530_121417.webp', alt: 'A proud moment with new plants', w: 1200, h: 1600 },
  { src: '/images/gallery/events/spring-planting-2026/spring-9.webp', alt: 'Tending to the garden beds', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-10.webp', alt: 'Colorful pots ready for planting', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-20260530_121421.webp', alt: 'Garden party memories', w: 1200, h: 1600 },
  { src: '/images/gallery/events/spring-planting-2026/spring-11.webp', alt: 'Our community garden growing', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-12.webp', alt: 'Sunshine and soil at the party', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-13.webp', alt: 'Planting seeds of joy', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-14.webp', alt: 'A garden made for gathering', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-IMG_20260530_170738.webp', alt: 'After the planting party', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-IMG_20260530_170738_2.webp', alt: 'The finished garden beds', w: 1200, h: 959 },
  { src: '/images/gallery/events/spring-planting-2026/spring-IMG_20260530_170739_4.webp', alt: 'New growth in our garden', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-IMG_20260530_170739_5.webp', alt: 'A garden built by community', w: 1200, h: 900 },
  { src: '/images/gallery/events/spring-planting-2026/spring-IMG_20260530_170739_19.webp', alt: 'Spring at Burien Best Care Home', w: 1200, h: 900 },
]

/* ------------------------------------------------------------------ */
/*  Photo Grid (masonry via CSS columns)                               */
/* ------------------------------------------------------------------ */
function PhotoGrid({
  images,
  onImageClick,
}: {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((img, i) => (
        <button
          key={img.src}
          onClick={() => onImageClick(i)}
          className="relative w-full mb-4 break-inside-avoid rounded-xl overflow-hidden cursor-pointer group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          style={{ aspectRatio: `${img.w} / ${img.h}` }}
          aria-label={`View full size: ${img.alt}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-300 pointer-events-none rounded-xl" />
        </button>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Gallery Content                                               */
/* ------------------------------------------------------------------ */
export default function GalleryContent() {
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[]
    index: number
  } | null>(null)

  const openLightbox = useCallback(
    (images: GalleryImage[], index: number) => {
      setLightbox({ images, index })
    },
    []
  )

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  const navigateLightbox = useCallback((dir: 1 | -1) => {
    setLightbox((prev) => {
      if (!prev) return null
      const newIndex =
        (prev.index + dir + prev.images.length) % prev.images.length
      return { ...prev, index: newIndex }
    })
  }, [])

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox])

  /* Keyboard navigation */
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateLightbox(1)
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, navigateLightbox])

  const currentImage = lightbox ? lightbox.images[lightbox.index] : null

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(/images/gallery/home/home-IMG-20250612-WA0001.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative z-10 text-center px-6 py-16 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
            Our Home, Our Community
          </h1>
          <p className="text-xl md:text-2xl text-cream leading-relaxed">
            Step inside and see what makes Burien Best Care Home feel like
            family. Every room, every garden path, every gathering tells our
            story.
          </p>
        </div>
      </section>

      {/* ── Our Home ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4 text-center">
              Our Home
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-forest text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Take a look inside our home. Private rooms, beautiful common
              areas, and a garden made for gathering.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <PhotoGrid
              images={homeImages}
              onImageClick={(i) => openLightbox(homeImages, i)}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Spring Planting Party ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-sage-light">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-2 text-center">
              Spring Planting Party
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sage font-semibold text-center mb-4 text-lg">
              May 2026
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-forest text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Our residents, families, and neighbors came together to plant
              flowers, herbs, and vegetables. It was a day of sunshine, soil,
              and smiles.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <PhotoGrid
              images={springPlantingImages}
              onImageClick={(i) => openLightbox(springPlantingImages, i)}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8">
              Come See It in Person
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-forest mb-12 leading-relaxed">
              Photos can only tell part of the story. Schedule a visit and feel
              the warmth of our home for yourself.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="btn btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-block"
            >
              Schedule a Visit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo viewer"
            >
              <X size={24} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox(-1)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center px-16"
            >
              {/* Using <img> for lightbox since images are pre-optimized */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg select-none"
                draggable={false}
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox(1)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium select-none">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── JSON-LD Schema ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://burienbestcarehome.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Gallery',
                item: 'https://burienbestcarehome.com/gallery',
              },
            ],
          }),
        }}
      />
    </>
  )
}
