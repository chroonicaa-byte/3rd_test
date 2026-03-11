import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Headphones, Calendar, ExternalLink, Play, Mic } from 'lucide-react'

export const metadata: Metadata = { title: 'Podcast – FounderUnfiltered9' }

const episodes = [
  { ep: 'EP 42', title: "The Payroll Mistake That Almost Shut Down a Startup", desc: "A founder skipped PF registration for 8 months. Here's what happened, the penalty they paid, and exactly how they fixed it.", duration: '38 min', topic: 'Compliance', topicColor: 'bg-red-50 text-red-700', isNew: true },
  { ep: 'EP 41', title: 'How to Answer "Why Did You Leave?" When You Got Fired', desc: "The honest, strategic way to handle the most feared interview question — from someone who's asked it 500 times.", duration: '28 min', topic: 'Interview Prep', topicColor: 'bg-blue-50 text-blue-700', isNew: false },
  { ep: 'EP 40', title: "Building a Leave Policy That Doesn't Breed Resentment", desc: "Most leave policies fail because they treat employees like liabilities. Here's how to build one that actually works.", duration: '34 min', topic: 'HR Policy', topicColor: 'bg-green-50 text-green-700', isNew: false },
  { ep: 'EP 39', title: 'Career Gaps in 2024: What HR Really Thinks', desc: 'Straight talk on how modern HR views career breaks — and what you need to say to turn a gap into a strength.', duration: '31 min', topic: 'Career Advisory', topicColor: 'bg-purple-50 text-purple-700', isNew: false },
  { ep: 'EP 38', title: "Why Your Startup Doesn't Need a Full-Time HR Manager Yet", desc: 'When to hire in-house, when to outsource, and what you can handle yourself — a framework for founders at every stage.', duration: '42 min', topic: 'Fractional HR', topicColor: 'bg-amber-50 text-amber-700', isNew: false },
  { ep: 'EP 37', title: 'Salary Negotiation: What HR Expects You to Know', desc: 'The tactics that work, the ones that backfire, and how to counter an offer without sounding greedy.', duration: '26 min', topic: 'Negotiation', topicColor: 'bg-teal-50 text-teal-700', isNew: false },
]

const platforms = [
  { name: 'Spotify', icon: '🎵', href: '#' },
  { name: 'Apple Podcasts', icon: '🎙', href: '#' },
  { name: 'Google Podcasts', icon: '▶️', href: '#' },
  { name: 'YouTube', icon: '📺', href: '#' },
]

const topics = ['Compliance', 'Interview Prep', 'HR Policy', 'Career Advisory', 'Fractional HR', 'Negotiation', 'Payroll', 'Leadership']

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              New Episode Every Week
            </div>
            <h1 className="heading-hero mb-5">
              FounderUnfiltered9<br />Podcast
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Real HR conversations for founders, professionals, and anyone who's ever been confused, blindsided, or burned by the world of work. No corporate script. No filler.
            </p>
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) => (
                <a key={p.name} href={p.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  <span>{p.icon}</span> {p.name} <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none">
            <path d="M0 80L1440 80L1440 20C1200 65 960 85 720 55C480 25 240 0 0 45Z" fill="#F9F7F4" />
          </svg>
        </div>
      </section>

      {/* Topic filter */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-muted-foreground mr-2">Topics:</span>
            {topics.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground hover:border-blue-400 hover:text-blue-700 cursor-pointer transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-1">All Episodes</p>
              <h2 className="heading-lg">Latest from the Podcast</h2>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" /> 42 episodes
            </div>
          </div>

          <div className="space-y-4">
            {episodes.map((ep) => (
              <div key={ep.ep} className="group bg-white rounded-2xl border border-border p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">{ep.ep}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${ep.topicColor}`}>{ep.topic}</span>
                      {ep.isNew && <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">NEW</span>}
                    </div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-blue-700 transition-colors mb-1.5">{ep.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{ep.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0 pl-4">
                    <span className="text-xs text-muted-foreground">{ep.duration}</span>
                    <ArrowRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid sessions */}
      <section className="section-pad bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Go Deeper</p>
            <h2 className="heading-xl mb-4">Turn Listening Into Action</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Heard something on the podcast that applies to you? Book a paid session and go deep on your specific challenge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-gradient rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Founder HR Strategy Session</h3>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  1-on-1 with the podcast host. Bring your specific HR challenge — walk away with a concrete action plan.
                </p>
                <div className="flex items-center justify-between mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div>
                    <div className="text-white/70 text-xs font-semibold">60-minute session</div>
                    <div className="font-display text-3xl font-bold">₹2,500</div>
                  </div>
                  <div className="text-right text-xs text-white/50">Limited slots<br />per week</div>
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-800 font-semibold text-sm hover:bg-blue-50 transition-colors"
                >
                  Book Session <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-10 border border-border">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5">
                <Mic className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Workplace Problem Clinic</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Submit your anonymous HR challenge. Get featured on the podcast and receive a private written consultation with real advice.
              </p>
              <div className="p-4 bg-white rounded-xl border border-border mb-6">
                <div className="text-xs font-semibold text-muted-foreground mb-1">Per submission</div>
                <div className="font-display text-3xl font-bold text-foreground">₹1,500</div>
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-700 text-blue-800 font-semibold text-sm hover:bg-blue-700 hover:text-white transition-all"
              >
                Submit Your Problem <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
