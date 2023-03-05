export type TAudioController = {
  isPlaying: boolean;
  currentAudio: string | null;
  play(): void | Promise<void>;
  pause(): void | Promise<void>;
};
