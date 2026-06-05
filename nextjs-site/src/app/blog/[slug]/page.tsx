import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, type Block } from '@/content/posts'
import ScrollReveal from '@/components/ScrollReveal'
import GlassCard from '@/components/GlassCard'
import ScheduleVisitButton from '@/components/ScheduleVisitButton'

const SITE_URL = 'https://burienbestcarehome.com'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Not found' }
  }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  }
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

/* ------------------------------------------------------------------ */
/*  Inline renderer: a tiny, dependency-free subset of markdown.       */
/*  Supports **bold**, *italic*, and [text](href) links. Internal      */
/*  hrefs use next/link; external (http) open in a new tab.            */
/* ------------------------------------------------------------------ */
function renderEmphasis(text: string, keyPrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = []
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let last = 0
  let i = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      out.push(<strong key={`${keyPrefix}b${i}`}>{m[1]}</strong>)
    } else {
      out.push(<em key={`${keyPrefix}i${i}`}>{m[2]}</em>)
    }
    last = m.index + m[0].length
    i++
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let i = 0
  let m: RegExpExecArray | null
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) nodes.push(...renderEmphasis(text.slice(last, m.index), `${keyPrefix}t${i}`))
    const label = m[1]
    const href = m[2]
    if (/^https?:\/\//.test(href)) {
      nodes.push(
        <a
          key={`${keyPrefix}l${i}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunshine-deep underline underline-offset-2 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine rounded"
        >
          {label}
        </a>
      )
    } else {
      nodes.push(
        <Link
          key={`${keyPrefix}l${i}`}
          href={href}
          className="text-sunshine-deep underline underline-offset-2 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine rounded"
        >
          {label}
        </Link>
      )
    }
    last = m.index + m[0].length
    i++
  }
  if (last < text.length) nodes.push(...renderEmphasis(text.slice(last), `${keyPrefix}t${i}`))
  return nodes
}

function renderBlock(b: Block, i: number) {
  const key = `blk${i}`
  switch (b.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="font-serif text-3xl md:text-4xl text-ink leading-tight mt-14 mb-5"
        >
          {renderInline(b.text, key)}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={i}
          className="font-serif text-2xl md:text-3xl text-ink leading-tight mt-10 mb-4"
        >
          {renderInline(b.text, key)}
        </h3>
      )
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-base md:text-lg text-ink-soft leading-relaxed">
          {b.items.map((it, j) => (
            <li key={j}>{renderInline(it, `${key}-${j}`)}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote
          key={i}
          className="my-8 pl-6 border-l-4 border-sunshine italic text-lg md:text-xl text-ink leading-relaxed"
        >
          &ldquo;{renderInline(b.text, key)}&rdquo;
          {b.attribution && (
            <footer className="mt-2 text-sm not-italic text-ink-soft">&mdash; {b.attribution}</footer>
          )}
        </blockquote>
      )
    case 'p':
    default:
      return (
        <p key={i} className="text-base md:text-lg text-ink-soft leading-relaxed mb-5">
          {renderInline(b.text, key)}
        </p>
      )
  }
}

/* Normalize common YouTube/Vimeo share URLs to their embeddable form. */
function toEmbedUrl(url: string): string {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return url
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`

  return (
    <>
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            image: post.heroImage ? [post.heroImage] : undefined,
            author: { '@type': 'Person', name: post.author },
            publisher: {
              '@type': 'Organization',
              name: 'Burien Best Care Home',
              url: SITE_URL,
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            keywords: post.tags.join(', '),
            url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: url },
            ],
          }),
        }}
      />

      <article className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sunshine-deep transition-colors mb-8"
            >
              &larr; Back to the blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5 text-xs uppercase tracking-widest text-ink-soft">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">&bull;</span>
              <span>{post.readingTime} read</span>
              <span aria-hidden="true">&bull;</span>
              <span>By {post.author}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="inline-block text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-sunshine/15 text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Optional video takes priority over the still hero when present */}
          {post.videoUrl ? (
            <ScrollReveal delay={0.05}>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-sm bg-ink/5">
                <iframe
                  src={toEmbedUrl(post.videoUrl)}
                  title={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          ) : (
            post.heroImage && (
              <ScrollReveal delay={0.05}>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-sm bg-ink/5">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            )
          )}

          <ScrollReveal delay={0.1}>
            <div className="prose-wrap">{post.body.map(renderBlock)}</div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard variant="solid" className="mt-16 p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-4">
                Thinking about a home for your parent?
              </h2>
              <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-7 max-w-xl mx-auto">
                Come tour our home in Burien. Meet the team. Ask every question on your list. No pressure, no sales pitch.
              </p>
              <ScheduleVisitButton surface="on-white" />
            </GlassCard>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
