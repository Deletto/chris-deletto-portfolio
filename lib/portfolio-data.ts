import {
  Disc3,
  Film,
  Gamepad2,
  Headphones,
  Mic2,
  Radio,
  Sparkles,
  Waves,
} from "lucide-react";

export const portfolioUrl =
  "https://drive.google.com/drive/folders/106q1ICZln3-ezMlnkSuWyPMHPiuFXtei";

export const musicFolderUrl =
  "https://drive.google.com/drive/folders/1iaN-OkrHcj_i2V70WVU0XDPltphX8Xot";

export const sfxFolderUrl =
  "https://drive.google.com/drive/folders/14Zs-6ricx_gs0MtudTI7rdOmzenGjp6R";

export const reelFileId = "1JBOFey56nWFWSi2Aa0_3nPXMXC_Ri6fz";

export const reelPreviewUrl = `https://drive.google.com/file/d/${reelFileId}/preview`;

export const reelViewUrl = `https://drive.google.com/file/d/${reelFileId}/view`;

export const stats = [
  { value: "12+", label: "years in music & entertainment" },
  { value: "UE5", label: "audio pipelines & implementation" },
  { value: "AAA", label: "released and unreleased game work" },
  { value: "2", label: "core disciplines: music + sound" },
];

export const credits = [
  {
    title: "Evil Dead: The Game",
    role: "Original song co-writer / lyrics",
    type: "Released game",
  },
  {
    title: "Saber Interactive",
    role: "Composer / sound designer for released and unreleased projects",
    type: "Game studio",
  },
  {
    title: "Wicked Games",
    role: "Audio director, composer, UE5 implementation, pipeline ownership",
    type: "Current",
  },
  {
    title: "Bus Bound",
    role: "Original music",
    type: "Game music",
  },
  {
    title: "Docked",
    role: "Original music",
    type: "Game music",
  },
  {
    title: "SPHERIX",
    role: "Trailer music/editing, open-world cues, dungeon ambience, game SFX",
    type: "Portfolio",
  },
];

export const featured = [
  {
    title: "Video Game Composer Reel",
    label: "Featured reel",
    body: "A focused reel for game composition, scoring, trailer work, and production-forward audio.",
    icon: Film,
    href: reelViewUrl,
  },
  {
    title: "Evil Dead: Burn Them Down",
    label: "Released game song",
    body: "Original song work and lyrics contribution for Evil Dead: The Game.",
    icon: Mic2,
    href: musicFolderUrl,
  },
  {
    title: "SPHERIX Gameplay Trailer",
    label: "Game trailer",
    body: "Music and editing for a gameplay trailer, plus supporting world and ambience cues.",
    icon: Gamepad2,
    href: musicFolderUrl,
  },
];

export const musicPieces = [
  "Spherix Open World",
  "Spherix Zen Night",
  "Bittersweet Departure",
  "Orchestral Horror",
  "Journey To Somewhere",
  "Mystery",
  "Drama Inspirational",
  "Drama Cue",
  "Explore Cue",
  "Slow Motion Gamble - Sci Fi",
  "Untitled Space Game - Electronic",
];

export const sfxPieces = [
  "John Carpenter's Toxic Commando SFX",
  "Atmosphere: Outdoors",
  "Footsteps - Walk / Run / Jump",
  "Weapons - Traditional",
  "Horror SFX Texture",
  "Suspense Texture",
  "SPHERIX Dungeon Ambience",
  "SPHERIX Quest Complete",
  "Old Windmill SFX",
  "Thriller Atmosphere Ambience",
];

export const services = [
  {
    title: "Game Audio Direction",
    body: "Defining the sonic identity, pipelines, priorities, and communication rhythms that keep audio aligned with gameplay.",
    icon: Radio,
  },
  {
    title: "Original Music",
    body: "Songs, score, adaptive cues, trailer music, cinematic themes, and production-ready mixes for games and screen.",
    icon: Disc3,
  },
  {
    title: "Sound Design",
    body: "Atmospheres, footsteps, weapons, textures, impacts, gameplay feedback cues, and implementation-ready SFX.",
    icon: Waves,
  },
  {
    title: "Full-Stack Production",
    body: "Composition, recording, editing, mixing, mastering, asset prep, UE5 implementation, and final delivery support.",
    icon: Headphones,
  },
];

export const keywords = [
  "Game audio",
  "Composition",
  "Sound design",
  "Unreal Engine 5",
  "Music production",
  "Mixing",
  "Mastering",
  "Audio pipelines",
  "Trailer audio",
  "Gameplay SFX",
  "Atmospheres",
  "Footsteps",
  "Weapons",
  "Creative direction",
  "Fast turnaround",
];

export const accentIcon = Sparkles;
