import { track } from "@vercel/analytics";

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      eventName: string | Date,
      params?: EventProps
    ) => void;
    plausible?: (eventName: string, options?: { props?: EventProps }) => void;
  }
}

const eventLabels: Record<string, string> = {
  composer_reel_play: "Composer Reel Play",
  audio_track_play: "Audio Track Play",
};

export function trackPortfolioEvent(eventName: string, props: EventProps = {}) {
  if (typeof window === "undefined") {
    return;
  }

  track(eventLabels[eventName] ?? eventName, props);
  window.gtag?.("event", eventName, props);
  window.plausible?.(eventLabels[eventName] ?? eventName, { props });
}
