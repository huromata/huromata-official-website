// Web Audio API sound synthesis — no files, no royalties, no loading time.
// AudioContext is created lazily on first call (browser requires a user gesture first).

const STORAGE_KEY = "huro_sound";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function getSoundEnabled(): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(STORAGE_KEY) !== "off";
}

export function setSoundEnabled(val: boolean): void {
  localStorage.setItem(STORAGE_KEY, val ? "on" : "off");
}

function tone(
  freq: number,
  freqEnd: number,
  duration: number,
  gain: number,
  startOffset = 0,
  type: OscillatorType = "sine"
): void {
  const audio = getCtx();
  if (!audio) return;

  const osc = audio.createOscillator();
  const g = audio.createGain();
  osc.connect(g);
  g.connect(audio.destination);

  osc.type = type;
  const t = audio.currentTime + startOffset;
  osc.frequency.setValueAtTime(freq, t);
  if (freqEnd !== freq) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, t + duration);
  }
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + duration);

  osc.start(t);
  osc.stop(t + duration + 0.01);
}

/** Soft mechanical click — played on every button/link click */
export function playClick(): void {
  if (!getSoundEnabled()) return;
  tone(800, 380, 0.075, 0.12);
}

/** Faint high tick — played on desktop nav link hover */
export function playHover(): void {
  if (!getSoundEnabled()) return;
  tone(1400, 1400, 0.022, 0.04);
}

/** Short pop — played when mobile menu opens or closes */
export function playMenuToggle(open: boolean): void {
  if (!getSoundEnabled()) return;
  if (open) {
    tone(280, 560, 0.055, 0.08);
  } else {
    tone(560, 280, 0.055, 0.08);
  }
}

/** 3-note ascending arpeggio (C5→E5→G5) — WhatsApp form submit */
export function playSuccess(): void {
  if (!getSoundEnabled()) return;
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  notes.forEach((freq, i) => {
    tone(freq, freq, 0.14, 0.10, i * 0.11);
  });
}

/** Short ascending 2-note confirm — played when sounds are turned ON */
export function playSoundOn(): void {
  tone(523, 523, 0.08, 0.10, 0);
  tone(784, 784, 0.08, 0.10, 0.09);
}

/** Short descending 2-note dismiss — played when sounds are turned OFF */
export function playSoundOff(): void {
  tone(784, 784, 0.08, 0.10, 0);
  tone(523, 523, 0.08, 0.10, 0.09);
}

/** Startup boot sequence — low drone + rising sweep + ticks + ready chord */
export function playBoot(): void {
  if (!getSoundEnabled()) return;
  // Low background drone
  tone(80, 80, 2.5, 0.05, 0.0);
  // Rising startup sweep
  tone(100, 380, 1.1, 0.09, 0.1);
  // Tick sounds as each status line appears
  tone(1800, 1800, 0.02, 0.07, 1.0);
  tone(1800, 1800, 0.02, 0.07, 2.0);
  tone(1800, 1800, 0.02, 0.07, 3.0);
  // Ready chord — C4 → E4 → G4 → C5
  tone(261.63, 261.63, 0.35, 0.10, 3.5);
  tone(329.63, 329.63, 0.30, 0.08, 3.6);
  tone(392.00, 392.00, 0.28, 0.06, 3.7);
  tone(523.25, 523.25, 0.40, 0.04, 3.85);
}
