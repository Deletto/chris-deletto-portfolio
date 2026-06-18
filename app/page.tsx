import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  Play,
  ShieldCheck,
} from "lucide-react";
import {
  accentIcon,
  credits,
  featured,
  keywords,
  musicFolderUrl,
  musicPieces,
  portfolioUrl,
  reelPreviewUrl,
  reelViewUrl,
  services,
  sfxFolderUrl,
  sfxPieces,
  stats,
} from "@/lib/portfolio-data";

const AccentIcon = accentIcon;

function LinkButton({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const className =
    tone === "dark"
      ? "bg-ink text-paper hover:bg-aubergine"
      : "border border-line bg-white/80 text-ink hover:border-ink";

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition ${className}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-aubergine">
      <AccentIcon className="h-3.5 w-3.5 text-ember" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/86 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a className="text-sm font-black uppercase tracking-[0.18em]" href="#top">
            Chris D&apos;Eletto
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-ink/70 md:flex">
            <a className="hover:text-ink" href="#work">
              Work
            </a>
            <a className="hover:text-ink" href="#sound">
              Sound
            </a>
            <a className="hover:text-ink" href="#credits">
              Credits
            </a>
            <a className="hover:text-ink" href="#contact">
              Contact
            </a>
          </div>
          <LinkButton href={portfolioUrl} tone="light">
            Portfolio <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </nav>
      </header>

      <section
        className="relative isolate overflow-hidden border-b border-line"
        id="top"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(184,255,92,0.22),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(255,106,61,0.16),transparent_24%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              {["Game Audio Director", "Composer", "Sound Designer"].map((item) => (
                <span
                  className="rounded-md border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-aubergine"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-ink md:text-7xl">
              Music and sound for games that need a point of view.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72">
              Chris D&apos;Eletto is a game audio director, composer, sound
              designer, and producer working across released games, unreleased AAA
              projects, film/TV scoring, trailers, and original artist-driven
              music.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href={musicFolderUrl}>
                <Play className="h-4 w-4" /> Hear the reel
              </LinkButton>
              <LinkButton href={sfxFolderUrl} tone="light">
                Open SFX library <ArrowUpRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-lg border border-line bg-white/82 p-4 shadow-soft">
              <div className="relative overflow-hidden rounded-md bg-ink text-paper">
                <div className="relative aspect-video bg-black">
                  <iframe
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                    src={reelPreviewUrl}
                    title="Chris D'Eletto Video Game Composer Reel"
                  />
                </div>
                <div className="relative p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal">
                        Featured reel
                      </p>
                      <h2 className="mt-3 text-2xl font-black">
                        Chris D&apos;Eletto Video Game Composer Reel
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-md bg-signal text-ink">
                      <Play className="h-7 w-7 fill-current" />
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/14 pt-5">
                    <p className="max-w-sm text-sm leading-6 text-paper/72">
                      Embedded from the private portfolio Drive folder. Use the
                      direct link if the preview needs a signed-in Google session.
                    </p>
                    <LinkButton href={reelViewUrl} tone="light">
                      Open reel <ArrowUpRight className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div className="rounded-md border border-line bg-bone p-4" key={stat.label}>
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 text-ink/64">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white/56" id="work">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionLabel>Featured Work</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  className="group rounded-lg border border-line bg-paper p-5 transition hover:-translate-y-1 hover:border-ink hover:shadow-soft"
                  href={item.href}
                  key={item.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="mb-12 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-paper">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md bg-signal px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/68">{item.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                    Open piece <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line" id="sound">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                A full-stack audio partner for production.
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/70">
                From score and songs to implementation-ready SFX, Chris can shape
                the sonic identity and keep the actual production work moving.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div className="rounded-lg border border-line bg-white p-5" key={service.title}>
                    <Icon className="h-6 w-6 text-ember" />
                    <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/68">{service.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <SectionLabel>Music</SectionLabel>
            <h2 className="text-3xl font-black md:text-4xl">Scoring, songs, cues, and trailers.</h2>
            <div className="mt-7 grid gap-2">
              {musicPieces.map((piece) => (
                <div
                  className="flex items-center justify-between rounded-md border border-white/12 bg-white/6 px-4 py-3"
                  key={piece}
                >
                  <span className="text-sm font-semibold">{piece}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-signal">
                    Music
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Sound Design</SectionLabel>
            <h2 className="text-3xl font-black md:text-4xl">Gameplay-ready SFX and atmospheres.</h2>
            <div className="mt-7 grid gap-2">
              {sfxPieces.map((piece) => (
                <div
                  className="flex items-center justify-between rounded-md border border-white/12 bg-white/6 px-4 py-3"
                  key={piece}
                >
                  <span className="text-sm font-semibold">{piece}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-signal">
                    SFX
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white/58" id="credits">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionLabel>Credits</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credits.map((credit) => (
              <div className="rounded-lg border border-line bg-paper p-5" key={credit.title}>
                <div className="mb-8 inline-flex rounded-md bg-bone px-2.5 py-1 text-xs font-black uppercase tracking-[0.13em] text-aubergine">
                  {credit.type}
                </div>
                <h3 className="text-2xl font-black">{credit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{credit.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="rounded-lg border border-line bg-white p-6 md:p-8">
            <SectionLabel>Profile</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-4xl font-black leading-tight">
                  Built for roles where taste, speed, and implementation all matter.
                </h2>
                <p className="mt-5 text-base leading-8 text-ink/72">
                  Chris brings a rare blend of artist identity, studio production,
                  game audio direction, sound design, and technical implementation.
                  The work spans released titles, private AAA material, original
                  songs, trailers, film/TV scoring, and sound libraries organized
                  for hiring review.
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-2">
                {keywords.map((keyword) => (
                  <span
                    className="rounded-md border border-line bg-bone px-3 py-2 text-sm font-bold text-ink/78"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper" id="contact">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 rounded-lg border border-line bg-ink p-6 text-paper md:grid-cols-[1fr_auto] md:p-8">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-4xl font-black">Available for game audio, scoring, and sound design opportunities.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-paper/70">
                Use the portfolio link for private review. Resume PDF and updated
                reel can be added here once finalized.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <LinkButton href={portfolioUrl} tone="light">
                <BriefcaseBusiness className="h-4 w-4" /> Portfolio
              </LinkButton>
              <LinkButton href="mailto:ADD_EMAIL_HERE" tone="light">
                <Mail className="h-4 w-4" /> Email Chris
              </LinkButton>
              <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/18 px-4 text-sm font-semibold text-paper/82">
                <Download className="h-4 w-4" /> Resume coming soon
              </span>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-ink/62">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-aubergine" />
            <p>
              Private/NDA materials are represented carefully. Public copy can be
              tightened further once specific credits and permissions are confirmed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
