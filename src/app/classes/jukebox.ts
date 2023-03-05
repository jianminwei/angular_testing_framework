import { Song } from "./song";

export class Jukebox {

    constructor(private songs: Song[]) {
    }

    play() : string {
        const song = this.getRandomSong();
        return song.play();
    }

    private getRandomSong() {
        const songCount = this.songs.length;
        const songIndex = Math.floor(Math.random() * songCount);
        return this.songs[songIndex];
    }
}
