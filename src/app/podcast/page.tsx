import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
  {
    name: "YouTube",
    href: "https://youtube.com/@foundersunfiltered9?si=lp_2JOPmeJqwP254",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/foundersunfiltered9?igsh=MXh4eDJoYXZkcDZy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225h2.401zM3.742 5.182c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    ),
  },
];

const topics = ['Compliance', 'Interview Prep', 'HR Policy', 'Career Advisory', 'Fractional HR', 'Negotiation', 'Payroll', 'Leadership']

export default function PodcastPage() {
  return (
    <>
      {/* Hero Section with Player */}
      <section className="bg-brand-gradient pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                New Episode Every Week
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/LOGO.png"
                  alt="FounderUnfiltered Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  FounderUnfiltered9 Podcast
                </h1>
              </div>

              {/* <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Real HR conversations for founders, professionals, and anyone who's ever been confused, blindsided, or burned by the world of work. No corporate script. No filler.
              </p> */}
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                Real HR conversations for founders, professionals, and anyone who's ever been confused, blindsided, or burned by the world of work. No corporate script. No filler.
                We connect with entrepreneurs and businessmen to break down how their businesses work—from idea to execution. We discuss business models, management strategies, failures, and growth stories to help new entrepreneurs learn faster and smarter.</p>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
              Perfect for anyone who wants to start a business or improve the one they already have.
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

            {/* RIGHT SIDE: Podcast Player UI */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">FounderUnfiltered9</div>
                  <div className="text-sm text-white/60">Episodes Coming Soon • Weekly Insights</div>
                </div>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl mb-8 border border-white/10">
                <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2">
                  Now Playing — EP 42
                </div>
                <div className="font-semibold text-base mb-4 leading-snug">
                  The Payroll Mistake That Almost Shut Down a Startup
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-blue-400 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40 font-mono">
                    <span>15:24</span>
                    <span>38:00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                  <span className="text-lg">⏮</span>
                </button>
                <button className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all shadow-lg shadow-blue-500/25">
                  <Play className="h-7 w-7 text-white fill-current ml-1" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                  <span className="text-lg">⏭</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-[60px]">
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

      {/* Episodes List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-1">All Episodes</p>
              <h2 className="text-3xl font-bold text-foreground">Latest from the Podcast</h2>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" /> Episodes Comming Soon
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
                    <h3 className="text-lg font-bold text-foreground group-hover:text-blue-700 transition-colors mb-1.5">{ep.title}</h3>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Go Deeper</p>
            <h2 className="text-4xl font-bold mb-4">Turn Listening Into Action</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Heard something on the podcast that applies to you? Book a paid session and go deep on your specific challenge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* <div className="bg-brand-gradient rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-20" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Founder HR Strategy Session</h3>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  1-on-1 with the podcast host. Bring your specific HR challenge — walk away with a concrete action plan.
                </p>
                <div className="flex items-center justify-between mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div>
                    <div className="text-white/70 text-xs font-semibold">60-minute session</div>
                    <div className="text-3xl font-bold">₹2,500</div>
                  </div>
                  <div className="text-right text-xs text-white/50">Limited slots<br />per week</div>
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-800 font-semibold text-sm hover:bg-blue-50 transition-colors"
                >
                  Book Session <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div> */}

            <div className="bg-background rounded-2xl p-10 border border-border">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5">
                <Mic className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">You are welcome on our Podcast</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
               you’re a founder, leader, or professional with real experiences and insights to share, we’d love to hear from you. If you’re interested in being a guest on the Founders Unfiltered9 podcast, feel free to connect with us. We’re always looking to have honest conversations with people who have meaningful stories, lessons, and perspectives that can inspire and help others in their journey.
              </p>
              <div className="p-4 bg-white rounded-xl border border-border mb-6">
                <div className="text-xs font-semibold text-muted-foreground mb-1">Per submission</div>
                <div className="text-3xl font-bold text-foreground">Contact for Price </div>
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
