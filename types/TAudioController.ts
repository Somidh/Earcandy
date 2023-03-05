export type TAudioController = {
  isPlaying: boolean;
  currentAudio: string | null;
  audio: HTMLAudioElement | null;
  play(): void | Promise<void>;
  pause(): void | Promise<void>;
};
