import type { TAudioController } from "@/types/TAudioController";

class AudioService implements TAudioController {
  public isPlaying: boolean;
  public currentAudio: string | null;
  private audio: HTMLAudioElement | null;

  constructor() {
    this.isPlaying = false;
    this.currentAudio = null;
    this.audio = null;
  }

  public async play(): Promise<void> {
    await this.audio?.play();
  }
  public async pause(): Promise<void> {
    this.audio?.pause();
  }

  set setAudio(audioLink: string | null) {
    this.currentAudio = audioLink;
    if (audioLink !== null) this.audio = new Audio(audioLink);
    else this.audio = null;
  }
}

export default AudioService;
