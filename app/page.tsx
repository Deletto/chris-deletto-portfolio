"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Download,
  Instagram,
  Mail,
  Play,
} from "lucide-react";
import {
  credits,
  shippedTitles,
  emailUrl,
  evilDeadVideos,
  instagramUrl,
  musicPieces,
  releasedGameVideos,
  reelSrc,
  resumeUrl,
} from "@/lib/portfolio-data";

function ActionLink({
  href,
  children,
  download,
}: {
  href: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  const isInternal =
    href.startsWith("#") || href.startsWith("/") || href.startsWith("mailto:");

  return (
    <a
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/18 bg-white/8 px-4 text-sm font-bold text-zinc-100 transition hover:border-white/38 hover:bg-white/14"
      download={download}
      href={href}
      rel={isInternal ? undefined : "noreferrer"}
      target={isInternal ? undefined : "_blank"}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);

  function stopOtherTracks(activeIndex: number) {
    audioRefs.current.forEach((player, index) => {
      if (!player || index === activeIndex) {
        return;
      }

      player.pause();
      player.currentTime = 0;
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/76 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a className="brand-mark text-xl uppercase" href="#top">
            Chris D&apos;Eletto
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-zinc-400 md:flex">
            <a className="hover:text-white" href="#music">
              Music
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#credits">
              Credits
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ActionLink href={emailUrl}>
              <Mail className="h-4 w-4" />{" "}
              <span className="hidden sm:inline">Email</span>
            </ActionLink>
            <ActionLink href={instagramUrl}>
              <Instagram className="h-4 w-4" />{" "}
              <span className="hidden sm:inline">Instagram</span>
            </ActionLink>
          </div>
        </nav>
      </header>

      <section className="hero-shell relative isolate" id="top">
        <Image
          alt="Chris D'Eletto, game audio composer and sound designer"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-55 grayscale"
          fill
          priority
          sizes="100vw"
          src="/images/chris-deletto-hero-bg.jpg"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.65)_44%,rgba(0,0,0,0.45)),radial-gradient(circle_at_78%_20%,rgba(130,13,24,0.28),transparent_30%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-[0.7fr_1.3fr] md:px-8">
          <div className="max-w-xl">
            <p className="mb-4 whitespace-nowrap text-[0.67rem] font-black uppercase leading-5 text-red-500 sm:text-xs md:text-sm">
              Game Audio Director / Composer / Sound Designer
            </p>
            <h1 className="display-title flex flex-col gap-2 text-[clamp(3.7rem,9vw,8.4rem)] leading-[0.84]">
              <span>Chris</span>
              <span>D&apos;Eletto</span>
              <span className="sr-only">
                Game Audio Composer, Sound Designer, and Audio Director
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-7 text-zinc-300">
              AAA game audio credits across multiple genres, with cinematic
              cues, game-ready sound, and production-minded audio direction.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink href="#music">
                <Play className="h-4 w-4 fill-current" /> Play music
              </ActionLink>
              <ActionLink download href={resumeUrl}>
                <Download className="h-4 w-4" /> Resume
              </ActionLink>
            </div>
          </div>

          <div className="relative" id="reel">
            <div className="reel-frame">
              <video
                className="aspect-video h-full w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={reelSrc} type="video/mp4" />
              </video>
            </div>
            <div className="mt-4 flex justify-center">
              <span className="reel-caption">Composer Reel</span>
            </div>
          </div>
        </div>

        {/* Shipped Titles Strip */}
        <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-center">
              <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-zinc-500">
                Shipped Titles
              </p>
            </div>
            <div className="flex gap-3 overflow-x-auto [scrollbar-width:none]">
              {shippedTitles.map((game) => (
                <div
                  key={game.title}
                  title={game.title}
                  className="relative h-[90px] flex-1 min-w-[90px] overflow-hidden rounded-sm border border-white/10 opacity-70 transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src={game.art}
                    alt={game.title}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b]" id="music">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Music Player</p>
              <h2 className="display-title mt-2 text-5xl md:text-7xl">
                Cues & Songs
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-400">
              Fast samples first. Each cue has its own player, so the music is
              right there.
            </p>
          </div>

          <div className="track-list">
            {musicPieces.map((piece, index) => (
              <article className="track-row" key={piece.src}>
                <span className="relative h-16 w-16 shrink-0 overflow-hidden bg-zinc-950">
                  <Image
                    alt={piece.coverAlt}
                    className="h-full w-full object-cover transition duration-500"
                    fill
                    sizes="64px"
                    src={piece.cover}
                  />
                  <span className="absolute inset-0 bg-black/24" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-base font-black text-zinc-50">
                    {piece.title}
                  </span>
                  <span className="mt-1 block truncate text-xs font-bold uppercase text-zinc-500">
                    {piece.category}
                  </span>
                </span>
                <audio
                  ref={(element) => {
                    audioRefs.current[index] = element;
                  }}
                  className="audio-player w-full md:max-w-[250px]"
                  controls
                  onPlay={() => stopOtherTracks(index)}
                  preload="metadata"
                  src={piece.src}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505]" id="evil-dead">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[0.7fr_1.3fr] md:px-8 md:py-16">
          <div>
            <p className="section-kicker">Released Game Songs</p>
            <h2 className="display-title mt-2 text-5xl md:text-7xl">
              Evil Dead
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              Song work and lyrics contribution for Evil Dead: The Game.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {evilDeadVideos.map((video) => (
              <div className="youtube-card" key={video.src}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={video.src}
                  title={video.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080808]" id="released-game-video">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[0.7fr_1.3fr] md:px-8 md:py-16">
          <div>
            <p className="section-kicker">Game Trailers</p>
            <h2 className="display-title mt-2 text-5xl md:text-7xl">
              Bus Bound & Docked
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              Additional released game trailer work.
            </p>
          </div>
          <div className="grid gap-7">
            {releasedGameVideos.map((video) => (
              <article
                className="released-video w-full max-w-[760px] justify-self-center"
                key={video.src}
              >
                <h3 className="display-title text-3xl text-zinc-100 md:text-4xl">
                  {video.title}
                </h3>
                <div className="youtube-card mt-3">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={video.src}
                    title={video.title}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080808]" id="about">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[0.86fr_1.14fr] md:px-8 md:py-16">
          <div className="about-image relative min-h-[430px] overflow-hidden rounded-sm border border-white/10 bg-zinc-950 md:min-h-full">
            <Image
              alt="Chris D'Eletto, game audio composer and sound designer"
              className="h-full w-full object-cover object-center"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              src="/images/chris-deletto-about-portrait.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-kicker">About Me</p>
            <h2 className="display-title mt-2 text-5xl md:text-7xl">
              Built For Game Audio
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-7 text-zinc-300">
              <p>
                I&apos;m a Game Audio Director, Composer, and Sound Designer
                creating original music, sound design, and complete audio
                solutions for games. From cinematic orchestral scores and
                immersive ambient soundscapes to high-energy action music and
                full sonic identities, I build custom audio around the creative
                vision of each project.
              </p>
              <p>
                I work from a professional studio and handle the full music
                production process, including composition, recording,
                production, mixing, and mastering.
              </p>
              <p>
                As Audio Director for Wicked Games, I understand how audio fits
                into the larger development pipeline. I can help shape a
                project&apos;s overall sound, manage audio workflows, support
                Unreal Engine 5 implementation, and collaborate closely with
                developers so audio strengthens both gameplay and storytelling.
              </p>
              <p>
                My credits include work connected to Evil Dead: The Game, NBA
                2K Playgrounds, Docked, and John Carpenter&apos;s Toxic
                Commando. Whether a project needs music, sound design, audio
                direction, implementation support, or a full audio partner, I
                bring a practical, collaborative approach focused on elevating
                the player experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#101010]" id="credits">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Selected Details</p>
              <h2 className="display-title mt-2 text-5xl md:text-7xl">
                Work That Matters
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionLink href={instagramUrl}>
                <Instagram className="h-4 w-4" /> Instagram
              </ActionLink>
              <ActionLink download href={resumeUrl}>
                <Download className="h-4 w-4" /> Resume
              </ActionLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credits.map((credit) => (
              <article className="credit-card" key={credit.title}>
                <p className="text-xs font-black uppercase text-red-400">
                  {credit.label}
                </p>
                <h3 className="mt-5 text-2xl font-black">{credit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {credit.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
            <p>
              Game audio, composition, sound design, UE5 implementation, trailer
              audio, mixing, mastering, and full-stack production.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
